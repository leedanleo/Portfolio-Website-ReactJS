import React from "react";
import './style/profile.css';
import profile from "./images/profile.png";

export default class Profile extends React.Component {

    render() {
      return (
          <div id="profile-shot">
              <div id="profile-shot"><img src={profile} height="200" width ="200" alt="profile"/></div>
          </div>
        );
    }
}