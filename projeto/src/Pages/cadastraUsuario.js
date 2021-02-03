import '../Estilos/geral.css'
import logo from '../Assets/logo.png'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";

import {isLoged, whosLoged2} from '../Services/authentication.js'

import api from '../Services/api.js'
import Sidebar from "../Componentes/Sidebar.js";

import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col, Button, Label, Container
  } from "reactstrap";


async function cadastra(jsonPatch){
    const response = await api.post('/users/', jsonPatch);
    return;    
}




class CadastraUsuario extends Component {
    constructor(props){
        super(props);
        console.log();
        this.state={
            username:"",
            password:"",
            email:"",
            name:{firstName:"", lastName:""},
            school:"",
        }

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
        cadastra(this.state).then(this.props.history.push('/'));
    }

    handleBack(event){
        this.props.history.push('/');
    }

    render(){
        return (
            <div className="pagina">
                
                <div className="main-content">
                <Row>
                        
                        <Col md="5"></Col>
                        <h1>Registre-se</h1>
                        <Col> </Col>
                        <Col></Col>
                        </Row>
                
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                            </Col>
                            <Col md="6">
                            <FormGroup>
                                <Label>Nome de Usuário</Label>
                                <Input
                                onChange={this.handleUsernameChange}
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col md="6">
                            <FormGroup>
                                <Label>Senha</Label>
                                <Input
                                onChange={this.handlePasswordChange} 
                                type="password"
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col md="6">
                            <FormGroup>
                                <Label>Nome</Label>
                                <Input
                                onChange={this.handleFirstNameChange}
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col md="6">
                            <FormGroup>
                            <Label>Sobrenome</Label>
                                <Input
                                onChange={this.handleLasttNameChange}
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col md="6">
                            <FormGroup>
                                <Label>E-mail</Label> 
                                <Input
                                onChange={this.handleEmailChange}
                                type="email"
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col md="6">
                            <FormGroup>
                                <Label>Escola</Label> 
                                <Input
                                onChange={this.handleSchoolChange}
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                        <Col></Col>
                        
                        <Col> <Button color="success" block type="submit">Cadastrar</Button> </Col>
                        <Col></Col>
                        </Row>
                        
                        <br></br>
                        <Row>
                        
                        <Col></Col>
                        <Col>
                       
                         <a href="/" class="btn btn-danger btn-block" 
                        //onClick={this.handleBack}
                        >
                            
                            Voltar</a> </Col>
                        <Col></Col>
                        </Row>
                        </Form>
                
                
                </div>

            </div>
        );
    }

}

export default CadastraUsuario;