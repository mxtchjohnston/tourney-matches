import Player from "./Player";

const PlayerList = (props) => {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player/>
    </section>
    );
};

export default PlayerList;