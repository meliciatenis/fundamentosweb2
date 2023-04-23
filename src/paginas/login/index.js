import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/style.css";
import firebase from '../../rotas/firebase';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      erro: null,
    };

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

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha);
      window.location.href = "./principal";
    } catch (erro) {
      this.setState({ erro: "Usuário não cadastrado." });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
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
          {this.state.erro && <p>{this.state.erro}</p>}
          <button type='submit' onClick={this.handleSubmit} className='buttom'>Accessar</button>
        </form>
        <Link to="/cadastro"><button className='link'>Não tenho conta</button></Link>
      </div>
    );
  }
}

export default Login;