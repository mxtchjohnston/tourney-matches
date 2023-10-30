import Match from "./Match";
import matchData from "../data/matchData";

const MatchList = (props) => {
  return (
    <section className="PlayerList MatchList">
      <h1>Match List</h1>
      <Match/>
    </section>
  );
};

export default MatchList;