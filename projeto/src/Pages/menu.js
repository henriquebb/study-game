//import '../Estilos/geral.css'
//import logo from '../Assets/logo.png'

import React, {Component} from 'react';
import { Link } from "react-router-dom";

import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,   
    Container,
    Row,
    Col,
    Progress
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
            <Container >
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col>
                <Card className="text-right" style={{ width: "65%", borderColor: '#333' }}>
                    <CardImg
                        alt="..."
                        src={require("../Assets/pixel.jpg").default}
                        top
                        
                    />
                    <CardBody>
                        <CardText>
                        <div className="text-center">Xp</div>
                        <Progress value={50} />
                        </CardText>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs="3"></Col>
                <Col xs="auto"></Col>
                <Col xs="3"></Col>
            </Row>
            <Row>
                <Col xs="6">.</Col>
                <Col xs="6"></Col>
            </Row>
            <Row>
                
                <Col xs="6" sm="4">  
                <div style={{ width: "18rem" }}>
                    <Card className="card-stats mb-4 mb-lg-0">
                        <CardBody>
                        <Row>
                            <div className="col">
                            <CardTitle className="text-uppercase text-muted mb-0">
                                Total traffic
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">350,897</span>
                            </div>
                            <Col className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="ni ni-chart-bar-32" />
                            </div>
                            </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" />
                            3.48%
                            </span>
                            <span className="text-nowrap">Since last month</span>
                        </p>
                        </CardBody>
                    </Card>
                </div>
                </Col>
                
                <Col xs="6" sm="4"> <div style={{ width: "18rem" }}>
                    <Card className="card-stats mb-4 mb-lg-0">
                        <CardBody>
                        <Row>
                            <div className="col">
                            <CardTitle className="text-uppercase text-muted mb-0">
                                Total traffic
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">350,897</span>
                            </div>
                            <Col className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="ni ni-chart-bar-32" />
                            </div>
                            </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" />
                            3.48%
                            </span>
                            <span className="text-nowrap">Since last month</span>
                        </p>
                        </CardBody>
                    </Card>
                </div></Col>
                
                
                <Col sm="4"></Col>
            </Row>
            </Container>
      </div>
    
    
    
    </>
        );
    }

}

export default Menu;