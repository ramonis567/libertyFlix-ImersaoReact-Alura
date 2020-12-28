import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://2hr.tech" target="_blank" rel="noreferrer">
        <img 
          src="https://raw.githubusercontent.com/ramonis567/libertyFlix-ImersaoReact-Alura/main/src/assets/img/Logo2.svg" 
          width="100px" 
          height="60px" 
          alt="Logo 2HR Tech"
        />
      </a>
      <p>
        Editar
      </p>
    </FooterBase>
  );
}

export default Footer;
