import React from "react";
import './style/home.css';
import education from "./images/education.png";
import project from "./images/project.png";
import experience from "./images/experience.png";
import activities from "./images/activities.png";


export default class Home extends React.Component {
    render() {
      return (
          <footer>
              <div className="home">
                  <div id="education"><img src={education} height="50" width ="50" alt="education"/><br/>Education</div>
                  <div id="project"><img src={project} height="50" width ="50" alt="project"/><br/>Project</div>
                  <div id="experience"><img src={experience} height="50" width ="50" alt="experience"/><br/>Experience</div>
                  <div id="activities"><img src={activities} height="50" width ="50" alt="activities"/><br/>Activities</div>
              </div>
          </footer>
      );
    }
  }