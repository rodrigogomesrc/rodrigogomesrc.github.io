import React, { Component } from 'react'

export class ProfileTextArea extends Component {

    renderText = () => {

       if(this.props.language === "portuguese"){

            return(
                <div className="center" id="profile-text-area">
                    <div id="profile-text">
                        <div id="first-text">Olá! Meu nome é <span className="blue-text">Rodrigo</span></div>
                        <div>
                            Tenho 20 anos, sou 
                            <span className="blue-text"> Técnico em Informática</span> e Estudante de 
                            <span className="blue-text"> Tecnologia da Informação</span>
                        </div>
                    </div>
                </div>
            )

       } else {

            return(
                <div className="center" id="profile-text-area">
                    <div id="profile-text">
                        <div id="first-text">Hi! My name is <span className="blue-text">Rodrigo</span></div>
                        <div>
                            I'm 20 years old
                            <span className="blue-text"> Computer Technician</span> and
                            <span className="blue-text"> Programming</span> student
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

export default ProfileTextArea
