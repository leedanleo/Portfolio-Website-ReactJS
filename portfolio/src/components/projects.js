import React from "react";
import './style/projects.css';



export default class Projects extends React.Component {
    render() {
      return (
        <div className="projects">
            <div className="project-head">Projects</div>
            <div id="category">Machine Learning & Artificial Intelligence<br></br><br></br></div>
            <div className="machine-learning">
            
                <div id="Work">
                    Title: Loan Default Predictor <br></br><br></br>
                    Duration: October 2019 - December 2019 <br></br><br></br>
                    Description: I utilized two classification machine learning algorithms to classify based on 24 attributes 
                                if a person were to default on their credit card statements. The two classification methods used 
                                was a deep learning neural network and Naïve Bayes theorem. The deep learning neural network was 
                                able to predict at an accuracy of 85 percent without information on salary and was restricted 
                                to one geographical region. While the Naïve Bayes theorem had an accuracy of 75 percent.  <br></br><br></br>
                                
                    Core Technology: Python, Numpy, Pycharm, CSV, Excel <br></br><br></br>
                    Keywords: Machine Learning, Neural Network, Finance <br></br>
                </div>
            
            
            
            </div>

            <div id="category">Full Stack<br></br><br></br></div>
            <div className="full-stack">

                <div id="Work">
                    Title: Sport Spots Full Web Application<br></br><br></br>
                    Duration: February 2020 - April 2020<br></br><br></br>
                    Description: This is a website that is built on React to be able to show people in the Portland area of places to play amateur sports. Currently the
                                site has volleyball, basketball, and tennis. This application uses the google maps api to set locations in the area. The rendering for
                                application is chosen based on sport and day of the week the gyms/locations are available that week. This application is designed in hopes that all
                                the sports in the portland area can be consolidated on one web application.<br></br><br></br>
                    Core Technologies: Bootstrap, CSS, HTML, Javascript, JSX, React, Express, Google Maps API<br></br><br></br>
                    Keywords: Full Stack, Web Development, Deployment, Sports, Google Maps API, React.js<br></br><br></br>
                </div>

                <div id="Work">
                    Title: Web Portfolio<br></br><br></br>
                    Duration: January 2020 - Present<br></br><br></br>
                    Description: I developed a portfolio website that showcases my education, work experience, art gallery, projects, and activities. 
                                The website utilizes bootstrap as the front-end framework. The website is deployed by github's free website service. The website is used as a learning to increase my
                                my abilities in using CSS, HTML, and Javascript.<br></br><br></br>
                    Core Technologies: Bootstrap, CSS, HTML, Javascript, ReactJs<br></br><br></br>
                    Keywords: Full Stack, Web Development, Deployment<br></br><br></br>
                </div>

                <div id="Work">
                    Title: Web Recipe Book<br></br><br></br>
                    Duration: June 2019 - August 2019<br></br><br></br>
                    Description: I developed a front-end application of a recipe book that can store recipes by uploading
                                images of the recipe and read out the full recipe to the vision impaired. The application
                                utilizes google cloud machine learning APIs in vision and text to speech and was deployed to
                                the cloud using the google cloud platform.<br></br><br></br>
                    Core Technologies: Python, HTML, Javascript, CSS, Unix, Flask, Gunicorn, Google Cloud, Git<br></br><br></br>
                    Keywords: Machine Learning, Full Stack, Food, Image To Text, Text To Speech<br></br>
                </div>
            
            </div>

            <div id="category">Databases<br></br><br></br></div>
            <div className="databases">

                <div id="Work">  
                    Title: Database System Analysis Benchmark <br></br><br></br>
                    Duration: April 2019 - June 2019 <br></br><br></br>
                    Description: I have developed and deployed a database on the Microsoft Azure SQL database system.
                                The goal of the project was to expand my experience utilizing cloud databases as well as 
                                test the speed and quality of the database utilizing the Wisconsin benchmark. The input 
                                data was produced using python and was fed into the database to test the benchmarks at
                                multiple data loads against local Postgres. The test was done by querying heavy compute 
                                data stores such as full merge sort queries. <br></br><br></br>
                    Core Technologies: Python, SQL, Azure, Git, Postgres, Excel <br></br><br></br>
                    Keywords: Benchmark, Database, Typescript <br></br><br></br>
                </div>

                <div id="Work">  
                    Title: Hockey Database <br></br><br></br>
                    Duration: October 2018 - December 2018 <br></br><br></br>
                    Description: I have designed and deployed a database on Postgres which would query questions most
                    likely asked by hockey enthusiasts such as goals scored, goals blocked, wins, or penalty box times
                    for players. To respond to faster reads and loads for certain queries indexing was done on keys 
                    that are most likely to be used to answer common questions in hockey. <br></br><br></br>
                    Core Technologies: Python, PHP, Postgres, Excel <br></br><br></br>
                    Keywords: Benchmark, Database, Typescript
                </div>

            </div>
            <div id="category">Networks and Systems<br></br><br></br></div>
            <div className="network">
                <div id="Work">  
                    Title: IRC-style client and server system <br></br><br></br>
                    Duration: April 2019 - June 2019 <br></br><br></br>
                    Description: I have developed and deployed an IRC program that allows multiple users to chat with
                                each other in single or multiple rooms, as well as provide system administrative privileges.
                                This project was used to introduce and used to gain experience with sockets. Additionally
                                an internet-draft that fully conforms to BCP 78 and BCP 79.<br></br><br></br>
                    Core Technologies: Python, Git, Socket<br></br><br></br>
                    Keywords: networking protocol, BCP 78, BCP 79, chat room, multi-thread<br></br>
                </div>
            </div>
        </div>
      );
    }
    
}