import React from 'react';

class BadgeForm extends React.Component{

    render(){
        return (
            <React.Fragment>
                <h1>New Attendant</h1>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.form.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            value={this.props.form.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            value={this.props.form.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" 
                            value={this.props.form.jobTitle}/>
                    </div>
                    
                    
                        <div className="form-group">
                            <label>Github</label>
                            <div className="form-inline">
                                <div className="form-group">
                                    <input 
                                        onChange={this.props.onChange} 
                                        className="form-control" 
                                        type="text" 
                                        name="github" 
                                        value={this.props.form.github}/>
                                </div>
                                <div className="form-group mx-sm-3">
                                    <button type="button" className="btn btn-secondary" onClick={this.props.uploaduploadAvatar} >Subir foto</button>
                                </div>
                            </div>
                        </div>

                    
                    

                    <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm;