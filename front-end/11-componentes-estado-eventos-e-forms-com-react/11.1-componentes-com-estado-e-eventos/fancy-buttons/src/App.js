import React from 'react';

function handleClickTwo() {
  console.log('Clicou!');
}

function handleClickThree() {
  console.log('Clicou!');
}

class App extends React.Component {
  handleClickOne() {
    console.log('Clicou!');
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClickOne }>Botão 1</button>
        <button onClick={ handleClickTwo }>Botão 2</button>
        <button onClick={ handleClickThree }>Botão 3</button>
      </div>
    )
  }
}

export default App;