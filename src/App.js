import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={playerData} matchData={matchData}/>
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
