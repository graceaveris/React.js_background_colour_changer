import React, { Component } from 'react';
import logo from './friedhead.svg';
import ColourContainer from './ColourContainer/ColourContainer';
import './App.css';

//CLASS COMPONENT, WITH NO STATE!

class App extends Component {

  render() {
    return (
    <div className="App">
     
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Seventeen / Random Colour Scheme</h2>
      </header>

      <div className="color-section">
          <ColourContainer />
          <ColourContainer />
          <ColourContainer />
          <ColourContainer />
      </div>

    </div>

    );
  }
}

export default App;












