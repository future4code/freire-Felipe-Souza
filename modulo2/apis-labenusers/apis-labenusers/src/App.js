import axios from "axios";
import React from "react";

export default class App extends React.Component {
  state = {
    users: [],
    inputName: ""
  };

  onChangeInput = (event) => {
    this.setState({ inputName: event.target.value });
  };
  ////////////////////////////// Criar usuário ////////////////////////////////
  createUser = (event) => {
    const body = {
      name: this.state.inputName
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "felipe-souza-freire"
        }
      }
    );
  };
  //////////////////////////////////////////////////////////////////////////////


  
  render() {
    return (
      <div className="App">
        <section>
          <h2>Tela Inicial</h2>
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.onChangeInput}>

          </input>

          <input
            placeholder="Email">

          </input>

          <button
          onClick={this.createUser}>
            Criar Usuário</button>
        </section>

        <hr />
        <h2>Tela de Detalhes</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <hr />
        <h2>Procurar Usuário</h2>
        <input
          placeholder="Nome exato para busca">

        </input>
        <button>Buscar</button>
      </div>
    );
  }
}