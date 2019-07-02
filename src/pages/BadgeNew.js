import React from 'react';

import './styles/BadgeNew.css';

import header from '../images/platziconf-logo.svg';

import Badge from '../component/Badge';
import BadgeForm from '../component/BadgeForm';


class BadgeNew extends React.Component {

    state = { 
            form: {
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
                    [e.target.name]: e.target.value
                }
            }
        );
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
                                urlAvatar="https://avatars0.githubusercontent.com/u/4347195?s=460&v=4"
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobsTitle={this.state.form.jobTitle}
                                userTwitterr={this.state.form.twitter}
                                email={this.state.form.email}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} form={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;