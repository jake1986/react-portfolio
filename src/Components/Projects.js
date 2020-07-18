import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover" }}>React Portfolio </CardTitle>
                        <CardText>
                            This is my 1st project for REACT
                    </CardText>
                        <CardActions border>
                            <a href="https://github.com/jake1986/react-portfolio"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover" }}>Google Book Search </CardTitle>
                        <CardText>
                            This is my 2nd project for REACT
                        </CardText>
                        <CardActions border>
                            <a href="/"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover" }}>HOBNOB </CardTitle>
                        <CardText>
                            This is my 3rd project for REACT
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Brewtoga/project2"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png) center / cover" }}>Workout Tracker </CardTitle>
                        <CardText>
                            This is my 1st project for MongoDB/MySQL
                    </CardText>
                        <CardActions border>
                            <a href="https://github.com/jake1986/workout-tracker"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png) center / cover" }}>On/Offline Budget Tracker </CardTitle>
                        <CardText>
                            This is my 2nd project for MongoDB/SQL
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/jake1986/online-offline-budget-tracker"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png) center / cover" }}>Eat-Da-Burger </CardTitle>
                        <CardText>
                            This is my 3rd project for MongoDB/MySQL
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/jake1986/Eat-Da-Burger"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.kindpng.com/picc/m/78-789631_html-css-javascript-icons-hd-png-download.png) center / cover" }}>Day Planner </CardTitle>
                        <CardText>
                            This is my 1st project for JavaScript
                    </CardText>
                        <CardActions border>
                            <a href="https://github.com/jake1986/Day-Planner"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.kindpng.com/picc/m/78-789631_html-css-javascript-icons-hd-png-download.png) center / cover" }}>Weather Dashboard </CardTitle>
                        <CardText>
                            This is my 2nd project for JavaScript
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/jake1986/weather-dashboard2"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.kindpng.com/picc/m/78-789631_html-css-javascript-icons-hd-png-download.png) center / cover" }}>Online Quiz </CardTitle>
                        <CardText>
                            This is my 3rd project for JavaScript
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/jake1986/The-Online-Quiz"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB/MySQL</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div >
        )
    }
}

export default Projects;