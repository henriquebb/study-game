import '../Estilos/geral.css'
import logo from '../Assets/logo.png'
import avatar from '../Assets/no-avatar.png'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";

import Button from 'react-bootstrap/Button';

import {isLoged} from '../Services/authentication.js'

class Perfil extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"Nickname",
            password:"123456",
            email:"exemplo@teste.com",
            name:{firstName:"Juninho",lastName:"Play"},
            school:"CEFET-MG",
            semesters: [],
            events: [],
            quests: [],
            items: []
        }

        if(isLoged() == false){ //Se não está logado e tentou entrar nessa página, redireciona pro login
            this.props.history.push('/');
        }
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
                    <img src={avatar} width="80" height="80"/>
                    <h4>Perfil de {this.state.username}</h4>
                    <h6>Nome: {this.state.name.firstName} {this.state.name.lastName}</h6>
                    <h6>Email: {this.state.email}</h6>
                    <h6>Escola: {this.state.school}</h6>
                    <Button type="submit" variant="outline-dark">Editar Perfil</Button>
                    <br/>
                    <hr/>
                    <br/>
                    <h4>Estatísticas</h4>
                    <div>
                        <h6>Semestres Cursados: {this.state.semesters.length}</h6>
                        <h6>Participação em Missões: {this.state.quests.length}</h6>
                        <h6>Itens Obtidos: {this.state.items.length}</h6>
                    </div>

                </div>
            </div>
        );
    }

}

export default Perfil;