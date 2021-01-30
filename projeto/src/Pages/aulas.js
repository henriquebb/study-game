import logo from '../Assets/logo.png'
import '../Estilos/geral.css'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';

class Aulas extends Component {
    constructor(props){
        super(props);
        this.state={
            semestres:[{title:"2019/2", grade:0, classes:[{title:"Inglês Instrumental 1", grade:90, professor:"Tio Ronaldo"}], class:"botao-semestre"},{title:"2020/1", grade:0, classes:[], class:"botao-semestre"},{title:"2020/2", grade:0, classes:[], class:"botao-semestre"},{title:"2021/1", grade:0, classes:[{title:"Inglês Instrumental 2", grade:10, professor:"Tio Ronaldo"}, {title:"Libras", grade:20, professor:"Dona Clara"}, {title:"Engenharia de Software", grade:0, professor:"Marco"}], class:"botao-semestre"}],
            semestreSelecionado:-1,
            aulas:[],
        };

        this.selecionaSemestre = this.selecionaSemestre.bind(this);
    }

    selecionaSemestre(sID) {
        var sem = this.state.semestres;
        var au = [];
        for(var ii = 0; ii < sem.length; ii++){
            if(sem[ii].class == "botao-semestre-selecionado"){
                sem[ii].class = "botao-semestre";
            }
            if(ii == sID){
                sem[ii].class = "botao-semestre-selecionado";
                au = sem[ii].classes;
            }
        }
        this.setState({
            semestreSelecionado:sID,
            semestres:sem,
            aulas:au
        });
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
            <a href="">Perfil</a>
            <VscEdit/>
            <a href="">Aulas</a>
            <VscCalendar/>
            <a href="">Calendário</a>
            <RiSwordLine/>
            <a href="">Missões</a>
            <RiShoppingBag2Line/>
            <a href="">Loja</a>
            </IconContext.Provider>
            </div> {/* Fim Logo + Menu */}
            <div className="header-right"> {/* Início Logout */}
                <RiLogoutCircleRLine/>
                <a href="">Logout</a>
            </div> {/* Fim Logout */}
            </div> {/* Fim do Cabeçalho */}


            <div className="tres-telas">
                <div className="semestres">
                    <h2 className="titulo">Semestres</h2>
                    <Button type="submit" variant="outline-dark" className="botao-adiciona">Adicionar Semestre</Button>

                    {this.state.semestres != [] && this.state.semestres.map((prop, key) => {
                        return (
                            <h5 className={prop.class} onClick={() => this.selecionaSemestre(key)}>{prop.title}</h5>
                        );
                    })}

                </div>
                <div className="aulas-do-semestre">
                    <h2 className="titulo">Aulas</h2>
                    {this.state.semestreSelecionado >= 0 && <h5>Semestre {this.state.semestres[this.state.semestreSelecionado].title}</h5>}
                    {this.state.semestreSelecionado >= 0 && <h5>Nota Média: {this.state.semestres[this.state.semestreSelecionado].grade}</h5>}
                    {this.state.semestreSelecionado >= 0 && <Button type="submit" variant="outline-dark" className="botao-adiciona">Adicionar Aula</Button>}
                    {this.state.aulas != [] && this.state.aulas.map((prop, key) => {
                        return (
                            <h5 className="botao-semestre">{prop.title}</h5>
                        );
                    })}
                </div>
                <div className="aula">
                    <h2 className="titulo">Aula</h2>
                </div>
            </div>
        </div>
        
        );
    }
}

export default Aulas;