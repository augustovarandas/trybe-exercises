import React from 'react';

function handleClickOne() {
  console.log('Clicou!');
}

function handleClickTwo() {
  console.log('Clicou!');
}

function handleClickThree() {
  console.log('Clicou!');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ handleClickOne }>Botão 1</button>);
        <button onClick={ handleClickTwo }>Botão 2</button>);
        <button onClick={ handleClickThree }>Botão 3</button>);
      </div>
    )
  }
}

export default App;