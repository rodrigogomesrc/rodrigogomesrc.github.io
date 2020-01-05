import React, { Component } from 'react';
import "./card.css";
import Cardline from './cardline';

export class Card extends Component {

    renderSkills = () => {

        return (

            this.props.card.skills.map(skill => {
                return(
    
                    <Cardline card={skill} key={skill.name}></Cardline>
                )
            })
        )
    }

    render() {

        return (
            <div className="card">

                <div className="card-title">{this.props.card.cardName}</div>
                {this.renderSkills()}
            </div>
        )
    }
}

export default Card
