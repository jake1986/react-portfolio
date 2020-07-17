import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://pickaface.net/gallery/avatar/20120415_085928_2716_blond.png" alt="my-photo" style={{ height: '200px' }} />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Jake Rhoads</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                        <p>I am a Full-Stack web developer based out of Richmond, VA. I just recently completed a coding bootcamp at University of Richmond</p>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                        <h5>Address</h5>
                        <p>2407 Pineway Dr. Richmond, VA 23225</p>
                        <h5>Phone</h5>
                        <p>(804)-382-1005</p>
                        <h5>E-mail</h5>
                        <p>jake.rhoads@gmail.com</p>

                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2020}
                            endYear={2020}
                            schoolName={"University of Richmond Coding BootCamp (via Trilogy)"}
                            schoolDescription={"Located in Richmond, VA"}
                        />
                        <Education
                            startYear={2010}
                            endYear={2013}
                            schoolName={"Virginia Commonwealth University"}
                            schoolDescription={"Located in Richmond, VA"}
                        />
                        <Education
                            startYear={2005}
                            endYear={2009}
                            schoolName={"James Madison University"}
                            schoolDescription={"Located in Harrisonburg, VA"}
                        />
                        <hr style={{ borderTop: "3px solid #e22947" }} />

                        <h3>Experience</h3>
                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName={"Spanish Teacher @ Liberty Middle School"}
                            jobDescription={"Located in Ashland, VA"}
                        />
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName={"Spanish Teacher @ Binford Middle School"}
                            jobDescription={"Located in Richmond, VA"}
                        />


                        <hr style={{ borderTop: "3px solid #e22947" }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript/jQuery"
                            progress={75} />
                        <Skills
                            skill="HTML/CSS"
                            progress={75} />
                        <Skills
                            skill="React"
                            progress={25} />
                        <Skills
                            skill="MongoDBt"
                            progress={50} />
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;