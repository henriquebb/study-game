import '../Estilos/geral.css'
import logo from '../Assets/logo.png'
import avatar from '../Assets/no-avatar.png'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";

import {isLoged, whosLoged2} from '../Services/authentication.js'
import Sidebar from "../Componentes/Sidebar.js";
import api from '../Services/api.js'
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

async function editProfile(jsonPatch){
    const response = await api.patch('/users/' + whosLoged2(), jsonPatch);
    return;    
}

async function getUserFromDB(uID){
    const response = await api.get('/users/' + uID);
    return response.data;
}

class EditarPerfil extends Component {
    constructor(props){
        super(props);
        console.log();
        this.state={
            username:props.history.location.state.username,
            password:props.history.location.state.password,
            email:props.history.location.state.email,
            name:props.history.location.state.name,
            school:props.history.location.state.school,
            semesters:[],
            quests:[],
            items:[]
        }
        if(isLoged() == false){ //Se não está logado e tentou entrar nessa página, redireciona pro login
            this.props.history.push('/');
        }

        getUserFromDB(this.props.history.location.state.id).then(res => {
            console.log(res);
            this.setState(res);
        })

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLasttNameChange = this.handleLasttNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }

    handleSchoolChange(event){
        this.setState({school: event.target.value});
    }

    handleFirstNameChange(event){
        var nFN = this.state.name;
        nFN.firstName = event.target.value;
        this.setState({name: nFN});
    }

    handleLasttNameChange(event){
        var nLN = this.state.name;
        nLN.lastName = event.target.value;
        this.setState({name: nLN});
    }

    handleSubmit(event){
        event.preventDefault();
        editProfile(this.state).then(this.props.history.push('/perfil'));
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
                            <Form onSubmit={this.handleSubmit}>
                            <div class="bg-white border-0 card-header">
                                    <div class="align-items-center row">
                                        <div class="col-8">
                                            <h3 class="mb-0">Editar Conta</h3>
                                        </div>
                                        <div class="text-right col-4">
                                            <button type="submit" class="btn btn-primary btn-sm">Salvar</button>
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
                                                        <input id="input-username" placeholder="Username" type="text" class="form-control-alternative form-control"
                                                        onChange={this.handleUsernameChange} value={this.state.username}/  >
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-email">E-mail</label>
                                                        <input id="input-email"  placeholder="jesse@example.com" type="email" class="form-control-alternative form-control"
                                                        onChange={this.handleEmailChange}  value={this.state.email}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-first-name">First name</label>
                                                        <input id="input-first-name"  placeholder="First name" type="text" class="form-control-alternative form-control" 
                                                        value={this.state.name.firstName} onChange={this.handleFirstNameChange}/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-last-name">Last name</label>
                                                        <input id="input-last-name"  placeholder="Last name" type="text" class="form-control-alternative form-control" 
                                                        onChange={this.handleLasttNameChange} value={this.state.name.lastName}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-first-name">Senha</label>
                                                        <input id="input-first-name"   type="password" class="form-control-alternative form-control" 
                                                         onChange={this.handlePasswordChange} value={this.state.password}/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-first-name">Escola</label>
                                                        <input id="input-first-name"  type="text" class="form-control-alternative form-control" 
                                                        value={this.state.school} onChange={this.handleSchoolChange}/>
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

export default EditarPerfil;