import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Presentation/Header/header';
import Footer from './Components/Presentation/Footer/footer';
import HomePage from './Components/Pages/HomePage/homepage';
import Blog from './Components/Pages/Blog/blog';
import BlogContent from './Components/Presentation/BlogContent/blogcontent';
import {englishText, portugueseText} from './texts';

export class App extends Component {

  state = {

    page: "home",
    language: "portuguese"
    
  }

  componentDidMount(){

    let savedLanguage = localStorage.getItem("language");
    if(savedLanguage !== null){

      this.setState({language : savedLanguage});

    }

    if(window.location.pathname !== "/") {

      this.setState({page : "blog"});

    } else {

      this.setState({page : "home"});
    }

  }

  loadText = ()  => {

    let language = this.state.language;
    return language === "portuguese"? portugueseText: englishText;

  }

  changeLanguage = (language) => {

    localStorage.setItem("language", language);
    this.setState({language});
  }

  render() {
    return (
      <Router>
          <Header 
            page={this.state.page} 
            texts={this.loadText()} 
            changeLanguage={this.changeLanguage}
            language={this.state.language}
          ></Header>
          <Switch>

            <Route 
              exact path="/" 
              render={props => <HomePage {...props} texts={this.loadText()} language={this.state.language}></HomePage>} 
            />

            <Route 
              path="/blog" 
              render={props => <Blog {...props} texts={this.loadText()} language={this.state.language}></Blog>}
            />

            <Route 
              path="/post/:slug" 
              render={props => <BlogContent {...props} texts={this.loadText()} language={this.state.language}></BlogContent>}
            />

            <Route 
              path="*" 
              render={props => <HomePage {...props} texts={this.loadText()} language={this.state.language}></HomePage>}
            />

          </Switch>
          <Footer></Footer>
      </Router>
    )
  }
}

export default App
