const Match = (props) => {
  return (
    <article className="Match">
      <h1>
        {props.players[0]} <span>vs</span> {props.players[1]}
      </h1>
      <h2>
        {props.winner} is the winner by {props.scoreDifference} points!
      </h2>
      <h2>
        No winners yet!
      </h2>
    </article>
  );
};

export default Match;