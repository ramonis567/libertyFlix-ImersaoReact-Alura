import React from 'react';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Logo - LibertyFlix" className="Logo"/>
      </a>
      <ButtonLink href="/" className='ButtonLink'>
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}