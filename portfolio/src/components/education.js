import React from "react";
import './style/education.css';
import PSU from "./images/PSU.svg";
import OIT from "./images/OIT.svg";


export default class Education extends React.Component {
    render() {
      return (
        <div className="education">
        <div className="education-head">Education</div>

            <div className="education-container">
                <div className="box">
                    Master of Science Computer Science<br/>
                    Portland State University<br/>
                    2017 — 2020<br/>
                    GPA 3.70<br/>
                    <img src={PSU} height="100" width ="100" alt="psu emblem"/>
                </div>

                <div className="box">
                    Master of Science Renewable Energy Engineering<br/>
                    Oregon Institute of Technology<br/>
                    2013 — 2015<br/>
                    GPA 3.67<br/>
                    <img src={OIT} height="100" width ="100" alt="oit emblem"/>
                </div>

                <div className="box">
                    Master's Certification in Project Management<br/>
                    Portland State University<br/>
                    2014 — 2015<br/>
                    GPA 3.92<br/>
                    <img src={PSU} height="100" width ="100" alt="psu emblem"/>
                </div>

                <div className="box">
                    Bachelor of Science Renewable Energy Engineering<br/>
                    Oregon Institute of Technology<br/>
                    2009 — 2013<br/>
                    GPA 3.87<br/>
                    <img src={OIT} height="100" width ="100" alt="oit emblem"/>
                </div>
            </div>
        </div>
      );
    }
  }