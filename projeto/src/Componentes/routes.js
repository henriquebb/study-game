import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from '../Pages/login.js';
import Perfil from '../Pages/perfil.js';
import EditarPerfil from '../Pages/editaPerfil.js';
import Aulas from '../Pages/aulas.js';
import CadastraSemestre from '../Pages/cadastraSemestre.js';
import EditaSemestre from '../Pages/editaSemestre.js';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route exact path="/perfil" component={Perfil}/>
            <Route exact path="/edita-perfil" component={EditarPerfil}/>
            <Route exact path="/aulas" component={Aulas}/>
            <Route exact path="/novo-semestre" component={CadastraSemestre}/>
            <Route exact path="/edita-semestre" component={EditaSemestre}/>
        </BrowserRouter>
    );
}