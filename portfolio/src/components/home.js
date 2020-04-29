import React from "react";
import './style/home.css';
import education from "./images/education.png";
import project from "./images/project.png";
import experience from "./images/experience.png";
import activities from "./images/activities.png";


export default class Footer extends React.Component {
    render() {
      return (
          <footer>
              <div className="home">
                  <div id="education"><img src={education} height="100" width ="100" alt="education"/><br/>Education</div>
                  <div id="project"><img src={project} height="100" width ="100" alt="project"/><br/>Project</div>
                  <div id="experience"><img src={experience} height="100" width ="100" alt="experience"/><br/>Experience</div>
                  <div id="activities"><img src={activities} height="100" width ="100" alt="activities"/><br/>Activities</div>
              </div>
          </footer>
      );
    }
  }