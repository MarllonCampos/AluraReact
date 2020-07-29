import React from 'react';
import Logo from '../../assets/img/scorpions.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink/Index';
import Button from '../Button'


function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>  
        </nav>
    )
}

export default Menu;

