import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home'
import CadastroVideo from './pages/cadastro/video'

function PageNotFound(){
    return(
        <div>
           Página 404
        </div>
    )
}

ReactDOM.render( 
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);