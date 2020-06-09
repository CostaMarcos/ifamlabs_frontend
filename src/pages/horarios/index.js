import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import MenuHorarios from '../menu-horarios/index';

class Times extends Component {
    render(){
        return (
            <>
                <div className="lateral">
                    <header className="titulo">IFAM LABS</header>
                    <h3><a href="https://www.linkedin.com/in/marcos-vinicius-551450194/" target="_blank">By: Marcos Vinicius</a></h3>
                    <div className="botoes-campus">
                        <Link to='/'>
                            <button className="campus">Voltar</button>
                        </Link>
                    </div>
                    <button className="login">Login</button>
                </div>
                <MenuHorarios>
                    {this.props.match.params.id}
                </MenuHorarios>
            </>
        );
    }
}

export default Times;