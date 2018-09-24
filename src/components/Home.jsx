import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Home.css';

    class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h2>Spaceflight News API</h2>
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
                                <ListGroupItem header="v0.5.0 beta (TBD)" bsStyle="warning">
                                    <p>> Add pagination</p>
                                </ListGroupItem>
                                <ListGroupItem header="v0.4.0 beta (17-09-2018)" bsStyle="success">
                                    <p>> Now possible to search on the same key multiple times</p>
                                </ListGroupItem>
                                <ListGroupItem header="v0.3.0 beta (12-09-2018)" bsStyle="success">
                                    <p>> 'id' tag removed from the response</p>
                                    <p>> Added 'news_site_long' to the model</p>
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
