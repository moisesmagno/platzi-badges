import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';

import confLogo from '../images/badge-header.svg';

import BadgeList from '../component/BadgeList';
import PageLoading from '../component/PageLoading';
import MiniLoader from '../component/MiniLoader';
import PageError from '../component/PageError';

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

        //Executa o método fetchData a cada 5 segundos, isso para atualizar a página automáticamente.
        this.interval = setInterval(this.fetchData, 5000);
    }

    //Para o intervalo de execuções, isso para após sair da página. 
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render(){

        if (this.state.loading === true && !this.state.data) {
            return <PageLoading/>
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
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

                            {this.state.loading && <MiniLoader />}
                        </div>
                    </div>
               </div>
            </React.Fragment>
        );
    }
}

export default Badges;