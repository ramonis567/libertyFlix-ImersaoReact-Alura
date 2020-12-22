import React from 'react';
import PageDefault from '../PageDefault';
import { Link } from 'react-router-dom';

export default function CadastroCategoria() {
  return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <div>
        <Link to="/" style={{marginRight: "2%"}}>
          Ir para a homepage
        </Link>
        <Link to="/cadastro/video">
          Novo vídeo
        </Link>
        </div>
      </PageDefault>
  )
}
