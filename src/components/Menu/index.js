import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Logo - LibertyFlix" className="Logo"/>
      </Link>
      <div>
        <Button as={Link} to="/cadastro/video" className='ButtonLink' style={{marginRight: '20px'}}>
          Novo vídeo
        </Button>
        <Button as={Link} to="/cadastro/categoria" className="ButtonLink">
          Nova Categoria
        </Button>
      </div>
    </nav>
  )
}