import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Aulas from '../Pages/aulas.js';
import CadastraSemestre from '../Pages/cadastraSemestre.js';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/aulas" component={Aulas}/>
            <Route exact path="/novo-semestre" component={CadastraSemestre}/>
        </BrowserRouter>
    );
}