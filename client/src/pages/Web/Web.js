import React, {Component} from 'react';
import {Container, Header, Item, Image, Divider} from "semantic-ui-react";

export default class About extends Component {

    render() {
        return (
            <Container>

                <Header as="h2" color="blue">Solving Problems with the Web</Header>


                <p>My favorite part of working with web and software is the limitless opportunities to solve problems.</p>

                <p>I've recently refactored my online portfolio a single page ReactJS app. Building a front-end with React comes with a ton of advantages.</p>

                <Item.Group divided>
                    
                    <Item>
                        <a target="new_tab" href="https://github.com/jjdaurora/culture-stack" className="ui small image">
                            <Image src={"/img/culture-stack.png"} />
                        </a>
                        <Item.Content>
                            
                            <Header color="red">
                                Culture Stack
                                <Header sub><a target="new_tab" href="https://github.com/jjdaurora/culture-stack">Github </a> | <a target="new_tab" href="https://culture-stack.herokuapp.com">App</a></Header>
                            </Header>
                            <Item.Description>
                                <p>Culture Stack is a social media app that allows users to share their creative works and get feedback from other artists in their industry. We have created a platform for photographers to upload, categorize, and describe any challenges they are having with a particular technique or process.</p>
                                <p>This app was built on a MERN Stack - using <strong>MongoDB, Express, ReactJS, and NodeJS</strong>. The app is now hosted on Heroku, which does not allow local file storage. because of this, I've set up cloud storage via <strong>Amazon Web Services S3</strong> for all user uploaded content.</p>                            
                            </Item.Description>
                        </Item.Content>
                        
                    </Item>

                    <Item>
                        <a target="new_tab" href="https://github.com/chrishomsey/nyt-search" className="ui small image">
                            <Image src={"/img/nyt-search.png"} />
                        </a>
                        <Item.Content>
                            <Header color="red">
                                NYT Search
                                <Header sub><a target="new_tab" href="https://github.com/chrishomsey/nyt-search">Github </a> | <a target="new_tab" href="https://nyt-search-reactjs.herokuapp.com">App</a></Header>
                            </Header>
                            <Item.Description>
                                <p>This was a simple app built to allow the user to search articles from the <strong>New York Times</strong> and save their favorite articles. This could be useful </p>
                                <p>NYT Search was also built on a MERN Stack - using <strong>MongoDB, Express, ReactJS, and NodeJS</strong>. It used the <strong>New York Times API</strong> to grab the articles based on the user's criteria.</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>

                    <Item>
                        <a target="new_tab" href="https://github.com/chrishomsey/me-hungry" className="ui small image">
                            <Image src={"/img/me-hungry.png"} />
                        </a>
                        <Item.Content>
                            <Header color="red">
                                MeHungry
                                <Header sub><a target="new_tab" href="https://github.com/chrishomsey/me-hungry">Github </a> | <a target="new_tab" href="http://chrishomsey.github.io/me-hungry">App</a></Header>
                            </Header>
                            <Item.Description>
                                <p>MeHungry is a small project that I worked on with a partner in late 2017. The idea was to build an app that suggests local restaraunts, cafés, and bars to the user based on their current mood and preferences. JJ worked on the front-end design while I worked on the API calls and javascript logic.</p>
                                <p>As silly as the idea seems, I learned a ton about the <strong>Google Maps and Google Places API</strong>, as well as javascript callbacks. We used <strong>Firebase</strong> to store previous seach parameters, which allows the user to recall their previous search results the next time they visit the page.</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>

                </Item.Group>

                <Divider hidden />
                <Divider hidden />

            </Container>
        )
    }
}