import React from 'react';

import './styles/BadgeListItem.css';

class BadgeListItem extends React.Component {
    render(){
        return (
            <div className="BadgesListItem" >
                <div>
                    <img className="BadgesListItem__avatar" src={this.props.badge.avatarUrl} alt="Avatar"/>
                </div>
                <div className="BadgesListItem__data">
                    <h4>{this.props.badge.firstName} {this.props.badge.lastName}</h4> 
                    <span className="">@{this.props.badge.twitter}</span>       
                    <span>{this.props.badge.jobTitle}</span>
                </div> 
            </div>
        );            
    }
}

export default BadgeListItem;