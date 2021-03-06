import { Accounts } from 'meteor/accounts-base';
import TrophyHunters from '/imports/api/trophy-hunters/trophyHunters';
import playstyles from '/imports/api/playstyles/playstyles';
import riotApi from '/imports/api/riot-api/server/riotApi';

const oldRegions = {
  br1: 'br',
  eune: 'eune',
  euw1: 'euw',
  jp1: 'jp',
  la1: 'lan',
  la2: 'las',
  na1: 'na',
  oc1: 'oce',
  tr1: 'tr'
};

const createTrophyHunter = function(options, user) {
  const region = oldRegions[options.region] || options.region;
  const summoner = riotApi.getSummoner(region, options.summonerId);
  const leaguePositions = riotApi.getLeaguePositions(region, options.summonerId);

  if (TrophyHunters.findOne({ userId: user._id })) {
    console.log('TrophyHunter already exists', summoner.name);
    return;
  }

  const now = new Date();
  TrophyHunters.insert({
    userId: user._id,
    accountId: summoner.accountId,
    summonerId: options.summonerId,
    summonerName: summoner.name,
    summonerLevel: summoner.summonerLevel,
    leaguePositions,
    profileIconId: summoner.profileIconId,
    score: 0,
    seasonScore: 0,
    tournamentScore: 0,
    trophyPoints: 0,
    region: region,
    trophiesObtained: [],
    features: {},
    playstyle: playstyles.unknown.name,
    items: {},
    trees: {},
    friends: [],
    status: 'offline',
    statusConnection: 'offline',
    statusDefault: 'online',
    channels: [
      {
        name: 'announcements',
        lastSeen: now
      },
      {
        name: 'general',
        lastSeen: now
      },
      {
        name: 'lookingforgroup',
        lastSeen: now
      }
    ],
    lastLogin: now,
    overwolfUser: options.overwolfUser
  });
};

Accounts.onCreateUser(function(options, user) {
  createTrophyHunter(options, user);
  return user;
});
