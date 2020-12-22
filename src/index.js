import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';

function E404(){
  return (
    <div><h1>Página - Erro 404</h1></div>
  )
}


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

