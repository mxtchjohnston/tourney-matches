import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelper";

const PlayerList = (props) => {

  const playerDataArray = preparePlayerData(props.playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, props.matchData);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayerData.map(player => <Player {...player}/>)}
    </section>
    );
};

export default PlayerList;