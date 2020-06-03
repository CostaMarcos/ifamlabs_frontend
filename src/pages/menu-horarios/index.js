import React from 'react';
import { MdAlarm } from 'react-icons/md'
import './styles.css';

export default function MenuHorarios(){
    return(
        <>
            <div className="horarios">
                <div className="horario">
                    < MdAlarm size={30} color="#fff" />
                    <h2 className="intervalo">7:30 - 9:00</h2>
                    <h2 className="nome">Lab1</h2>
                    <h2 className="status">Status: Ocupado</h2>
                </div>
            </div>
        </>
    );
}