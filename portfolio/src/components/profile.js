import React from "react";
import './style/profile.css';
import profile from "./images/profile.png";

export default class Profile extends React.Component {

    render() {
      return (
          <div id="profile-shot">
              <div id="profile-shot"><img src={profile} height="100" width ="100" alt="profile"/></div>
          </div>
        );
    }
}