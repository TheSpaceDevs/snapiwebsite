import React, {Component} from 'react';
import {Panel} from "react-bootstrap";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <Panel>
                <Panel.Footer>© Spaceflight News API 2018</Panel.Footer>
            </Panel>
        );
    }
}

export default Footer;