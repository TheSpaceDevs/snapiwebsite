import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    {/*<h2>Spaceflight News API</h2>*/}
                    <Image src="./assets/SVGlogoWhiteText.png" bsClass="headerImage" />
                    <p style={{color:'white'}} >Spaceflight News API (SNAPI) enables developers to add the latest spaceflight news to their apps.
                    </p>
                    <p style={{color:'white'}}>Ready to begin?</p>
                    <a href="https://spaceflight-news-api.readthedocs.io" target="_blank" rel="noopener noreferrer">
                        <Button bsStyle="primary">API Docs</Button>
                    </a>
                </Jumbotron>
                <Grid>
                    <Row className="show-grid text-center">
                        <a href="https://discord.gg/9FaQdny" target="_blank" rel="noopener noreferrer">
                            <Col xs={12} sm={6} className="social-wrapper hvr-grow">
                                <Image src="assets/Discord-Logo-Color.svg" className="social-pic"/>
                                <h3>Discord</h3>
                                <p>Need help, have a question, or just want to chat? Come join us on Discord!</p>
                            </Col>
                        </a>
                        {/*<a href="#" target="_blank" rel="noopener noreferrer">*/}
                        {/*<Col xs={12} sm={4} className="social-wrapper hvr-grow">*/}
                            {/*<Image src="assets/reddit.png" className="social-pic"/>*/}
                            {/*<h3>Reddit</h3>*/}
                            {/*<p>Want to stay up-to-date with the latest news about releases and upcoming features?*/}
                                {/*Subscribe to our sub-reddit!*/}
                            {/*</p>*/}
                        {/*</Col>*/}
                        {/*</a>*/}
                        <a href="https://twitter.com/the_snapi" target="_blank" rel="noopener noreferrer">
                        <Col xs={12} sm={6} className="social-wrapper hvr-grow">
                            <Image src="assets/Twitter_Logo_Blue.svg" className="social-pic"/>
                                <h3>Twitter</h3>
                                <p>Follow us on Twitter to stay up-to-date!</p>
                        </Col>
                        </a>
                    </Row>
                    <Row className="show-grid text-center">
                        <h2>Latest API Changes</h2>
                        <Col xs={12} sm={12} className="news-wrapper">
                            <ListGroup>
                                <ListGroupItem header="v0.1.0 (31-08-2018)" bsStyle="warning">
                                    <p>> Get a list of the latest articles</p>
                                    <p>> Find articles on title, category and tag</p>
                                    <p>> Find articles on only category or tag</p>
                                    <p>> Find all articles by a news site</p>
                                    <p>> Find article by its ID</p>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Home;
