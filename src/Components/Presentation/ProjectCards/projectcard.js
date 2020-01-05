import React, { Component } from 'react';
import './projectcard.css';
import { Link } from 'react-router-dom';

export class ProjectCard extends Component {

    renderImage = () => {

        let image = this.props.card.image;
    
        if(image !== ""){
    
            return (
    
                <div className="project-card-image-holder" >
                    <img src={image} alt="Imagem ilustrativa" className="project-card-image" />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="project-card">
                <div className="card-title">{this.props.card.name}</div>
                <div className="project-card-description">
                    <div className="project-card-content">
                        {
                            this.renderImage()
                        }
                        <div className="project-card-description">
                            {this.props.card.description}
                            <Link to={this.props.card.url} className="page-link card-link"> Saiba mais</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard
