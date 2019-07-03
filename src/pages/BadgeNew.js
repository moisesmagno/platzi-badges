import React from 'react';

import './styles/BadgeNew.css';

import header from '../images/platziconf-logo.svg';

import Badge from '../component/Badge';
import BadgeForm from '../component/BadgeForm';
import api from '../api';


class BadgeNew extends React.Component {

    state = { 
            defaults: {
            avatar: 'https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg'
            },
            form: {
                avatarUrl: '',
                firstName: '',
                lastName: '',
                jobTitle: '',
                twitter: '',
                email: ''
            } 
        }

    handleChange = (e) => {
        e.preventDefault();
        this.setState(
            {
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value,
                    avatarUrl: 'https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg'
                }
            }
        );
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        try{
            await api.badges.create(this.state.form);
            this.setState({ loading: false });
        }catch(error){
            this.setState({ loading: false, error: error });
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>        
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                // urlAvatar="https://avatars0.githubusercontent.com/u/4347195?s=460&v=4"
                                urlAvatar={this.state.form.avataruser || this.state.defaults.avatar}
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                jobsTitle={this.state.form.jobTitle || 'Job Title'}
                                userTwitterr={this.state.form.twitter || 'UserTwitter'}
                                email={this.state.form.email || 'E-mail'}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                form={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;