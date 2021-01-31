import '../Estilos/geral.css'
import logo from '../Assets/logo.png'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";

import {isLoged} from '../Services/authentication.js'

class EditarPerfil extends Component {
    constructor(props){
        super(props);
        console.log();
        this.state={
            username:props.history.location.state.username,
            novoUsername:props.history.location.state.username,
            password:props.history.location.state.password,
            novoPassword:props.history.location.state.password,
            email:props.history.location.state.email,
            novoEmail:props.history.location.state.email,
            name:props.history.location.state.name,
            novoName:props.history.location.state.name,
            school:props.history.location.state.school,
            novaSchool:props.history.location.state.school
        }
        if(isLoged() == false){ //Se não está logado e tentou entrar nessa página, redireciona pro login
            this.props.history.push('/');
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLasttNameChange = this.handleLasttNameChange.bind(this);
    }

    handleUsernameChange(event){
        this.setState({novoUsername: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({novoPassword: event.target.value});
    }

    handleEmailChange(event){
        this.setState({novoEmail: event.target.value});
    }

    handleSchoolChange(event){
        this.setState({novaSchool: event.target.value});
    }

    handleFirstNameChange(event){
        var nFN = this.state.novoName;
        nFN.firstName = event.target.value;
        this.setState({novoName: nFN});
    }

    handleLasttNameChange(event){
        var nLN = this.state.novoName;
        nLN.lastName = event.target.value;
        this.setState({novoName: nLN});
    }

    render(){
        return (
            <div className="pagina">
                <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
                <div className="cabecalho"> {/* Começo do Cabeçalho */}
                    <div className="menu1"> {/* Início Logo + Menu */}
                    <IconContext.Provider
                        value={{ color: 'black', height: '40%' }}
                        >
                    <img className="img-logo" src={logo}/>
                    <VscAccount/>
                    <a href="/perfil">Perfil</a>
                    <VscEdit/>
                    <a href="/aulas">Aulas</a>
                    <VscCalendar/>
                    <a href="/calendario">Calendário</a>
                    <RiSwordLine/>
                    <a href="/missoes">Missões</a>
                    <RiShoppingBag2Line/>
                    <a href="/loja">Loja</a>
                    </IconContext.Provider>
                </div> {/* Fim Logo + Menu */}
                    <div className="header-right"> {/* Início Logout */}
                        <RiLogoutCircleRLine/>
                        <a href="/">Logout</a>
                    </div> {/* Fim Logout */}
                </div> {/* Fim do Cabeçalho */}

                <div>
                    <h4>Editar Perfil</h4>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                    Nome de Usuário (Login):
                        <input type="text" value={this.state.novoUsername} onChange={this.handleUsernameChange}  /><br/>
                        Senha:
                        <input type="text" value={this.state.novoPassword} onChange={this.handlePasswordChange}  /><br/>
                        Nome:
                        <input type="text" value={this.state.novoName.firstName} onChange={this.handleNameChange}  /><br/>
                        Sobrenome:
                        <input type="text" value={this.state.novoName.lastName} onChange={this.handleNameChange}  /><br/>
                        Email:
                        <input type="text" value={this.state.novoEmail} onChange={this.handleEmailChange}  /><br/>
                        Escola:
                        <input type="text" value={this.state.novaSchool} onChange={this.handleSchoolChange}  /><br/>
                        <input type="submit" value="Salvar" />
                        </label>
                    </form>
                    
                    
                </div>
            </div>
        );
    }

}

export default EditarPerfil;