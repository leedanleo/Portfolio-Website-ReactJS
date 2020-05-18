import React from "react";
import './style/experience.css';



export default class Experience extends React.Component {
    render() {
      return (
        <div className="experience">
                <div class="experience-head">Work Experience</div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12" id="company-position"> Hewlett-Packard
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="title-position"> Test Automation Software Engineering Intern
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="location-position"> 1115 SE 164th Ave, Vancouver, WA 98683
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="duration-position"> October 2019 - December 2019
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="description-position">
                            As a software engineer intern at HP, I worked on 
                            automated tests for HP consumer products in the research and development 
                            division on the firmware team. My responsibilities included:
                            <ul>
                                <li>Create and perform automation tests on HP consumer products with HP's in-house test suite in Python and cohesively programmed tests for the team’s feature set using Git.</li>                    
                                <li>Provide project feedback in agile stand-up meetings and demos on consumer printer products.</li>
                                <li>Developed version-controlled firmware packages in continuous integration and continuous deployment environment.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="core-technology-position">Core Technologies: C++, Python, Git, Gerrit, Google Test, Jira, GNU make
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-12" id="company-position"> Black and Veatch
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="title-position"> Electrical Engineer
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="location-position"> 5885 Meadows Rd, Lake Oswego, OR 97035
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="duration-position"> February 2016 - March 2017
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="description-position">
                            As an electrical engineer at BV, I worked on an interdisciplinary 
                            team of electrical and civil engineers who specialize 
                            in electrical substation design. My responsibilities included:
                            <ul>                  
                                <li>Created full electrical project packages that adhere to national electrical safety standards.</li>
                                <li>Directed and accurately relayed information to drafting technicians to create precise engineering drawings. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12" id="company-position"> Hydro Research Foundation
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="title-position"> Researcher
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="location-position"> 3124 Elk View Dr, Evergreen, CO 80439
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="duration-position"> June 2014 - December 2016
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12" id="description-position">
                            As a researcher at HRF, I worked on a standalone project which 
                            verified a mathematical model in hydroelectric facility governing ability to
                            increase renewable energy penetration in electrical grids. My responsibilities included:
                            <ul>                  
                            <li>Performed exhaustive literature reviews on water start up time.</li>
                            <li>Designed full hydro model in Autocad to be used in model fabrication for testing.</li>
                            <li>Implemented noise reduction algorithm in instrument input to accurately detect system steady state.</li>
                            <li>Integrated pressure sensors with model using the Labview system design platform.</li>     
                            </ul>
                        </div>
                    </div>
                </div>

        </div>
      );
    }
  }