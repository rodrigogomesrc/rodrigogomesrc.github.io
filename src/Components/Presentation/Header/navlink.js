import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navlink extends Component {

    renderLink = () => {

        if(this.props.clicked){

            return (

                <NavLink to={this.props.url} className="nav-link clicked-nav-link" onClick={this.props.click.bind(this, this.props.pageNumber)}>
                    <div className="nav-link-content">
                        {this.props.name}
                    </div>
                </NavLink> 
            )

        } else {

            return (

                <NavLink to={this.props.url} className="nav-link " onClick={this.props.click.bind(this, this.props.pageNumber)}>
                    <div className="nav-link-content">
                        {this.props.name}
                    </div>
                </NavLink> 
           )
        }
    }

    render() {
        return (

           this.renderLink()
             
        )
    }
}

export default Navlink
