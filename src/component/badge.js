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
                    <img className="Badge__avatar" src={this.props.urlAvatar} alt="Avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobsTitle}</h3>
                    <div>@{this.props.userTwitterr}</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;