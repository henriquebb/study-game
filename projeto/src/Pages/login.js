import logo from '../Assets/logo.png'
import React, {Component} from 'react';
import {login,isLoged, logout} from '../Services/authentication.js'

import api from '../Services/api.js'

async function isLoginIsValid(username, password){
    const response = await api.post('/users/login', {username,password});
    if(response.status == 200){return response.data;}
    else {return "";}
    
}

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }

        if(isLoged()){
            logout();
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCadastro = this.handleCadastro.bind(this);
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleLogin(){
        //Checar no banco de dados se usuário e senha estão cadastrados
        //Redirecionar para o perfil, logado
        if(this.state.username.length < 1){
            //Mensagem de Erro: Usuário em Branco
        } else if (this.state.password.length < 1){
            //Mensagem de Erro: Senha em Branco
        } else {
            isLoginIsValid(this.state.username, this.state.password).then(idLogado => {
                if(idLogado.length > 0){
                    login(this.state.username, idLogado);
                    this.props.history.push('/perfil');
                } else {
                    //Mensagem de erro: Par: Usuário-Sennha Inválido
                }
            });
        }    
        
    }

    handleCadastro(){
        //Redirecionar para página de cadastro
        this.props.history.push('/cadastro');
    }

    render(){
        return (
            <div>
                <img src={logo} width="30%" height="30%"/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" onChange={this.handleUsernameChange} placeholder="Nome de Usuário"  />
                            <br/>
                            <input type="password" onChange={this.handlePasswordChange} placeholder="Senha"  />
                        </label>
                    </form>
                    <button onClick={this.handleLogin}>Login</button><button onClick={this.handleCadastro}>Cadastrar</button>
            </div>
        );
    }

}

export default Login;