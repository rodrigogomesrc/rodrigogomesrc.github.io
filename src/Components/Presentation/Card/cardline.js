import React, { Component } from 'react';
import Rating from './rating';

export class CardLine extends Component {
    render() {

        return (
            <div className="card-line">
                <div className="card-line-content">{this.props.card.name}</div>
                <Rating rating={this.props.card.value}></Rating>
            </div>
        )
    }
}

export default CardLine
