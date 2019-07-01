import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';

import confLogo from '../images/badge-header.svg';

import BadgeList from '../component/BadgeList';

import api from '../api';

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    //É chamado após o render do componente. 
    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
            console.log(this.state.error)
        }
    }

    render(){

        if (this.state.loading === true) {
            return <h4>Carregando Badges...</h4>
        }

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