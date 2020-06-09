import React, { Component, useEffect, useState } from 'react';
import { MdAlarm } from 'react-icons/md'
import './styles.css';
import api from '../../services/api';

class MenuHorarios extends Component{
    test = () =>{
        const id = this.props.children;
        //const Response = await api.get('/time/show',{ headers: { room: id } });
        
        console.log(id);
    }
    render(){
        return(
            <> 
                <div className="horarios">
                    {this.test()}
                    <div className="horario">
                        < MdAlarm size={30} color="#fff" />
                        <h2 className="intervalo">7:30 - 9:00</h2>
                        <h2 className="nome">{this.props.children}</h2>
                        <h2 className="status">Status: Ocupado</h2>
                    </div>
                </div>
            </>
        );
    }
}

export default MenuHorarios;