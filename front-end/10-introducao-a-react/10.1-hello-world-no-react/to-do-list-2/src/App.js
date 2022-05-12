import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDos = ['estudar', 'treinar', 'jogar', 'passear']

class App extends Component {
  render() {
    return (
      <div className="to-do-list">
        <p>{ toDos.map(element => task(element))}
        </p>
      </div>
    );
  }
}

export default App;
