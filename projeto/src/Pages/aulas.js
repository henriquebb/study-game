import logo from '../Assets/logo.png'
import '../Estilos/geral.css'
import '../Estilos/aulas.css'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { BiEdit } from "react-icons/bi";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { AiFillDelete } from "react-icons/ai";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';

class Aulas extends Component {
    constructor(props){
        super(props);
        this.state={
            semestres:[{title:"2019/2", grade:0, classes:[{title:"Inglês Instrumental 1", grade:90, professor:"Tio Ronaldo", startTime:{hour:14,minute:55},endTime:{hour:16,minute:35}, class:"botao-semestre"}], class:"botao-semestre"},{title:"2020/1", grade:0, classes:[], class:"botao-semestre"},{title:"2020/2", grade:0, classes:[], class:"botao-semestre"},{title:"2021/1", grade:0, classes:[{title:"Inglês Instrumental 2", grade:10, professor:"Tio Ronaldo", startTime:{hour:14,minute:55},endTime:{hour:16,minute:35}, class:"botao-semestre"}, {title:"Libras", grade:20, professor:"Dona Clara", startTime:{hour:14,minute:55},endTime:{hour:16,minute:35}, class:"botao-semestre"}, {title:"Engenharia de Software", grade:0, professor:"Marco", startTime:{hour:14,minute:55},endTime:{hour:16,minute:35}, class:"botao-semestre"}], class:"botao-semestre"}],
            semestreSelecionado:-1,
            aulas:[],
            aulaSelecionada:-1
        };

        this.selecionaSemestre = this.selecionaSemestre.bind(this);
        this.selecionaAula = this.selecionaAula.bind(this);
        this.deletaAula = this.deletaAula.bind(this);

    }

    deletaSemestre(sID){
        const seme = this.state.semestres;
        var s = [];
        for(var ii = 0; ii < seme.length; ii++){
            if(ii != sID){
                s.push(seme[ii]);
            }
        }
        this.setState({
            semestreSelecionado:-1,
            semestres:s
        })
    }

    deletaAula(aID){
        const aulas = this.state.aulas;
        var seme = this.state.semestres;
        var au = [];
        for(var ii = 0; ii < aulas.length; ii++){
            if(ii != aID){
                au.push(aulas[ii]);
            }
        }
        seme[this.state.semestreSelecionado].classes = au;
        this.setState({
            aulaSelecionada:-1,
            aulas: au,
            semestres:seme
        })
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
        for(var ii = 0; ii < au.length; ii++){
            if(au[ii].class == "botao-semestre-selecionado"){
                au[ii].class = "botao-semestre";
            }
        }
        this.setState({
            semestreSelecionado:sID,
            semestres:sem,
            aulas:au,
            aulaSelecionada:-1
        });
    }

    selecionaAula(aID){
        var au = this.state.aulas;
        for(var ii = 0; ii < au.length; ii++){
            if(au[ii].class == "botao-semestre-selecionado"){
                au[ii].class = "botao-semestre";
            }
            if(ii == aID){
                au[ii].class = "botao-semestre-selecionado";
            }
        }
        this.setState({
            aulaSelecionada:aID,
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


            <div className="tres-telas">
                <div className="semestres">
                    <h2 className="titulo">Semestres</h2>
                    <Button type="submit" variant="outline-dark" className="botao-adiciona" onClick={() => this.props.history.push('/novo-semestre') }>Adicionar Semestre</Button>

                    {this.state.semestres != [] && this.state.semestres.map((prop, key) => {
                        return (
                            <div><h5 className={prop.class} onClick={() => this.selecionaSemestre(key)}>{prop.title}</h5> <AiFillDelete onClick={() => this.deletaSemestre(key)}/></div>
                        );
                    })}

                </div>
                <div className="aulas-do-semestre">
                    <h2 className="titulo">Disciplinas</h2>
                    {this.state.semestreSelecionado >= 0 && <h5>Semestre {this.state.semestres[this.state.semestreSelecionado].title} <BiEdit onClick={() => this.props.history.push('/edita-semestre', this.state.semestres[this.state.semestreSelecionado].title) }/></h5>}
                    {this.state.semestreSelecionado >= 0 && <h5>Nota Média: {this.state.semestres[this.state.semestreSelecionado].grade}</h5>}
                    {this.state.semestreSelecionado >= 0 && <Button type="submit" variant="outline-dark" className="botao-adiciona" onClick={() => this.props.history.push('/nova-aula') }>Adicionar Aula</Button>}
                    {this.state.semestreSelecionado >= 0 && <Button type="submit" variant="outline-dark" className="botao-adiciona" onClick={() => this.props.history.push('/notas-semestre') }>Anotações do Semestre</Button>}
                    {this.state.aulas != [] && this.state.aulas.map((prop, key) => {
                        return (
                            <div><h5 className={prop.class} onClick={() => this.selecionaAula(key)}>{prop.title}</h5> <AiFillDelete onClick={() => this.deletaAula(key)}/></div>
                        );
                    })}
                </div>
                <div className="aula">
                    <h2 className="titulo">Disciplina</h2>
                    {this.state.aulaSelecionada >= 0 && <h5>{this.state.aulas[this.state.aulaSelecionada].title}</h5>}
                    {this.state.aulaSelecionada >= 0 && <h5>Professor: {this.state.aulas[this.state.aulaSelecionada].professor}</h5>}
                    {this.state.aulaSelecionada >= 0 && <h5>Nota: {this.state.aulas[this.state.aulaSelecionada].grade}</h5>}
                    {this.state.aulaSelecionada >= 0 && <h5>Horário: {this.state.aulas[this.state.aulaSelecionada].startTime.hour}:{this.state.aulas[this.state.aulaSelecionada].startTime.minute} - {this.state.aulas[this.state.aulaSelecionada].endTime.hour}:{this.state.aulas[this.state.aulaSelecionada].endTime.minute}</h5>}
                    {this.state.aulaSelecionada >= 0 && <Button type="submit" variant="outline-dark" className="botao-adiciona" onClick={() => this.props.history.push('/editar-aula') }>Editar</Button>}
                    {this.state.aulaSelecionada >= 0 && <Button type="submit" variant="outline-dark" className="botao-adiciona" onClick={() => this.props.history.push('/notas-aula') }>Anotações da Disciplina</Button>}
                </div>
            </div>
        </div>
        
        );
    }
}

export default Aulas;