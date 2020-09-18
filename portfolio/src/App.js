import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";


import Background from "./components/background";
import Home from "./components/home";
import Clock from "./components/clock";
import Profile from "./components/profile";


import Education from "./components/education";
import Projects from "./components/projects";
import Experience from "./components/experience";
//import Activities from "./components/activities";
import Introduction from "./components/introduction";
import Art from "./components/art";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Background />
          <Profile/>
          <Clock/>
          <Header /> 
          <Home/> 
          <Switch>
            <Route path="/" exact component={Introduction}/>
            <Route path="/education" component={Education}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/art" component={Art}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );  
  }

};

