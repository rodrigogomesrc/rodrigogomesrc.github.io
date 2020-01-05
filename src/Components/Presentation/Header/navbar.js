import React, { Component } from 'react';
import Navlink from './navlink';
import LanguageSwitch from './languageswitch';

export class Navbar extends Component {

    render() {
        return (
            <div id="header-nav">
                {
                    this.props.links.map(navlink => {

                        if(navlink.pageNumber === this.props.currentPage) {

                            return (

                                <Navlink 
                                    name={navlink.name}
                                    pageNumber={navlink.pageNumber}
                                    url={navlink.path} 
                                    clicked={true} 
                                    click={this.props.changePage}
                                    key={navlink.name}
                                ></Navlink>
                            )

                        } else {

                            return(
                                <Navlink 
                                    name={navlink.name}
                                    pageNumber={navlink.pageNumber}
                                    url={navlink.path} 
                                    clicked={false} 
                                    click={this.props.changePage}
                                    key={navlink.name}
                                ></Navlink>
                            )
                        }
                    })
                }
                <LanguageSwitch 
                    language={this.props.language}
                    changeLanguage={this.props.changeLanguage}
                ></LanguageSwitch>
            </div>
        )
    }
}

export default Navbar
