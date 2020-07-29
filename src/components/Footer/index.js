import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante os estudos do Marllon
        <p>
          <a href="https://www.alura.com.br/">
            Durante a aula de Imersão React da Alura
          </a>
        </p>
      </p>
    </FooterBase>
  );
}

export default Footer;
