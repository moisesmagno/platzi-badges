import React from 'react';
import { Link } from 'react-router-dom';

import BadgeListItem from './BadgeListItem';

import './styles/BadgesList.css';

const useSearchBadges = (badges) => {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState('');

    React.useMemo(
        () => {
            const result = badges.filter(badge => {
                return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
            })

            setFilteredBadges(result);
        },
        [badges, query]
    );

    return { query, setQuery, filteredBadges }
}

const BadgeList = (props) => {
    
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control" onChange={(e) => {
                        setQuery(e.target.value)
                    }} value={query} />
                </div>
                <h3>Não retornou nenhum Badge</h3>
                <Link className="btn btn-primary" to="/badges/new">Criei seu primeiro Badge</Link>
            </div>
        );
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control" onChange={(e) => {
                    setQuery(e.target.value)
                }} value={query}/>
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
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


export default BadgeList;