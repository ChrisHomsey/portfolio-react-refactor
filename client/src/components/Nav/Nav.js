import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Container, Grid, Rail, Sticky, Menu, Divider, Header, Image} from "semantic-ui-react";

export default class Nav extends Component {

    state = {}

    handleContextRef = contextRef => this.setState({contextRef})

    render() {

        const { contextRef } = this.state;

        return (
            <div>

            <Container fluid id="top-section">
                
                <Grid centered columns={2}>

                    <Grid.Column>
                        <div ref={this.handleContextRef}>

                            <Divider hidden />
                            
                            <Image src={"/img/bio.jpg"} alt="" id="#top-image" circular centered size="medium" />
                            
                            <Header as="h1" textAlign="center">Chris Homsey
                                <Header sub><span>Digital Portfolio</span></Header>
                            </Header>

                            <Rail position="right">

                                <Sticky context={contextRef}>
                                    <Menu secondary id="nav-sticky">
                                        
                                        <a href="mailto:chomsey@protonmail.com" className="item"><button className="ui circular red icon button" data-tooltip="Email me at chomsey@pm.me" data-position="bottom center" data-inverted=""><i className="mail icon"></i></button> </a>
                                        <a href="https://github.com/ChrisHomsey" target="new_tab" className="item"><button className="ui circular black icon button" data-tooltip="Find me on GitHub!" data-position="bottom right" data-inverted=""><i className="github icon"></i></button> </a>
                                        <a href="https://www.linkedin.com/in/chris-homsey/" target="new_tab" className="item"><button className="ui circular linkedin icon button" data-tooltip="LinkedIn: chrishomsey" data-position="bottom right" data-inverted=""><i className="linkedin icon"></i></button> </a>
                                        <a href="https://www.instagram.com/homseydrums" target="new_tab" className="item"><button className="ui circular instagram icon button" data-tooltip="Instagram: @homseydrums" data-position="bottom right" data-inverted=""><i className="instagram icon"></i></button> </a>
                                    
                                    </Menu>
                                </Sticky>

                            </Rail>

                        </div>
                    </Grid.Column>

                </Grid>

            </Container>

            <Grid textAlign="center" columns={1}>
                <Grid.Row className="ui mobile only">
                    <Menu secondary>
                        <a href="tel:2166888713" className="item"><button className="ui circular green icon button"><i className="phone icon"></i></button> </a>
                        <a href="mailto:chomsey@protonmail.com" className="item"><button className="ui circular red icon button"><i className="mail icon"></i></button> </a>
                        <a href="https://github.com/ChrisHomsey" target="new_tab" className="item"><button className="ui circular black icon button"><i className="github icon"></i></button> </a>
                        <a href="https://www.linkedin.com/in/chris-homsey/" target="new_tab" className="item"><button className="ui circular linkedin icon button"><i className="linkedin icon"></i></button> </a>
                        <a href="https://www.instagram.com/homseydrums" target="new_tab" className="item"><button className="ui circular instagram icon button"><i className="instagram icon"></i></button> </a>
                    </Menu>
                </Grid.Row>
            </Grid>

            <Divider horizontal id="bio-menu">
                <NavLink exact to="/web" as="Button" id="dev-button" activeClassName="small" className="tiny circular ui basic button"><i className="code icon"></i> Web</NavLink>
                <NavLink exact to="/" as="Button" id="about-button" activeClassName="small" className="tiny circular ui basic button"><i className="user icon"></i> About Me</NavLink>
                <NavLink exact to="/photography" as="Button" id="photography-button" activeClassName="small" className="tiny circular ui basic button"><i className="camera icon"></i> Photo</NavLink>
            </Divider>

            <Divider hidden/>
            
        </div>
        )
    }
}

