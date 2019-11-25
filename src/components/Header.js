import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">Spaceflight News API</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/pricing">API Docs</Nav.Link>
        </Nav>
      </Navbar>
    )
}
