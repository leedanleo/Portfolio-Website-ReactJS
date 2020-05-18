import React from "react";
import './style/home.css';

import education from "./images/education.png";
import project from "./images/project.png";
import experience from "./images/experience.png";
import activities from "./images/activities.png";

import { Link } from "react-router-dom";


export default class Home extends React.Component {
    render() {
      return (
        <div className="home">
                    <Link to="/education"><div id="education"><img src={education} height="100" width ="100" alt="education"/><br/>Education</div></Link>
                    <Link to="/projects"><div id="projects"><img src={project} height="100" width ="100" alt="projects"/><br/>Projects</div></Link>
                    <Link to="/experience"><div id="experience"><img src={experience} height="100" width ="100" alt="experience"/><br/>Experience</div></Link>
                    <Link to="/activities"><div id="activities"><img src={activities} height="100" width ="100" alt="activities"/><br/>Activities</div></Link>
        </div>
      );
    }
  }