import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/style.css";
import firebase from '../../rotas/firebase';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      nome: '',
      sobrenome: '',
      dataNascimento: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(async (retorno) => {
        await firebase.firestore().collection('usuario').doc(retorno.user.uid).set({
          nome: this.state.nome,
          sobrenome: this.state.sobrenome,
          dataNascimento: this.state.dataNascimento
        })

        window.location.href = "/"
      })
      .catch((erro)=>{

      });
  }

  render() {
    return (
      <div>
        <h1>Cadastrar usuario</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            E-mail
            <input type="email" name="email" placeholder='exemplo@email.com' value={this.state.email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Senha
            <input type="password" name="senha" value={this.state.senha} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Nome
            <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Sobrenome
            <input type="text" name="sobrenome" value={this.state.sobrenome} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Data de Nascimento
            <input type="date" name="dataNascimento" value={this.state.dataNascimento} onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit" onClick={this.handleSubmit} className='buttom'>Cadastrar</button>
        </form>

        <Link to="/"><button className='link'>Voltar ao Login</button></Link>
      </div>
    );
  }
}

export default Cadastro;

