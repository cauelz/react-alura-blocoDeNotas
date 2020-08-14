import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titutlo="";
    this.texto="";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          //Veja que precisamos associar o this.handleMudancaTitulo a instancia da classe
          //Como o onChange é um evento externo, o this é totalmente diferente do contexto do metodo associado a ele
          //Assim, precisamos fazer um bind a instancia da classe, ou seja, ao proprio this.
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;