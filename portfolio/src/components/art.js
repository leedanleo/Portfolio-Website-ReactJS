import React from "react";
import './style/art.css';
import art1 from "./images/art1.jpg";
import art2 from "./images/art2.jpg";
import art3 from "./images/art3.jpg";

export default class Art extends React.Component {
    render() {
      return (
        <div className="art">
                <div className="art-head">Art Projects</div>
                <div className="paint">
                <div id ="item">
                    Rainy Night<br></br>
                    <img src={art1} height="756" width ="1008" alt="art1"/>    
                </div>
                <div id ="item">
                    Panda Cove<br></br>
                    <img src={art2} height="756" width ="1008" alt="art2"/>    
                </div>
                <div id ="item">
                    Koi in Kyoto<br></br>
                    <img src={art3} height="756" width ="1008" alt="art3"/>    
                </div>
                </div>   
            </div>
      );
    }
  }