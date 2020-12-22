import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';
import E404 from "./pages/E404"


ReactDOM.render(
  <BrowserRouter>
    <Switch> 
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={App} exact />
      <Route component={E404} />
    </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);

