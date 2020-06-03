import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import add from '../../assets/add1.png';
import computer from '../../assets/computer1.png';

export default function Main(){
    const [labs, setLabs] = useState([]);
    useEffect(() => {
        api.get('room/list', {
            campus: "cmzl" 
        }
        ).then(response => {
            setLabs(response.data);
        })
    }, []); 
    
    async function listlab(campus){
        const NewResponse = await api.get('room/list', { campus });
        console.log(NewResponse);
        
    }

    return (
        <>
        <div className="lateral">
            <header className="titulo">IFAM LABS</header>
            <h3><a href="https://www.linkedin.com/in/marcos-vinicius-551450194/" target="_blank">By: Marcos Vinicius</a></h3>
            <div className="botoes-campus">
                <button className="campus">CMZL</button>
                <button className="campus" onClick={() => listlab("cmdi")}>CMDI</button>
                <button className="campus">CMC</button>
            </div>
            <button className="login">Login</button>
        </div>
        <div className="labs">
            {labs.map(lab => (
                <div className="lab" key={lab.id}>
                    <img className="computer" src={computer} alt="computador"/>
                    <div className="info">
                        <h1>{lab.nome}</h1>
                        <h2 className="capacidade">Capacidade: {lab.capacidade}</h2>
                        <h2 className="local">Local: {lab.local}</h2>
                    </div>
                    <Link to="/horarios">
                    <img className="add" src={add} alt="ver mais"/>
                    </ Link>
                </div>
            ))}
        </div>
        </>
    );
}