import React, {Component} from 'react';
import {Well} from "react-bootstrap";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <Well bsSize="small">© 2018 Spaceflight News API - Securely hosted with <a style={{color:'black'}} href="https://caddyserver.com/" target="_blank" rel="noopener noreferrer">Caddy</a></Well>
        );
    }
}

export default Footer;
