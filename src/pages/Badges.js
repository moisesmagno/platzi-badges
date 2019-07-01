import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';

import confLogo from '../images/badge-header.svg';

import BadgeList from '../component/BadgeList';

class Badges extends React.Component {

    state = {
        data: [
            {
                "id": "98dd84a4-8dba-4a7d-87c2-3b9714372d2d",
                "firstName": "Jed",
                "lastName": "Sporer",
                "email": "Santiago.Roberts@yahoo.com",
                "jobTitle": "Dynamic Accounts Agent",
                "twitter": "JedSporer30424",
                "avatarUrl": "https://www.gravatar.com/avatar/4f164ea9a61e8d28e6b83a356d3ff5ae?d=identicon"
            },
            {
                "firstName": "Richard",
                "lastName": "Kaufman López",
                "email": "richardbkaufman@gmail.com",
                "avatarUrl": "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon",
                "jobTitle": "Frontend Engineer @ Kickass Partners",
                "twitter": "sparragus",
                "id": "EYR2BVQ"
            },
            {
                "firstName": "Carolynn",
                "lastName": "Kaufman",
                "email": "carolynn@example.com",
                "avatarUrl": "https://www.gravatar.com/avatar/580a552f26ac5e3a0817c3ecc5b9d690?d=identicon",
                "jobTitle": "Lawyer",
                "twitter": "ckaufmanpr",
                "id": "npaYZKI"
            }
        ]
    }

    render(){
        return (
            <React.Fragment>
               <div className="Badges">
                   <div className="Badges__hero">
                       <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                       </div>
                   </div>
               </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgeList badges={this.state.data}/>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        );
    }
}

export default Badges;