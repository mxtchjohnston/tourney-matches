import Player from "./Player";
import matchData from "../data/matchData";
import playerData from '../data/playerData'
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelper";

const PlayerList = (props) => {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {console.log(parsedPlayerData)}
      <Player/>
    </section>
    );
};

export default PlayerList;