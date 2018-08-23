import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Spaceflight News API</h2>
                    <p>Spaceflight News API (SNAPI) enables developers to add the latest spaceflight news to their apps.
                    </p>
                    <p>Ready to begin?</p>
                    <Link to="/apidocs">
                        <Button bsStyle="primary">API Docs</Button>
                    </Link>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <a href="https://discord.gg/9FaQdny" target="_blank">
                        <Col xs={12} sm={4} className="social-wrapper hvr-grow">
                            <Image src="assets/Discord-Logo-Color.svg" className="social-pic"/>
                            <h3>Discord</h3>
                            <p>Need help, have a question, or just want to chat? Come join us on Discord!</p>
                        </Col>
                    </a>
                    <a href="#" target="_blank">
                    <Col xs={12} sm={4} className="social-wrapper hvr-grow">
                        <Image src="assets/reddit.png" className="social-pic"/>
                        <h3>Reddit</h3>
                        <p>Want to stay up-to-date with the latest news about releases and upcoming features?
                            Subscribe to our sub-reddit!
                        </p>
                    </Col>
                    </a>
                    <a href="https://twitter.com/the_snapi" target="_blank">
                    <Col xs={12} sm={4} className="social-wrapper hvr-grow">
                        <Image src="assets/Twitter_Logo_Blue.svg" className="social-pic"/>
                            <h3>Twitter</h3>
                            <p>Follow us on Twitter to stay up-to-date!</p>
                    </Col>
                    </a>
                </Row>
            </Grid>
        )
    }
}

export default Home;