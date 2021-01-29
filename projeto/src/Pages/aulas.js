import logo from '../Assets/logo.png'
import '../Estilos/geral.css'

import { IconContext } from "react-icons";
import { VscAccount, VscCalendar, VscEdit } from "react-icons/vsc";
import { RiShoppingBag2Line, RiSwordLine, RiLogoutCircleRLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';

function Aulas() {
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
                <h5 className="botao-semestre">2019/2</h5>
                <h5 className="botao-semestre">2020/1</h5>
                <h5 className="botao-semestre">2020/2</h5>
                <h5 className="botao-semestre">2021/1</h5>

            </div>
            <div className="aulas-do-semestre">
                <h2 className="titulo">Aulas</h2>
                <h5>Semestre 2020/2</h5>
                <Button type="submit" variant="outline-dark" className="botao-adiciona">Adicionar Aula</Button>
                <h5 className="botao-semestre">Engenharia de Software</h5>
                <h5 className="botao-semestre">Teste de Software</h5>
                <h5 className="botao-semestre">Inglês Instrumental I</h5>
            </div>
            <div className="aula">
                <h2 className="titulo">Aula</h2>
            </div>
        </div>
    </div>
      
    );
}

export default Aulas;