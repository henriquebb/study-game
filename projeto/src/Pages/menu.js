//import '../Estilos/geral.css'
//import logo from '../Assets/logo.png'

import React, {Component} from 'react';
import { Link } from "react-router-dom";

import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";
// core components
import Sidebar from "../Componentes/Sidebar.js";
  
class Menu extends Component {
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
    <>


 
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
       <Container>
      <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col xs="3">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col sm="4">.col-sm-4</Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
    </Container>
      </div>
    
    
    
    </>
        );
    }

}

export default Menu;