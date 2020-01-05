import React, { Component } from 'react';
import ProjectCard from '../ProjectCards/projectcard';
import './projectsholder.css';
import geneticats from './geneticats.png';

export class ProjectsHolder extends Component {


    projectsPortuguese = [

        {
            name : "Geneticats",
            description :  `Geneticats é um Jogo Educacional voltado a facilitar o aprendizado 
            dos conteúdos de Genética da Biologia do ensino médio.`,
            image : geneticats,
            url : "/fsdfsdfs"
        },
        {
            name : "Crawler Stats",
            description : `A collection of codes meant to get some stats on webpages using webscraping`,
            image : "",
            url : "/fsdfsdfs"
        },
        {
            name : "Toolks",
            description : "Toolks é um conjunto de ferramentas matemáticas para ajudar em cálculos do dia a dia.",
            image : "",
            url : "/fsdfsdfs"
        },
    ]

    projectsEnglish = [

        {
            name : "Geneticats",
            description : `Geneticats is an Educational Game in portuguese
            designed to facilitate the learning of high school Biology Genetics content. Geneticats is an Educational Game in portuguese
            designed to facilitate the learning of high school Biology Genetics content.  `,
            image : geneticats,
            url : "/fsdfsdfs"
        },
        {
            name : "Crawler Stats",
            description : `A collection of codes meant to get some stats on webpages using webscraping`,
            image : "",
            url : "/fsdfsdfs"
        },
        {
            name : "Toolks",
            description : "Toolks é um conjunto de ferramentas matemáticas para ajudar em cálculos do dia a dia.",
            image : "",
            url : "/fsdfsdfs"
        },
    ]

    renderCards = () => {

        let language = this.props.language;

        if(language === "portuguese"){

            return (

                this.projectsPortuguese.map(card => <ProjectCard card={card} key={card.name}></ProjectCard> )
            )

        } else {

            return (

                this.projectsEnglish.map(card => <ProjectCard card={card} key={card.name}></ProjectCard> )
            )
        }
    }

    render() {
        return (
            <div id="projects-cards-holder">
                {
                    this.renderCards()
                }
            </div>
        )
    }
}

export default ProjectsHolder
