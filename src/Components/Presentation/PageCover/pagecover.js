import React, { Component } from 'react';
import './pagecover.css';
import ProfilePicture from './profilepicture';
import ProfileTextArea from './profiletextarea';  

export class PageCover extends Component {
    
    render() {
        return (
            <div id="page-cover-holder" >
                <div className="page-cover-container" id="page-cover-content">
                    <ProfilePicture language={this.props.language}></ProfilePicture>
                    <ProfileTextArea language={this.props.language}></ProfileTextArea>
                </div>
            </div>
        )
    }
}

export default PageCover
