import React, { Component } from 'react';
import picture from './picture.png'; 

export class ProfilePicture extends Component {

    renderText = () => {

        if(this.props.language === "portuguese") {

            return (
                <div className="center" id="profile-picture">
                    <div className="picture-circle center">
                        <img id="profile-image" src={picture} alt="author"></img>
                    </div>
                    <div className="center" id="contact-holder">
                        <div className="contact-line"><b>E-mail: </b>rocha.rodrigogomes@gmail.com</div>
                        <div className="contact-line">
                            <b>Github: </b><a className="simple-link contact-link" href="https://github.com/rodrigogomesrc">rodrigogomesrc</a>
                        </div>
                        <div className="contact-line">
                            <b>Telegram: </b><a className="simple-link contact-link" href="https://t.me/rodrigogomesrc">rodrigogomesrc</a>
                        </div>
                    </div>
                </div>
            )

        } else {

            return (

                <div className="center" id="profile-picture">
                    <div className="picture-circle center">
                        <img id="profile-image" src={picture} alt="author"></img>
                    </div>
                    <div className="center" id="contact-holder">
                        <div className="contact-line"><b>Email: </b>rocha.rodrigogomes@gmail.com</div>
                        <div className="contact-line">
                            <b>Github: </b><a className="simple-link contact-link" href="https://github.com/rodrigogomesrc">rodrigogomesrc</a>
                        </div>
                        <div className="contact-line">
                            <b>Telegram: </b><a className="simple-link contact-link" href="https://t.me/rodrigogomesrc">rodrigogomesrc</a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        
        return (

           this.renderText()
        )
    }
}

export default ProfilePicture
