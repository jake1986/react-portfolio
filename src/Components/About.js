import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='aboutme-grid'>
                    <Cell col={12}>
                        <img className='avatar-img' src='https://pickaface.net/gallery/avatar/20120415_085928_2716_blond.png' />
                    </Cell>
                    <div className='banner-text'>
                        <h1>Full Stack Web-Developer</h1>

                        <hr />

                        <p>HTML/CSS | JavaScript/jQuery | MySQL | MongoDB | NodeJS | React</p>

                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-linkedin-square' aria-hidden="true" />
                            </a>
                            {/* Github*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-github-square' aria-hidden="true" />
                            </a>
                            {/* FreeCodeCamp*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className='fa fa-free-code-camp' aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default About;