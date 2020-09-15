import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import prof from './assets/prof.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="prof-photo-container">
          <img src={prof} className="prof-photo" alt="prof"></img>
        </div>
        <div className="text-center">
          {/* <h1>Rate this vato's flow 1 through 69</h1> */}
          <h2>But the real question remains, where is this foo going?</h2>
          <h2><small>where is this foo going...</small></h2>
        </div>
      </header>
      <body>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Me @ <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
