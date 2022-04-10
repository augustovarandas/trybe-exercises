import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['futvolei', 'estudar', 'Trybe', 'mercado', 'academia'];

class App extends Component {
  render() {
    return (
      compromissos.map (itemMap => Task(itemMap))
    )
  }
}

export default App;
