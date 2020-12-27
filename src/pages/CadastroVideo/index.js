import React from 'react';
import PageDefault from '../PageDefault';
import { Link } from 'react-router-dom';

export default function CadastroVideo() {
  return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>
        <div>
          <Link to="/" style={{marginRight: "2%"}}>
            Ir para a homepage
          </Link>
          <Link to="/cadastro/categoria">
            Nova categoria
          </Link>
        </div>
      </PageDefault>
  )
}
