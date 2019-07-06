import React from 'react';

import './styles/BadgeEdit.css';

import header from '../images/platziconf-logo.svg';

import Badge from '../component/Badge';
import BadgeForm from '../component/BadgeForm';
import api from '../api';
import apiGit from '../services/apis';
import PageLoading from '../component/PageLoading';


class BadgeEdit extends React.Component {

    state = { 
            defaults: {
                avatar: 'https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg'
            },
            loading: true,
            error: null,    
            form: {
                avatarUrl: 'https://exelord.com/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg',
                firstName: '',
                lastName: '',
                jobTitle: '',
                github: '',
                email: ''
            } 
        }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData = async e => {
        this.setState({ loading: true, error: null });
    
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
    
            this.setState({ loading: false, form: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    handleUploadAvatar = async (e) => {

        const { data } = await apiGit.get(`users/${this.state.form.github}`)

        this.setState(
            {
                form: {
                    ...this.state.form,
                    avatarUrl: data.avatar_url
                }
            }
        )

        console.log(this.state.form);
    }

    handleChange = (e) => { 

        e.preventDefault();

        this.setState(
            {
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value,
                    avatarUrl: this.state.form.avatarUrl
                }
            }
        );

        console.log(this.state.form);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        this.setState({ loading: true, error: null });

        try{
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges');
        }catch(error){
            this.setState({ loading: false, error: error });
        }
    }

    render(){
        
        if(this.state.loading) {
            return <PageLoading />
        }
        
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>        
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                urlAvatar={this.state.form.avatarUrl || this.state.defaults.avatar}
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                jobsTitle={this.state.form.jobTitle || 'Job Title'}
                                userGithub={this.state.form.github || 'User Github'}
                                email={this.state.form.email || 'E-mail'}
                            />
                        </div>

                        <div className="col-6">
                            
                            <h1>Edit Attendant</h1>
                            
                            <BadgeForm 
                                onChange={this.handleChange} 
                                form={this.state.form}
                                onSubmit={this.handleSubmit}
                                uploaduploadAvatar={this.handleUploadAvatar}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;