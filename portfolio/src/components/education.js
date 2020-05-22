import React from "react";
import './style/education.css';



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
                </div>

                <div className="box">
                    Master of Science Renewable Energy Engineering<br/>
                    Oregon Institute of Technology<br/>
                    2013 — 2015<br/>
                    GPA 3.67<br/>
                </div>

                <div className="box">
                    Master's Certification in Project Management<br/>
                    Portland State University<br/>
                    2014 — 2015<br/>
                    GPA 3.92<br/>
                </div>

                <div className="box">
                    Bachelor of Science Renewable Energy Engineering<br/>
                    Oregon Institute of Technology<br/>
                    2009 — 2013<br/>
                    GPA 3.87<br/>
                </div>
            </div>
        </div>
      );
    }
  }