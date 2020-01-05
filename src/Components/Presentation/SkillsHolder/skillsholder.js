import React, { Component } from 'react';
import './skillsholder.css';
import  Card from './../Card/card';


export class SkillsHolder extends Component {


    skillsPortuguese = [

        {
            cardName : "Linguagens de Programação",
            skills : [
                {
                    name : "Python",
                    value : 8
                },
                {
                    name : "Javascript",
                    value : 6
                },
                {
                    name : "C",
                    value : 6
                },
                {
                    name : "C#",
                    value : 3
                }
            ]
        },
        {
            cardName : "Python",
            skills : [
                {
                    name : "Pyramid",
                    value : 6
                },
                {
                    name: "Web scraping",
                    value: 5
                },
                {
                    name : "Tkinter",
                    value : 2
                }
            ]
        },
        {
            cardName : "Javascript",
            skills : [
                {
                    name : "ES6",
                    value : 8
                },
                {
                    name : "React",
                    value : 7
                },
                {
                    name : "Angular",
                    value : 5
                },
                {
                    name : "Jquery",
                    value : 4
                }
            ]
        },
        {
            cardName : "Banco de Dados",
            skills : [
                {
                    name : "MySQL",
                    value : 7
                },
                {
                    name : "MongoDB",
                    value : 6
                },
                {
                    name : "SQLite",
                    value : 5
                }
            ]
        },
        {
            cardName : "CSS",
            skills : [
                {
                    name : "CSS puro",
                    value : 8
                },
                {
                    name : "Flexbox",
                    value : 7
                },
                {
                    name : "Bootstrap",
                    value : 6
                },
                {
                    name : "CSS grid",
                    value : 2
                }
            ]
        },
        {
            cardName : "Outras",
            skills : [
                {
                    name : "Manutenção de Computadores",
                    value : 9
                },
                {
                    name : "Git",
                    value : 6
                },
                {
                    name : "Linux",
                    value : 6
                }
            ]
        }
    ]

    skillsEnglish = [

        {
            cardName : "Programming Languages",
            skills : [
                {
                    name : "Python",
                    value : 8
                },
                {
                    name : "Javascript",
                    value : 6
                },
                {
                    name : "C",
                    value : 6
                },
                {
                    name : "C#",
                    value : 3
                }
            ]
        },
        {
            cardName : "Python",
            skills : [
                {
                    name : "Pyramid",
                    value : 6
                },
                {
                    name: "Web scraping",
                    value: 5
                },
                {
                    name : "Tkinter",
                    value : 2
                }
            ]
        },
        {
            cardName : "Javascript",
            skills : [
                {
                    name : "ES6",
                    value : 8
                },
                {
                    name : "React",
                    value : 7
                },
                {
                    name : "Angular",
                    value : 5
                },
                {
                    name : "Jquery",
                    value : 4
                }
            ]
        },
        {
            cardName : "Databases",
            skills : [
                {
                    name : "MySQL",
                    value : 7
                },
                {
                    name : "MongoDB",
                    value : 6
                },
                {
                    name : "SQLite",
                    value : 5
                }
            ]
        },
        {
            cardName : "CSS",
            skills : [
                {
                    name : "CSS in general",
                    value : 8
                },
                {
                    name : "Flexbox",
                    value : 7
                },
                {
                    name : "Bootstrap",
                    value : 6
                },
                {
                    name : "CSS grid",
                    value : 2
                }
            ]
        },
        {
            cardName : "Other",
            skills : [
                {
                    name : "Computer Maintenance",
                    value : 9
                },
                {
                    name : "Git",
                    value : 6
                },
                {
                    name : "Linux",
                    value : 6
                }
            ]
        }
    ]

    renderCards = () => {

        if(this.props.language === "portuguese"){

            return (

               this.skillsPortuguese.map(card => <Card card={card} key={card.cardName}></Card> )
            )

        } else {

            return (

                this.skillsEnglish.map(card => <Card card={card} key={card.cardName}></Card> )
            )
        }
    }

    render() {

        return (
            
           <div id="skill-holder">
                {
                    this.renderCards()
                }
           </div>
        )
    }
}

export default SkillsHolder
