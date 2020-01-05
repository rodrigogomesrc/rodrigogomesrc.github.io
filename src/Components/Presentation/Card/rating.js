import React, { Component } from 'react';
import Zero from './Rates/zero';
import One from './Rates/one';
import Two from './Rates/two';
import Three from './Rates/three';
import Four from './Rates/four';
import Five from './Rates/five';
import Six from './Rates/six';
import Seven from './Rates/seven';
import Eight from './Rates/eight';
import Nine from './Rates/nine';
import Ten from './Rates/ten';

export class Rating extends Component {

    renderRating = () => {

        const rating = this.props.rating;

        switch (rating){

            case 1: return(<One></One>)
            case 2: return(<Two></Two>)
            case 3: return (<Three></Three>)
            case 4: return (<Four></Four>)
            case 5: return (<Five></Five>)
            case 6: return (<Six></Six>)
            case 7: return (<Seven></Seven>)
            case 8: return (<Eight></Eight>)
            case 9: return (<Nine></Nine>)
            case 10: return (<Ten></Ten>)
            default: return (<Zero></Zero>)
        }
    }

    render() {
      
        return (
            <div>
               {this.renderRating()}
            </div>
        )
    }
}

export default Rating
