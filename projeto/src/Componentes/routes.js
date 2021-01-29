import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Aulas from '../Pages/aulas.js';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Aulas}/>
        </BrowserRouter>
    );
}