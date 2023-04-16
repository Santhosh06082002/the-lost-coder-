// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Game from './Game';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <div>
          <h1>Pirate's Treasure Hunt</h1>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" id="name" value={playerName} onChange={handleNameChange} />
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      ) : (
        <Game playerName={playerName} />
      )}
    </div>
  );
}

export default App;
