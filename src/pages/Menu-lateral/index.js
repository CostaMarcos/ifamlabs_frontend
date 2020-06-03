import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function MenuLateral(props){
    return (
        <>
        <div className="lateral">
            <header className="titulo">IFAM LABS</header>
            <h3><a href="https://www.linkedin.com/in/marcos-vinicius-551450194/" target="_blank">By: Marcos Vinicius</a></h3>
            <div className="botoes-campus">
                <button className="campus">CMZL</button>
                <button className="campus">CMDI</button>
                <button className="campus">CMC</button>
            </div>
            <button className="login">Login</button>
        </div>
        </>
    );
}