import { Meteor } from 'meteor/meteor';
import TrophyHunters from '../../trophyHunters';
import { check } from 'meteor/check';
import { getSpectatorDomainAndPort } from '../../../riot-api/staticData';
import riotApi from '../../../riot-api/server/riotApi';

const spectateCurrentMatch = function(userId) {
  this.unblock();
  check(userId, String);

  const trophyHunter = TrophyHunters.findOne({ userId });
  if (!trophyHunter) {
    throw new Meteor.Error('Trophy hunter not found');
  }

  const currentGame = riotApi.getCurrentGameForSummonerId(
    trophyHunter.region,
    trophyHunter.summonerId
  );
  if (!currentGame) {
    throw new Meteor.Error('Current game not found');
  }
  const { domain, port } = getSpectatorDomainAndPort(currentGame.platformId);
  return {
    domain,
    port,
    encryptionKey: currentGame.observers.encryptionKey,
    matchId: currentGame.gameId,
    platformId: currentGame.platformId
  };
};

export { spectateCurrentMatch };
