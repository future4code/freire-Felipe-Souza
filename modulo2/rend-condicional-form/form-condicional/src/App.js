import React from 'react';
import './App.css';
import Etapa1 from './components/etapa1';

export class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <etapa1 />
      case 2:
        return <etapa2 />
      case 3:
        return <etapa3 />
      case 4:
        return <final />
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: +1 })
  };

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <button onClick={this.proximaEtapa()}>Próxima Etapa</button>
      </div>
    );
  }
}
export default App;