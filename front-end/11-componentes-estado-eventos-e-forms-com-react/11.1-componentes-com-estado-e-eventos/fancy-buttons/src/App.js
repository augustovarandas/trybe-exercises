import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);

    this.state = {
      numeroDeCliquesBotao1: 0,
      numeroDeCliquesBotao2: 0,
      numeroDeCliquesBotao3: 0,
    };
  }

  handleClickOne() {
    this.setState((estadoAnterior) => ({
      numeroDeCliquesBotao1: estadoAnterior.numeroDeCliquesBotao1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.changeColor(this.state.numeroDeCliquesBotao1)}`);
    });
  }

  handleClickTwo() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBotao2: estadoAnterior.numeroDeCliquesBotao2 + 1,
    }), () => {
      console.log(`Botão 2 ${this.changeColor(this.state.numeroDeCliquesBotao2)}`);
    });
  }
  
  handleClickThree() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBotao3: estadoAnterior.numeroDeCliquesBotao3 + 1,
    }), () => {
      console.log(`Botão 3 ${this.changeColor(this.state.numeroDeCliquesBotao3)}`);
    });
  }
  
  changeColor (number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliquesBotao1, numeroDeCliquesBotao2, numeroDeCliquesBotao3 } = this.state;
    return (
      <div>
        <button 
          onClick={ this.handleClickOne }
          style={{ backgroundColor: this.changeColor(numeroDeCliquesBotao1)}}
        >
          Botão 1 | n° de cliques: {this.state.numeroDeCliquesBotao1}
        </button>

        <button 
          onClick={ this.handleClickTwo }
          style={{ backgroundColor: this.changeColor(numeroDeCliquesBotao2)}}
        >
          Botão 2 | n° de cliques: {this.state.numeroDeCliquesBotao2}
        </button>

        <button 
          onClick={ this.handleClickThree }
          style={{ backgroundColor: this.changeColor(numeroDeCliquesBotao3)}}
        >
          Botão 3 | n° de cliques: {this.state.numeroDeCliquesBotao3}
        </button>
      </div>
    );
  }
}

export default App;