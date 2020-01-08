import React, { Component } from 'react';
import './homepage.css';
import PageCover from '../../Presentation/PageCover/pagecover';
import HomeMain from './../../Presentation/HomeMain/homemain';
import Helmet from 'react-helmet';

export class HomePage extends Component {
    render() {
        return (
            <div id="home-page-holder">
                <Helmet>
                    <meta
                        name="description"
                        content="Rodrigo Rocha - página e blog pessoal"
                    />
                    <title>Rodrigo Rocha</title>
                </Helmet>
               <PageCover language={this.props.language}></PageCover>
               <HomeMain language={this.props.language}></HomeMain>
            </div>
        )
    }
}

export default HomePage
