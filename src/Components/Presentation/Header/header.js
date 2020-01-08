import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Navbar from './navbar';

export class Header extends Component {

    state = {

        currentPage: 1,
    }

    componentDidMount(){
    
        if(window.location.pathname === "/") {
    
          this.setState({currentPage : 1});
          
        } else {

            this.setState({currentPage : 2});
        }

    }

    changePage = (pageNumber) => {

        this.setState({currentPage: pageNumber});
    }

    changeLanguage = () => {

    }

    render() {
        return (
            <div id="header-component">
                <div id="header-container">
                    <div id="header-title">
                        <Link to="/" id="header-title-link">
                            Rodrigo Rocha
                        </Link>
                    </div>
                    <Navbar 
                        links={this.props.texts.links} 
                        currentPage={this.state.currentPage} 
                        changePage={this.changePage}
                        language={this.props.language}
                        changeLanguage={this.props.changeLanguage}
                    ></Navbar>
                </div>
            </div>
        )
    }
}

export default Header
