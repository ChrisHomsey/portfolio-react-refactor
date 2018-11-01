import React, {Component} from 'react';
import {Transition, Grid, Container, Header, Divider, Image} from 'semantic-ui-react';
import ResumeModal from '../../components/ResumeModal';

export default class About extends Component {

    render() {
        return (
        <Transition animation="pulse" duration="2000ms" visible="false">
           <Container>
                <Grid>
                    <Grid.Row>
                        <Container justified text>

                            <h2 className="ui blue header">
                                I am a seasoned problem-solver that explores the world of tech to create solutions that ease the friction of every day business.
                                <div className="ui divider"></div>
                            </h2>
                    
                            <p>After over 5 years of experience in Information Technology and assisting others to adopt new processes, I’ve found that the right tools and attitude can create massive value for clients and colleagues.</p>
                            
                            <Header as="h3" color="red">Full Stack Engineering</Header>

                            <p>Currently, I see NodeJS, Express, React, and MongoDB/MySQL as an amazing stack to build powerful web applications. My experience in IT roles has given me insight into leveraging technologies like AWS EC2 instances and S3 storage in DevOps situations.</p>
                            
                            <p>I'm always looking to advance my skillset and share tech and business knowledge. I'm currently looking to join a productive team that could gain value from my transferable skills!</p>

                            <Header as="h2" textAlign="center"> You can reach me at:</Header>
                            
                            <Divider hidden />
                            <Grid>
                                <Grid.Row columns={3}>
                                    <Grid.Column/>
                                    <Grid.Column textAlign="center">
                                        <a href="emailto:chomsey@pm.me">chomsey@pm.me</a> 
                                        <Divider horizontal>
                                            OR
                                        </Divider>
                                        <a href="tel:2168207615">216.688.8713</a>
                                    </Grid.Column>
                                    <Grid.Column/>
                                </Grid.Row>
                            </Grid>


                            <Divider hidden />

                        </Container>
                    </Grid.Row>


                    <Grid.Row color="blue" inverted>
                        <Container justified text>
                            
                            <Divider hidden />

                            <Header as="h2" inverted>
                                Skillset and Tools
                                <ResumeModal/>
                                
                            </Header>

                            <p>My biggest asset as a developer is <strong>resourcefulness</strong>. There are a million ways to solve a problem, and maybe my first idea isn't the best. I'm always willing to research, read documentation, and also see if the problem has been solved before. My love of the solutions process doesn't trump my drive to be effective and industrious.</p>

                            <p>I'm proficient in:</p>
                            <ul>
                                <li>Git CLI & Github Collaboration</li>
                                <li>HTML, CSS, Javascript, JS ES6, JSX</li>
                                <li>UI design- also using Frontend Libraries like Bootstrap & Semantic UI</li>
                                <li>Refactoring HTML into JSX React Web Components & Pages</li>
                                <li>Creating NodeJS & Express servers and deploying to AWS EC2 or Heroku</li>
                                <li>Building APIs to serve that all-important Data!</li>
                                <li>Sequelize & Mongoose ORMs for CRUD functions with MySQL & MongoDB databases.</li>
                            </ul>
                            
                            <Divider hidden />
                            
                        </Container>
                    </Grid.Row>

                    <Grid.Row>
                        <Container justified>
                            
                            <Divider hidden />
                            
                            <Header as="h2" textAlign="center">Tools I've Been Using:</Header>

                            <Divider hidden />

                            <Grid centered columns={6} doubling>
                            
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="HTML5" data-inverted=""><Image src="/img/logos/html.png" alt="HTML5" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="CSS3" data-inverted=""><Image src="/img/logos/css.png" alt="CSS3" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="JavaScript (ES5 & ES6)" data-inverted=""><Image src="/img/logos/javascript.png" alt="JavaScript" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="React Web" data-inverted=""><Image src="/img/logos/react.png" alt="React Web" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="NodeJS" data-inverted=""><Image src="/img/logos/node.png" alt="NodeJS" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="ExpressJS" data-inverted=""><Image src="/img/logos/express.png" alt="ExpressJS" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="Mongoose" data-inverted=""><Image src="/img/logos/mongoose.png" alt="Mongoose" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="Git" data-inverted=""><Image src="/img/logos/git.png" alt="Git" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="npm" data-inverted=""><Image src="/img/logos/npm.png" alt="npm" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="Yarn" data-inverted=""><Image src="/img/logos/yarn.png" alt="Yarn" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="Mocha" data-inverted=""><Image src="/img/logos/mocha.png" alt="Mocha" className="vendorlogo"/></a></div>
                                <div className="column"><a href='' data-position="bottom center" data-tooltip="ESLint" data-inverted=""><Image src="/img/logos/eslint.png" alt="ESLint" className="vendorlogo"/></a></div>
                                
                            
                            </Grid>

                            <Divider hidden />
                            <Divider hidden />
                            <Divider hidden />

                        </Container>
                    </Grid.Row>
                </Grid>
            </Container>
        </Transition>
        )
    }
}