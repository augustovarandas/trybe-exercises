import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import pokedex from './images/pokedex.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={pokedex} alt="Pokedex" />
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
