import React, {Component} from 'react';
import {Panel} from "react-bootstrap";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div>
                <Panel>
                    <Panel.Footer>© Spaceflight News API 2018</Panel.Footer>
                </Panel>;
            </div>
        );
    }
}

export default Footer;