import React from 'react';

import '../component/styles/Badge.css';
import confLog from '../images/badge-header.svg';

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLog} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://avatars0.githubusercontent.com/u/4347195?s=460&v=4" alt="Avatar"/>
                    <h1>Moisés <br/> Escurra</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Full Stack Developer</h3>
                    <div>@moisesmagno</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;