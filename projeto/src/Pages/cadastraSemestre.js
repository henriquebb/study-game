import '../Estilos/geral.css'
import logo from '../Assets/logo.png'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";

class CadastraSemestre extends Component {
    constructor(props){
        super(props);
        this.state={
            nome:""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.setState({nome: event.target.value});
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
                        <a href="">Logout</a>
                    </div> {/* Fim Logout */}
                </div> {/* Fim do Cabeçalho */}

                <div>
                    <h4>Criar Novo Semestre</h4>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nome:
                            <input type="text" value={this.state.nome} onChange={this.handleNameChange} placeholder="exemplo: '2020/2'"  />
                        </label>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        );
    }

}

export default CadastraSemestre;