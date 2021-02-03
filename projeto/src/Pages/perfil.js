import '../Estilos/geral.css'
import logo from '../Assets/logo.png'
import avatar from '../Assets/no-avatar.png'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";
import Sidebar from "../Componentes/Sidebar.js";
import {
    Button,
    Row,
    Col,
    Badge,
    Container,
    PopoverBody,
    UncontrolledPopover,
    Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody,
    CardHeader,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal, Table 
} from "reactstrap";

import {isLoged, whosLoged2} from '../Services/authentication.js'
import api from '../Services/api.js'

async function getUserFromDB(uID){
    const response = await api.get('/users/' + uID);
    return response.data;
}

class Perfil extends Component {
    constructor(props){
        super(props);
        this.state={
            id: whosLoged2(),
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

        this.handleEditaPerfil = this.handleEditaPerfil.bind(this);
        getUserFromDB(this.state.id).then(res => {
            this.setState(res)
        })
    }

    handleEditaPerfil(){
        this.props.history.push('/edita-perfil', this.state);
    }

    render(){
        return (
        <>
            <Sidebar
            logo={{
              imgSrc: require("../Assets/logo.png").default,
              imgAlt: "...",
            }}
          />

        <div className="main-content">
            <div className="pagina">
                <div>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                </div>
                <div class="mt--7 container-fluid">
                    <div class="row">
                        <div class="order-xl-2 mb-5 mb-xl-0 col-xl-4">
                            <div class="card-profile shadow card">
                                <div class="justify-content-center row">
                                    <div class="order-lg-2 col-lg-3">
                                        <div class="card-profile-image">
                                            <img alt="..." class="rounded-circle" src={avatar} />
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4 card-header">
                                    <div class="d-flex justify-content-between">
                                        
                                    </div>
                                </div>
                                <div class="pt-0 pt-md-4 card-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                                <div>
                                                    <span class="heading">{this.state.semesters.length}</span>
                                                    <span class="description">Semestres</span>
                                                </div>
                                                <div>
                                                    <span class="heading">{this.state.quests.length}</span>
                                                    <span class="description">Missões</span>
                                                </div>
                                                <div>
                                                    <span class="heading">{this.state.items.length}</span>
                                                    <span class="description">Itens</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <h3>{this.state.name.firstName} {this.state.name.lastName}</h3>
                                        <div class="h5 font-weight-300">
                                            <i class="ni ni-paper-diploma mr-2"></i>{this.state.school}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-xl-1 col-xl-8">
                            <div class="bg-secondary shadow card">  
                                    <Form class="">
                                    <div class="bg-white border-0 card-header">
                                    <div class="align-items-center row">
                                        <div class="col-8">
                                            <h3 class="mb-0">Minha Conta</h3>
                                        </div>
                                        <div class="text-right col-4">
                                            <a type="submit" class="btn btn-primary btn-sm" onClick={this.handleEditaPerfil}>Editar</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                        <h6 class="heading-small text-muted mb-4">Informação do Usuário</h6>
                                        <div class="pl-lg-4">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-username">Username</label>
                                                        <input id="input-username" disabled placeholder="Username" type="text" class="form-control-alternative form-control" value={this.state.username}/  >
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-email">E-mail</label>
                                                        <input id="input-email" disabled  placeholder="jesse@example.com" type="email" class="form-control-alternative form-control" value={this.state.email}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-first-name">First name</label>
                                                        <input id="input-first-name" disabled  placeholder="First name" type="text" class="form-control-alternative form-control" value={this.state.name.firstName}/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-last-name">Last name</label>
                                                        <input id="input-last-name" disabled  placeholder="Last name" type="text" class="form-control-alternative form-control" value={this.state.name.lastName}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   
                                     </div>
                                </Form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }

}
export default Perfil;
