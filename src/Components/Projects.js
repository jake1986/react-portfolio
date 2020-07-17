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
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover" }}>React Project #1 </CardTitle>
                        <CardText>
                            This is a description of my 1st project for REACT
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover" }}>React Project #2 </CardTitle>
                        <CardText>
                            This is a description of my 2nd project for REACT
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover" }}>React Project #3 </CardTitle>
                        <CardText>
                            This is a description of my 3rd project for REACT
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
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
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png) center / cover" }}>Mongo/MySQL Project #1 </CardTitle>
                        <CardText>
                            This is a description of my 1st project for MongoDB/MySQL
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png) center / cover" }}>Mongo/MySQL Project #2 </CardTitle>
                        <CardText>
                            This is a description of my 2nd project for MongoDB/SQL
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "green", height: "176px", background: "url(https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png) center / cover" }}>Mongo/MySQL Project #3 </CardTitle>
                        <CardText>
                            This is a description of my 3rd project for MongoDB/MySQL
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
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
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.kindpng.com/picc/m/78-789631_html-css-javascript-icons-hd-png-download.png) center / cover" }}>JavaScript Project #1 </CardTitle>
                        <CardText>
                            This is a description of my 1st project for JavaScript
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.kindpng.com/picc/m/78-789631_html-css-javascript-icons-hd-png-download.png) center / cover" }}>JavaScript Project #2 </CardTitle>
                        <CardText>
                            This is a description of my 2nd project for JavaScript
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: "black", height: "176px", background: "url(https://www.kindpng.com/picc/m/78-789631_html-css-javascript-icons-hd-png-download.png) center / cover" }}>JavaScript Project #3 </CardTitle>
                        <CardText>
                            This is a description of my 3rd project for JavaScript
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
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