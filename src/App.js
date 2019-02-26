import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={titleStyles}>My Board</div>
        <Board />
      </div>
    );
  }
}

const titleStyles = {
  marginTop: "20px",
  fontWeight: "bold"
}

export default App;
