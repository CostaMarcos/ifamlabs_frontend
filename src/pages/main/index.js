import React from 'react';

import './styles.css';

import add from '../../assets/add1.png';
import computer from '../../assets/computer1.png';

export default function Main(){
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
        <div className="labs">
            <div className="lab">
                <img className="computer" src={computer} alt="computador"/>
                <div className="info">
                    <h1>LabNome</h1>
                    <h2 className="capacidade">Capacidade: 30</h2>
                    <h2 className="local">Local: Primeiro piso</h2>
                </div>
                
                <img className="add" src={add} alt="ver mais"/>
            </div>
            <div className="lab">
                <img className="computer" src={computer} alt="computador"/>
                <div className="info">
                    <h1>LabNome</h1>
                    <h2 className="capacidade">Capacidade: 30</h2>
                    <h2 className="local">Local: Primeiro piso</h2>
                </div>
                
                <img className="add" src={add} alt="ver mais"/>
            </div>
            <div className="lab">
                <img className="computer" src={computer} alt="computador"/>
                <div className="info">
                    <h1>LabNome</h1>
                    <h2 className="capacidade">Capacidade: 30</h2>
                    <h2 className="local">Local: Primeiro piso</h2>
                </div>
                
                <img className="add" src={add} alt="ver mais"/>
            </div>
            <div className="lab">
                <img className="computer" src={computer} alt="computador"/>
                <div className="info">
                    <h1>LabNome</h1>
                    <h2 className="capacidade">Capacidade: 30</h2>
                    <h2 className="local">Local: Primeiro piso</h2>
                </div>
                
                <img className="add" src={add} alt="ver mais"/>
            </div>
            <div className="lab">
                <img className="computer" src={computer} alt="computador"/>
                <div className="info">
                    <h1>LabNome</h1>
                    <h2 className="capacidade">Capacidade: 30</h2>
                    <h2 className="local">Local: Primeiro piso</h2>
                </div>
                
                <img className="add" src={add} alt="ver mais"/>
            </div>
        </div>
        </>
    );
}