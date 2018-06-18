import React, { Component } from 'react';
import avengers from './components/AvengersData';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Avengers: by Nicky Chen</h1>
        </header>
        {this.state.avengers.map(avenger => (
          <div key={avenger.id}>
          Name: {avenger.name} Species: {avenger.species}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
