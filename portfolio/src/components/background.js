import React from "react";
import Nature from "./video/waterfall1.mp4";
import VideoPoster from "./images/GitHub.png"; /*need to change this and make it work later*/
import './style/background.css';


export default class Background extends React.Component {
    render() {
      return (
        <div className="full-page">
            <div id="content">
              This is where the content wil be
            </div>
            <video id="background-nature" poster={VideoPoster} controls autoPlay loop muted>
              <source src={Nature} type="video/mp4" />
            </video>
        </div>
      );
   }
}