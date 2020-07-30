import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home'
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria';
import PageNotFound from './pages/page404';

ReactDOM.render( 
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
 