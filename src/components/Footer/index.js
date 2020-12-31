import React from 'react';
import { FooterBase, Space } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://2hr.tech" target="_blank" rel="noreferrer">
        <img 
          src="https://raw.githubusercontent.com/ramonis567/libertyFlix-ImersaoReact-Alura/main/src/assets/img/Logo2.png" 
          width="200px" 
          height="70px" 
          alt="Logo 2HR Tech"
        />
      </a>
      <Space>
        <div />
      </Space>
      <p>
        Soluções criativas em Marketing Digital e Desenvolvimento Web
      </p>
    </FooterBase>
  );
}

export default Footer;
