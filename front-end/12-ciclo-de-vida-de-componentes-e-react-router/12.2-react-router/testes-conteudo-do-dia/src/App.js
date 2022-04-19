import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
      console.log(props.children);
    )
  }
}

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default App;
