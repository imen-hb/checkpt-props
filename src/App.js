import './App.css';
import React from 'react';
import PlayersList from './component/ PlayersList.js';
import Navigation from './component/Navigation.js';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PlayersList />
    </div>
  );
}

export default App;