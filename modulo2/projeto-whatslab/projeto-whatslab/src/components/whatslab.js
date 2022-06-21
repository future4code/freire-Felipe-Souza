import React from "react";
import "./whatslab.css"


class Whatslab extends React.Component {
    state = {
     
      pessoas: [],
      
      valorInputPessoa: "",
      valorInputMensagem: ""
    };
  
    adicionaPessoa = () => {      
      const novaPessoa = {        
        nome: this.state.valorInputPessoa,        
        mensagem: this.state.valorInputMensagem
      };  
      
      const novoPessoas = [...this.state.pessoas, novaPessoa];  
      
      this.setState({ pessoas: novoPessoas });
    };
  
    onChangeInputPessoa = (event) => {      
      this.setState({ valorInputPessoa: event.target.value });
    };
  
    onChangeInputMensagem = (event) => {      
      this.setState({ valorInputMensagem: event.target.value });
    };
  
    render() {      
      const listaDeComponentes = this.state.pessoas.map((pessoa) => {
        return (
            <div className="corpoTexto">
                <p className="texto">
                    <b>{pessoa.nome}:</b> {pessoa.mensagem}
                </p>
            </div>  
        );
      });
  
      return (
        <div className="tela">
          <h1>Whatslab</h1>
          <div className="inputs">
            <input
              className="inputNome"              
              value={this.state.valorInputPessoa}              
              onChange={this.onChangeInputPessoa}
              placeholder={"Nome"}
            />
            <input
              className="inputMensagem"              
              value={this.state.valorInputMensagem}              
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <button className="botao" onClick={this.adicionaPessoa}>Enviar</button>
          </div>
          <div>{listaDeComponentes}</div>
        </div>
      );
    }
  }
  
  export default Whatslab;