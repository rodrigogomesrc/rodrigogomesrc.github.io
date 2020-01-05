import React, { Component } from 'react';
import './homepage.css';
import PageCover from '../../Presentation/PageCover/pagecover';
import HomeMain from './../../Presentation/HomeMain/homemain';

export class HomePage extends Component {
    render() {
        return (
            <div id="home-page-holder">
               <PageCover language={this.props.language}></PageCover>
               <HomeMain language={this.props.language}></HomeMain>
            </div>
        )
    }
}

export default HomePage
