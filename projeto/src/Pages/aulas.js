import logo from '../Assets/logo.png'
import '../Estilos/geral.css'
import '../Estilos/aulas.css'

import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { BiEdit } from "react-icons/bi";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { AiFillDelete } from "react-icons/ai";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";
//import Button from 'react-bootstrap/Button';
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

class Aulas extends Component {
    state = {
        defaultModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };
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
            <Sidebar
                //{...props}
                //routes={routes}
                logo={{
                innerLink: "/admin/index",
                imgSrc: require("../Assets/logo.png").default,
                imgAlt: "...",
                        }}
            />

            <div className="main-content">
            <CardGroup>
                <Card body outline color="primary">
                <CardBody>
                  <Row>
                    <Col> <CardTitle tag="h2">Semestres</CardTitle> </Col>
                    <Col> <CardSubtitle tag="h6" className="mb-2 text-muted"><Button block size="sm"
                      className="btn-icon btn-3" color="primary" outline
                      type="button"
                      onClick={() => this.toggleModal("formModal")}
                    >
                      <span className="btn-inner--text">Novo</span>
                             <span className="btn-inner--icon">
                               <i className="ni ni-fat-add" />
                            </span>
                     </Button></CardSubtitle>
                    </Col>
                  </Row>
                  <CardText>
                  <Table>
                    <thead>
                      <tr>
                        <th>Semestre</th>
                        <th> </th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                        {this.state.semestres != [] && this.state.semestres.map((prop, key) => {
                          return (
                            <tr>
                            <th scope="row" > {prop.title} </th>
                            <td><Button size="sm" outline color="success" size="sm"  onClick={() => this.selecionaSemestre(key)}>  
                                <span className="btn-inner--icon">
                                  <i className="ni ni-bold-right" />
                                </span> </Button>{' '}</td>

                                  
                              <td> <Button size="sm" outline color="danger" size="sm" onClick={() => this.deletaSemestre(key)}>  
                                  <span className="btn-inner--icon">
                                    <i className="ni ni-fat-remove" />
                                  </span> </Button></td>

                              </tr>
                            );
                        })}
                      </tbody>
                  </Table>
                </CardText>
            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
        
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Password" type="password" />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
                </CardBody>
            </Card>
                
                
                <Card body outline color="primary">
                <CardBody>
                        {this.state.semestreSelecionado >= 0 && <h5>Semestre {this.state.semestres[this.state.semestreSelecionado].title} <BiEdit onClick={() => this.props.history.push('/edita-semestre', this.state.semestres[this.state.semestreSelecionado].title) }/></h5>}
                        {this.state.semestreSelecionado >= 0 && <h5>Nota Média: {this.state.semestres[this.state.semestreSelecionado].grade}</h5>}
                        
                        <Row>
                          <Col>
                           {this.state.semestreSelecionado >= 0 &&
                          <Button  className="btn-icon btn-3" color="primary" outline size="sm"
                          type="submit" onClick={() => this.props.history.push('/nova-aula') }>
                             <span className="btn-inner--text">Nova Aula</span>
                             <span className="btn-inner--icon">
                               <i className="ni ni-fat-add" />
                            </span>
                            </Button>}
                          </Col>
                          <Col>
                           {this.state.semestreSelecionado >= 0 && 
                           <Button type="submit" className="btn-icon btn-3" color="warning" outline size="sm"
                            onClick={() => this.props.history.push('/notas-semestre') }>
                              <span className="btn-inner--text">Anotações</span>
                              <span className="btn-inner--icon">
                               <i className="ni ni-collection" />
                            </span>
                            </Button>}
                          </Col>
                        </Row>
                        <Row> <br></br> </Row>

                        {this.state.semestreSelecionado >= 0 && <Table>
                          <thead>
                            <tr>
                              <th>Aulas</th>
                              <th> </th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>

                        {this.state.aulas != [] && this.state.aulas.map((prop, key) => {
                        
                        return (
                          <tr>
                          <th scope="row" > {prop.title} </th>
                          <td><Button size="sm" outline color="success" size="sm" onClick={() => this.selecionaAula(key)}>  
                              <span className="btn-inner--icon">
                                <i className="ni ni-bold-right" />
                              </span> </Button>{' '}</td>

                              
                          <td> <Button size="sm" outline color="danger" size="sm" onClick={() => this.deletaAula(key)}>  
                              <span className="btn-inner--icon">
                                <i className="ni ni-fat-remove" />
                              </span> </Button></td>
                          </tr> 
                            );
                        
                        })}
                        </tbody>
                        </Table>}
                </CardBody>
                </Card>

                <Card body outline color="primary">
                <CardBody>
                {this.state.aulaSelecionada >= 0 && <CardTitle tag="h2">{this.state.aulas[this.state.aulaSelecionada].title}</CardTitle>}
                    <div>
                      <Row>
                        {this.state.aulaSelecionada >= 0 && <h5>Professor: {this.state.aulas[this.state.aulaSelecionada].professor}</h5>}
                      </Row>
                      <Row>
                        {this.state.aulaSelecionada >= 0 && <h5>Nota: {this.state.aulas[this.state.aulaSelecionada].grade}</h5>}
                      </Row>  
                      <Row>
                        {this.state.aulaSelecionada >= 0 && <h5>Horário: {this.state.aulas[this.state.aulaSelecionada].startTime.hour}:{this.state.aulas[this.state.aulaSelecionada].startTime.minute} - {this.state.aulas[this.state.aulaSelecionada].endTime.hour}:{this.state.aulas[this.state.aulaSelecionada].endTime.minute}</h5>}
                      </Row>  
                      <Row><br></br></Row>
                      <Row> 
                        <Col>
                          {this.state.aulaSelecionada >= 0 &&
                           <Button type="submit" className="btn-icon btn-3" color="info" outline  size="sm"
                            onClick={() => this.props.history.push('/editar-aula')}>
                             <span className="btn-inner--text">Editar</span>
                             <span className="btn-inner--icon">
                               <i className="ni ni-settings-gear-65" />
                            </span>
                            </Button>}
                        </Col>
                        <Col>
                         {this.state.aulaSelecionada >= 0 && 
                         <Button type="submit" className="btn-icon btn-3" color="default" outline  size="sm" 
                          onClick={() => this.props.history.push('/notas-aula') }>
                            <span className="btn-inner--text">Anotações</span>
                              <span className="btn-inner--icon">
                               <i className="ni ni-collection" />
                            </span>
                          </Button>}
                        </Col>
                      </Row>
                      </div>                    
              </CardBody>
              </Card>
          </CardGroup>
        </div>
      </div> 
      );
    }
}

export default Aulas;