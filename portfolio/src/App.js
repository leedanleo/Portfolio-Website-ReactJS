import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Background from "./components/background";
import Clock from "./components/clock";
export default class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Background />
          <Clock/>
          <Header />  
          <Switch>
            {/* <route path="/" exact component={home}/>
            <route path="/education" component={education}/>
            <route path="/projects" component={projects}/>
            <route path="/workExperience" component={workExperience}/>
            <route path="/paintGallery" component={workExperience}/>
            <route path="/activitiesAndVolunteering" component={activitiesAndVolunteering}/> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );  
  }

};

