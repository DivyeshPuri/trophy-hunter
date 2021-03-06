import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import endpoints from '/imports/api/riot-api/endpoints';
import oldRegionsMap from '/imports/api/riot-api/regions';

export default class Overwolf {
  constructor(props) {
    this.summonerId = undefined;
    this.messageListeners = [];
    this.onError = props.onError;

    this.onMessage = this.onMessage.bind(this);
    this.setMessageListener = this.setMessageListener.bind(this);

    window.removeEventListener('message', this.onMessage);
    window.addEventListener('message', this.onMessage);
  }

  onMessage(event) {
    try {
      const data = event.data;
      if (data.overwolf) {
        console.log('onMessage', data.type, data.message);
        const { message, type } = data;

        switch (type) {
          case 'login': {
            this.login(message);
            break;
          }
          case 'overwolfUser':
            Meteor.call('updateOverwolfUser', message.overwolfUser);
            break;
          case 'startMatch':
            if (this.lastType !== type) this.startMatch();
            break;
          case 'matchOutcome':
            if (this.lastType !== type) this.endMatch();
            break;
          case 'notInGame':
            if (this.lastType !== type) this.checkMatchEnd();
            break;
        }
        this.lastType = type;
        if (this.messageListeners[type]) {
          this.messageListeners[type].forEach(listener => {
            listener(message);
          });
        }
      }
    } catch (error) {
      this.onError(error);
    }
  }

  setMessageListener(event, callback) {
    if (!this.messageListeners[event]) {
      this.messageListeners[event] = [];
    }
    this.messageListeners[event].push(callback);
  }

  loginOrCreateUser(username, password, summonerId, region, overwolfUser) {
    if (Meteor.loggingIn()) {
      return;
    }
    const trophyHunter = TrophyHunters.findOne({ userId: Meteor.userId() });
    if (trophyHunter && trophyHunter.summonerId === summonerId) {
      console.log('loginOrCreateUser - same summonerId', username);
      Meteor.call('updateOverwolfUser', overwolfUser);
      return;
    }

    console.log('loginOrCreateUser', username, overwolfUser);

    Meteor.loginWithPassword(username, password, error => {
      if (error) {
        if (error.reason === 'User not found') {
          // if user does not exists -> create a user
          Accounts.createUser(
            {
              username,
              password,
              summonerId,
              region,
              overwolfUser
            },
            error => {
              if (error) {
                throw new Meteor.Error('login', 'can not create an account', error);
              }
              parent.window.postMessage(
                {
                  overwolf: true,
                  type: 'showHelp'
                },
                '*'
              );
            }
          );
        } else {
          throw new Meteor.Error('login', 'can not login', error);
        }
      } else {
        Meteor.call('updateOverwolfUser', overwolfUser);
      }
    });
  }

  login({ region, accountId, id: summonerId, overwolfUser }) {
    region = oldRegionsMap[region.toLowerCase()] || region;
    region = region.toUpperCase();

    const endpoint = endpoints.find(endpoint => endpoint.region === region);

    if (region === 'PBE') {
      throw new Meteor.Error('Error', 'Public Beta Environment is not supported');
    }
    if (!endpoint) {
      throw new Meteor.Error('Error', 'Your region is not supported');
    }

    if (accountId && !summonerId) {
      Meteor.call('getSummonerId', { accountId, region }, (error, result) => {
        if (error || !result) {
          throw new Meteor.Error('Error', `Can not find summoner id for ${accountId} in ${region}`);
        }
        this.handleLogin({ accountId, region, summonerId: result, overwolfUser });
      });
    } else {
      this.handleLogin({ accountId, region, summonerId, overwolfUser });
    }
  }

  handleLogin({ accountId, region, summonerId, overwolfUser }) {
    summonerId = parseInt(summonerId);
    if (isNaN(summonerId)) {
      throw new Meteor.Error('Error', `Can not find summoner id for ${accountId} in ${region}`);
    }
    this.summonerId = summonerId;
    const username = `${region}.${summonerId}`;
    const password = username;

    // check if the username has changed
    const user = Meteor.user();
    if (user && user.username !== username) {
      // logout first
      Meteor.logout(error => {
        if (error) {
          console.log('logout error:', error);
        }
        this.loginOrCreateUser(username, password, summonerId, region, overwolfUser);
      });
    } else if (!user) {
      // try to login
      this.loginOrCreateUser(username, password, summonerId, region, overwolfUser);
    } else {
      Meteor.call('updateOverwolfUser', overwolfUser);
    }
  }

  startMatch() {
    console.log('startMatch');

    Meteor.call('startMatch', (error, result) => {
      if (error) {
        return console.log(error);
      }
      Meteor.call('UserPresence:setDefaultStatus', 'ingame');
      const showOverlay = result && result.showOverlay;
      console.log('show overlay?', showOverlay);
      if (showOverlay) {
        parent.window.postMessage(
          {
            overwolf: true,
            type: 'showOverlay'
          },
          '*'
        );
      }
    });
  }

  endMatch() {
    console.log('endMatch');

    Meteor.call('setMatchEnd', error => {
      if (error) {
        return console.log(error);
      }
    });
    Meteor.call('UserPresence:setDefaultStatus', 'online');
  }

  checkMatchEnd() {
    console.log('checkMatchEnd');
    if (!Meteor.userId()) {
      return;
    }
    Meteor.call('checkMatchEnd', (error, matchEnded) => {
      if (error) {
        return console.log(error);
      }
      if (matchEnded) {
        Meteor.call('UserPresence:setDefaultStatus', 'online');
      }
    });
  }
}
