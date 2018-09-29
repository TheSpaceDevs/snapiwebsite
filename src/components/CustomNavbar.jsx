import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Spaceflight News API</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <MenuItem href="https://spaceflight-news-api.readthedocs.io/" target="_blank">
                            API Documentation
                        </MenuItem>
                        <NavDropdown eventKey={3} title="Social" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="https://discord.gg/9FaQdny">Discord</MenuItem>
                            {/*<MenuItem eventKey={3.2}>Reddit</MenuItem>*/}
                            <MenuItem eventKey={3.3} href="https://twitter.com/the_snapi">Twitter</MenuItem>
                        </NavDropdown>
                        <MenuItem href="https://github.com/spaceflightnewsapi/" target="_blank">
                            GitHub
                        </MenuItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
