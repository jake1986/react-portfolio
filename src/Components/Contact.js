import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jake Rhoads</h2>
                        <img src="https://pickaface.net/gallery/avatar/20120415_085928_2716_blond.png" alt="my-photo" style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>This is my contact page that contains info about how to reach me. This is my contact page that contains info about how to reach me</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">

                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                      (804)-382-1005
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                      jake.rhoads@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                     jake.buchanan.rhoads
                                    </ListItemContent>
                                </ListItem>
                            </List>

                        </div>

                    </Cell>
                </Grid>
            </ div>
        )
    }
}

export default Contact;