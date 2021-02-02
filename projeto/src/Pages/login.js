import logo from '../Assets/logo.png'
import React, {Component} from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    Col,CardImg
  } from "reactstrap";
import { RiCpuFill } from 'react-icons/ri';



class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            passowrd:""
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCadastro = this.handleCadastro.bind(this);
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({passowrd: event.target.value});
    }

    handleLogin(){
        //Checar no banco de dados se usuário e senha estão cadastrados

        //Redirecionar para o perfil, logado
        this.props.history.push('/perfil');
    }

    handleCadastro(){
        //Checar no banco de dados se usuário e senha estão cadastrados

        //Redirecionar para o perfil, logado
        this.props.history.push('/cadastro');
    }

    render(){
        return (
            <>
            <Row>
                <Col></Col>
                <Col>
                <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-5">
                  <CardImg top width="100%" src={logo} alt="Card image cap" />
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Usuário" type="text" value={this.state.nome} onChange={this.handleUsernameChange} />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Senha" value={this.state.nome} onChange={this.handlePasswordChange} type="password" />
                        </InputGroup>
                      </FormGroup>
                     
                      <div className="text-center">
                      <Row>
                        <Col>
                        <Button onClick={this.handleLogin}
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                          Login
                        </Button>
                        </Col>
                        <Col>
                        <Button onClick={this.handleCadastro}
                          className="my-4"
                          color="secondary"
                          type="button"
                        >
                          Cadastrar
                        </Button>
                        </Col>
                    </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>  
                
                </Col>
                <Col></Col>
            </Row>
            
              </>
        );
    }

}

export default Login;