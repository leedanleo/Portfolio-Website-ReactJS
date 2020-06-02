import React from "react";
import './style/experience.css';



export default class Experience extends React.Component {
    render() {
      return (
        <div className="experience">
                <div className="experience-head">Work Experience</div>
                <div className="job">
                <div id ="border">
                   Title: Software Engineering Intern<br/><br/>
                   Organization: Hewlett-Packard Inc<br/><br/>
                   Location: SE 164th Ave, Vancouver WA 98683<br/><br/>
                   Duration: June 2019 - September 2019<br/><br/>
                   As a software engineer intern at HP, I worked on automated tests for HP consumer products in the research and development division on the firmware team. My responsibilities included: 

                   <ul>
                       <li>Took ownership of automation tests on HP consumer products with HP's in-house test suite in Python and cohesively programmed tests for the team’s feature set using Git. 
                       </li>
                       <li>Provided project feedback in agile stand-up meetings and demos on consumer printer products. This allowed me to do a dive deep to understand all parts and levels of the project.
                       </li>
                       <li>Developed version-controlled firmware packages in continuous integration and continuous deployment environment. 
                       </li>
                   </ul>

                   Core Technologies: C++, Python, Git, Gerrit, Google Test, Jira, GNU make 
                </div>
                </div>  
                <br></br><br></br>
                <div className="job">
                <div id ="border">
                   Title: Electrical Engineer 1<br/><br/>
                   Organization: Black and Veatch<br/><br/>
                   Location: 5885 Meadows Rd #700, Lake Oswego OR 97035<br/><br/>
                   Duration: February 2016 - March 2017<br/><br/>
                   As an electrical engineer at BV, I worked on an interdisciplinary team of electrical and civil engineers who specialize in electrical substation design. My responsibilities included:


                   <ul>
                       <li>Created full substation design packages that are up to national electric code standards. 
                       </li>
                       <li>Performed safety grounding studies to design safety buffers for personnel.
                       </li>
                       <li>Collecting and verifying project site information.
                       </li>
                       <li>Delegate engineering drawing changes to drafters and technicians.
                       </li>
                   </ul>

                   Core Technologies: Sesbatch, Blue Beam, Microstation
                </div>
                </div>
                <br></br><br></br>
                <div className="job">
                <div id ="border">
                   Title: Researcher<br/><br/>
                   Organization: Hydroresearch Foundation<br/><br/>
                   Location: 8200 Shaffer Pkwy #270585, Littleton CO 80127<br/><br/>
                   Duration: June 2014 - December 2015<br/><br/>
                   As a researcher at HRF, I worked on a standalone project which verified a mathematical model in hydroelectric facility governing ability which is a factor in determining renewable energy penetration in electrical grids. My responsibilities included:


                   <ul>
                        <li>Performed exhaustive literature reviews on Water Start-Up Time.
                        </li>
                        <li>Designed a full hydro model in Autocad to be used in model fabrication for testing.
                        </li>
                        <li>Implemented noise reduction algorithm in instrument input to accurately detect system steady state.
                        </li>
                        <li>Integrated pressure sensors with the model using the Labview system design platform.
                        </li>
                        <li>Fabricated designs using acrylic-based materials and gained familiarity with thermoforming techniques and operation of laser cutters.
                        </li>
                   </ul>

                   Core Technologies: Labview, Autocad
                </div>
                </div>
                <br></br><br></br>
                <div class="job">
                <div id ="border">
                   Title: Graduate Teaching Assistant<br/><br/>
                   Organization: Oregon Insitute Of Technology<br/><br/>
                   Location: 27500 SW Parkway Ave, Wilsonville OR 97070<br/><br/>
                   Duration: September 2013 - June 2014<br/><br/>
                   As a teaching assistant at OIT, I assisted multiple professors in fluid mechanics, electrical power, and power protection courses. My responsibilities included:

                   <ul>
                        <li>Grading assignments turned in by students.
                        </li>
                        <li>Preparing and procturing labs to ensure correct and safe execution of material.
                        </li>
                        <li>Held office hours to assist students in subject material.
                        </li>
                   </ul>

                   Core Technologies: Microsoft Office Suite
                </div>
                </div>
                <br></br><br></br>
                
                <div class="job">
                <div id ="border">
                   Title: Electrical Engineering Intern<br/><br/>
                   Organization: United States Army Corps Of Engineers Hydroelectric Design Center<br/><br/>
                   Location: 333 SW 1st Ave, Portland OR 97204<br/><br/>
                   Duration: August 2013 - October 2014<br/><br/>
                   As an electrical engineer intern at USACE, I worked with electrical engineers specializing in electrical fail-safe designs on hydroelectric facilities. My responsibilities included:

                   <ul>
                        <li>Performing verification of electrical drawings and creating error reports.
                        </li>
                        <li>Did integrity assessment of hydro facilities based on age and operation failure reports.
                        </li>
                        <li>Collecting and verifying project site information.
                        </li>
                   </ul>

                   Core Technologies: Microstation
                </div>
                </div>
            </div>
      );
    }
  }