import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComputerClock from './Components/Clock/ComputerClock.js';
import WorldClock from './Components/Clock/WorldClock';

function App(props) {
  return (
  <div className="main">
    <div className ="title" ><h1>Clock : Exemplo de acesso a API externa.</h1></div>
    <div className="hour">
      <div className="hourItem"><ComputerClock /></div>
      <div className="hourItem"><WorldClock /></div>  
      <div className="hourItem"><WorldClock local="Europe/London" /></div>
    </div>
  </div>);
}

export default App;
