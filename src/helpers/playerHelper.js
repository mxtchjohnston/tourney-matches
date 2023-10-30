export const preparePlayerData = (players) => {
  return Object.values(players);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    player.wins = matchData.reduce((acc, val) => val.winner === player.gamerTag ? acc += 1 : acc, 0);
    return player
  });
};