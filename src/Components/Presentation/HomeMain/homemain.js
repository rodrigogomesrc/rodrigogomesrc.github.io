import React, { Component } from 'react';
import './homemain.css';
import SkillsHolder from '../SkillsHolder/skillsholder';
import ProjectsHolder from '../ProjectsHolder/projectsholder';
import Two from '../Card/Rates/two';
import Four from '../Card/Rates/four';
import Six from '../Card/Rates/six';
import Eight from '../Card/Rates/eight';
import Ten from '../Card/Rates/ten';

export class HomeMain extends Component {

    renderText = () => {

        if(this.props.language === "portuguese") {
    
            return (
                <div id="home-main-page">
                    <div className="container">
    
                        <h1 className="title">Sobre mim</h1>
    
                        <p className="paragraph">
                        Eu sou um Técnico de Informática formado pelo IFRN - Campus Parnamirim. 
                        Eu atualmente curso Bacharelado em Tecnologia da Informação pela UFRN e 
                        moro na zona metropolitana de Natal/RN.
                        </p>

                        <p className="paragraph">
                        Programador em formação, já trabalhei em alguns pequenos projetos. 
                        Estou constantemente em busca de melhorar meus conhecimentos e por tais 
                        conhecimentos em prática nas várias ideias que tenho. Estou em uma jornada 
                        para tentar pôr em prática várias dessas ideias pela experiência adquirida ao fazê-las,
                         mas também por diversão.
                        </p>

                        <p className="paragraph">
                        Atualmente estou focando na área de Desenvolvimento WEB, mas tenho interesse em 
                        aprender mais sobre Análise de Dados e Inteligência Artificial, que são umas das áreas 
                        que eu acho mais interessantes.
                        </p>

                        <p className="paragraph">
                        Me considero um estusiasta da ciência e das tecnologias. 
                        Portanto, eu estou sempre antenado às novas tecnologias e novas descobertas da 
                        ciência e como elas impactam o nosso dia a dia e mudam nossas vida, 
                        seja melhorando-a ou seja tendo impactos negativos.
                        </p>

                        <p className="paragraph">
                        Por esses motivos, sou um fâ de ficção científica e de canais de ciência, 
                        sendo consumir tais conteúdos o meu maior passatempo.
                        </p>
                        
                        <h1 className="title">Conhecimentos</h1>
    
                        <p className="paragraph">
                        Aqui estão algumas das minhas habilidades e conhecimentos em tecnologias em geral.
                        </p>

                        <p className="star-description-title">
                        Legendas aproximadas do significado de cada classificação. Meia estrelas
                        estão entre uma e outra.
                        </p>

                        <div className="star-description-holder">
                            <Two></Two>
                            <div className="star-description">Já aprendi um pouco sobre</div>
                        </div>
                        <div className="star-description-holder">
                            <Four></Four>
                            <div className="star-description">Já usei brevemente e/ou experimentei 
                            mais a fundo</div>
                        </div>
                        <div className="star-description-holder">
                            <Six></Six>
                            <div className="star-description">Tenho um conhecimento mediano sobre o 
                            assunto e já usei algumas vezes</div>
                        </div>
                        <div className="star-description-holder">
                            <Eight></Eight>
                            <div className="star-description">Tenho um bom conhecimento sobre o assunto
                             e experiência de um bom tempo</div>
                        </div>
                        <div className="star-description-holder">
                            <Ten></Ten>
                            <div className="star-description">Tenho um conhecimento amplo e me 
                            considero um especialista no assunto</div>
                        </div>

                        <SkillsHolder language={this.props.language}></SkillsHolder>
    
                        <h1 className="title">Meus Projetos</h1>
    
                        <p className="paragraph">
                        Esse aqui é meu portfólio de projetos e coisas mais simples que eu 
                        construí ao longo do tempo aplicando meus conhecimentos em programação.
                        </p>
                        <ProjectsHolder language={this.props.language}></ProjectsHolder>
    
                    </div>
                </div>
            )
    
        } else {
    
            return (
                <div id="home-main-page">
                    <div className="container">
    
                        <h1 className="title">About me</h1>
    
                        <p className="paragraph">
                        I'm a brazilian computer technitian graduated by IFRN. 
                        I am currently pursuing a Bachelor of Information Technology 
                        (Something close to Computer Science)from UFRN and I live in the 
                        metropolitan region of Natal, Brazil.
                        </p>

                        <p className="paragraph">
                        Programmer in training, I've worked in some little projects. 
                        I'm constantly seeking to improve my knowledge e put them into 
                        practice turning many of my ideias into reality. I'm in a journey to put 
                        many of those ideias into practice by the experience of it, but also to have fun.
                        </p>

                        <p className="paragraph">
                        I'm currently focused into the WEB Development are, but I have interest in learning 
                        more about Data Science and Artificial Intelligence, which are some of the subjects 
                        I find more interesting.
                        </p>

                        <p className="paragraph">
                        I consider myself a science and technology enthusiast, Therefore I am always attuned 
                        to new technologies and science discoveries and how they impact our daily live and change 
                        them for the best and sometimes for the worse in some aspects.
                        </p>

                        <p className="paragraph">
                        By those reasons, I'm a fan of science fiction and science channels. 
                        Consuming those contents are my biggest hobby
                        </p>
                        
                        <h1 className="title">Skills</h1>
    
                        <p className="paragraph">
                        Here are some of my skills and knowledge about technologies in general.
                        </p>

                        <p className="star-description-title">
                        Aproximate subtitles for each classification. 
                        Half stars meaning falls between the star before and after.
                        </p>

                        <div className="star-description-holder">
                            <Two></Two>
                            <div className="star-description">I have learned some things about it</div>
                        </div>
                        <div className="star-description-holder">
                            <Four></Four>
                            <div className="star-description">I have used it briefly and/or experimented a bit with it
                            mais a fundo</div>
                        </div>
                        <div className="star-description-holder">
                            <Six></Six>
                            <div className="star-description"> I have a medium knowledge about it and 
                            I've used it some times</div>
                        </div>
                        <div className="star-description-holder">
                            <Eight></Eight>
                            <div className="star-description">I have a good knowledge about the matter and 
                            I've been using it for a considerable time</div>
                        </div>
                        <div className="star-description-holder">
                            <Ten></Ten>
                            <div className="star-description">I have a broad knowledge and experience on the subject 
                            and I consider myself a especialist on it</div>
                        </div>

                        <SkillsHolder language={this.props.language}></SkillsHolder>
    
                        <h1 className="title">My Projects</h1>
    
                        <p className="paragraph">
                        Here is my portfólio of projects and some simpler things 
                        I've built over the years studying and applyimg my programming skills.
                        </p>

                        <ProjectsHolder language={this.props.language}></ProjectsHolder>
    
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

export default HomeMain
