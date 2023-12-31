import Match from "./Match";

const MatchList = (props) => {
  const matchData = props.matchData;
  return (
    <section className="PlayerList MatchList">
      <h1>Match List</h1>
      {matchData.map(match => <Match key={match.matchNumber} {...match}/>)}
    </section>
  );
};

export default MatchList;