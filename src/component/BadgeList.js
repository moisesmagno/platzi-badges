import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgeList extends React.Component {
    render(){
        
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>Não retornou nenhum Badge</h3>
                    <Link className="btn btn-primary" to="/badges/new">Criei seu primeiro Badge</Link>
                </div>
            );
        }

        return (
            <div className="BadgesList">
                <ul>
                    {this.props.badges.map((badge) => {
                        return (
                            <li className="BadgesListItem" key={badge.id}>
                                <div>
                                    <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar"/>
                                </div>
                                <div className="BadgesListItem__data">
                                    <h4>{badge.firstName} {badge.lastName}</h4> 
                                    <span className="">@{badge.twitter}</span>       
                                    <span>{badge.jobTitle}</span>
                                </div>                            
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


export default BadgeList;