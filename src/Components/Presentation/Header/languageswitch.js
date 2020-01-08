import React, { Component } from 'react';

export class LanguageSwitch extends Component {

    renderButtons = () => {

        if(this.props.language === "portuguese"){
            
            return (

                <div id="language-switch">
                    <div className="language clicked-language" onClick={this.props.changeLanguage.bind(this, "english")}>
                        <div className="language-name">
                            Pt-BR
                        </div>
                    </div>
                    <div className="language" onClick={this.props.changeLanguage.bind(this, "english")}>
                        <div className="language-name">
                            En
                        </div>
                    </div>
                </div>
            )

        } else {

            return (

                <div id="language-switch">
                    <div className="language" onClick={this.props.changeLanguage.bind(this, "portuguese")}>
                        <div className="language-name">
                            Pt-BR
                        </div>
                    </div>
                    <div className="language clicked-language" onClick={this.props.changeLanguage.bind(this, "portuguese")}>
                        <div className="language-name">
                            En
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {

        return (
            this.renderButtons()
        )
    }
}

export default LanguageSwitch
