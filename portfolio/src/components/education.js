import React from "react";
import './style/education.css';



export default class Education extends React.Component {
    render() {
      return (
        <div className="education">
        <div class="education-head">Education</div>

            <div class="container">
                <div class="box">
                    <div class="grid-container">Master of Science Computer Science</div>
                    <div class="grid-container">Portland State University</div>
                    <div class="grid-container">2017 — 2020</div>
                    <div class="grid-container">GPA 3.68</div>

                </div>

                <div class="box">
                    <div class="grid-container">Master of Science Renewable Energy Engineering</div>
                    <div class="grid-container">Oregon Institute of Technology</div>
                    <div class="grid-container">2013—2015</div>
                    <div class="grid-container">GPA 3.67</div>
                </div>

                <div class="box">
                    <div class="grid-container">Master's Certification in Project Management</div>
                    <div class="grid-container">Portland State University</div>
                    <div class="grid-container">2014—2015</div>
                    <div class="grid-container">GPA 3.92</div>
                </div>

                <div class="box">
                    <div class="grid-container">Bachelor of Science Renewable Energy Engineering</div>
                    <div class="grid-container">Oregon Institute of Technology</div>
                    <div class="grid-container">2009—2013</div>
                    <div class="grid-container">GPA 3.87</div>
                </div>
            </div>
        </div>
      );
    }
  }