import logo from '../Assets/logo.png'
import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            passowrd:""
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
        this.setState({passowrd: event.target.value});
    }

    handleLogin(){
        //Checar no banco de dados se usuário e senha estão cadastrados

        //Redirecionar para o perfil, logado
        this.props.history.push('/perfil');
    }

    handleCadastro(){
        //Checar no banco de dados se usuário e senha estão cadastrados

        //Redirecionar para o perfil, logado
        this.props.history.push('/cadastro');
    }

    render(){
        return (
            <div>
                <img src={logo} width="30%" height="30%"/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.nome} onChange={this.handleUsernameChange} placeholder="Nome de Usuário"  />
                            <br/>
                            <input type="password" value={this.state.nome} onChange={this.handlePasswordChange} placeholder="Senha"  />
                        </label>
                    </form>
                    <button onClick={this.handleLogin}>Login</button><button onClick={this.handleCadastro}>Cadastrar</button>
            </div>
        );
    }

}

export default Login;