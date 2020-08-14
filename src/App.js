import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas/listaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './assets/index.css';
import './assets/App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>

    );
  }
}


// react -> lib
// React -> ecossistema
export default App;
