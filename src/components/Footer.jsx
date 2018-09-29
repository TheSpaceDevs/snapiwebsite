import React, {Component} from 'react';
import {Well} from "react-bootstrap";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <Well bsSize="small">© 2018 Spaceflight News API - Easily hosted on <a style={{color:'black'}} href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a></Well>
        );
    }
}

export default Footer;
