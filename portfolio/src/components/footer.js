import React from "react";
//import { Link } from "react-router-dom";
import mail from "./images/mail.png";
import linkedin from "./images/linkedin.png";
import github from "./images/GitHub.png";
import './style/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div className="row">
                <div id="email"><a href="mailto:leedanleo.91@gmail.com" target ="_top"><img src={mail} height="50" width ="50" alt="Mail"/></a><br/>Leedanleo.91@gmail.com</div>
                <div id="linkedin"><a href="https://www.linkedin.com/in/leedanleo/" target="_blank"><img src={linkedin} height="50" width ="50" alt="Linkedin"/></a><br/>Leedanleo</div>
                <div id="github"><a href="https://github.com/leedanleo" target="_blank"><img src={github} height="50" width ="50" alt="Github"/></a><br/>Leedanleo</div>
            </div>
        </footer>
    );
  }
}