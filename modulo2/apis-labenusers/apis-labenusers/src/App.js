import axios from "axios";
import React from "react";

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: ""
  };

  handInputNome = (event) => {
    this.setState({ inputName: event.target.value });
  };

  handInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };
  ////////////////////////////// Criar usuário ////////////////////////////////
  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios.post(url, body, {
      headers: {
        Authorization: "felipe-souza-freire"
      }
    })
      .then((res) => { alert("Usuário cadastrado com sucesso!") })
      .catch((err) => { alert(err.response.data.message) })
  };
  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////// LISTA DE USUARIOS ///////////////////////////////

  componentDidMount() {
    this.pegarUsers()
  }

  pegarUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
      headers: {
        Authorization: "felipe-souza-freire"
      }
    })
      .then((res) => { this.setState({ users: res.data }) })
      .catch((err) => { alert(err.response.data.message) })
  };

  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////// DELETAR USUARIO //////////////////////////////////

  deletarUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "felipe-souza-freire"
      }
    })
    .then((res) => {alert("Usuário deletado com sucesso")
    this.pegarUsers()
  })
    .catch((err) => {console.log(err.response.data.message)}) 
  }
  render() {
    const listaUsers = this.state.users.map((user) => {
      return <ul key={user.id}>
                <li>{user.name}</li>
                <button
                onClick={() => this.deletarUser(user.id)}>Deletar</button>
             </ul>
    })
    return (
      <div className="App">
        <section>
          <h2>Tela Inicial</h2>
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.handInputNome}>

          </input>

          <input
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.handInputEmail}>

          </input>

          <button
            onClick={this.createUser}>
            Criar Usuário</button>
        </section>

        <hr />
        <h2>Tela de Detalhes</h2>
        {listaUsers}

        <hr />
      </div>
    );
  }
}