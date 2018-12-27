const lolId=5426,gameRunning=function(gameInfo){return(console.log('gameRunning',gameInfo),gameInfo&&gameInfo.isRunning)&&!(Math.floor(gameInfo.id/10)!==lolId)&&(console.log('LoL running'),!0);// NOTE: we divide by 10 to get the game class id without it's sequence number
};export const isLoLRunning=function(){return new Promise(resolve=>{overwolf.games.getRunningGameInfo(function(res){resolve(gameRunning(res))})})};export const addGameLaunchedListener=listener=>{overwolf.games.onGameLaunched.addListener(listener)};export const addGameInfoUpdatedListener=listener=>{overwolf.games.onGameInfoUpdated.addListener(listener)};export const trackGameInfo=({gameLaunchedCallback,gameTerminatedCallback})=>{addGameLaunchedListener(({id})=>{Math.floor(id/10)!==lolId||gameLaunchedCallback()}),addGameInfoUpdatedListener(({runningChanged,gameInfo})=>{runningChanged&&Math.floor(gameInfo.id/10)===lolId&&(gameInfo.isRunning||gameTerminatedCallback())})};