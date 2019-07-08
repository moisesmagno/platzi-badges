import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';

import ConfLogo from '../images/platziconf-logo.svg';

import PageLoading from '../component/PageLoading';
import PageError from '../component/PageError'; 
import Badge from '../component/Badge';

import api from '../api';

class BadgeDetails extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error});    
        }
    }

    render() {

        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />       
        }

        const badge = this.state.data;

        return(
            <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container"> 
                        <div className="row">
                            <div className="col-6">
                                <img src={ConfLogo} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>   

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                urlAvatar={badge.avatarUrl || this.state.defaults.avatar}
                                lastName={badge.lastName}
                                firstName={badge.firstName}
                                jobsTitle={badge.jobTitle}
                                userGithub={badge.github}
                                email={badge.email}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeDetails;