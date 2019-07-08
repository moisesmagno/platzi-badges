import React from 'react';
import { Link } from 'react-router-dom';

import BadgeListItem from './BadgeListItem';

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
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => {
                        return (
                            <li key={badge.id}>
                                <Link
                                    className="text-reset text-decoration-none"
                                    to={`/badges/${badge.id}`}
                                >
                                    <BadgeListItem badge={badge}/>      
                                </Link>                                
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


export default BadgeList;