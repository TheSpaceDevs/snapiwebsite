import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Spaceflight News API</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/apps">Apps</Nav.Link>
          <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://spaceflightnewsapi.net/api/v1/" target='_blank noopener noreferrer' >API Docs</Nav.Link>
          <Nav.Link href="https://spaceflightnewsapi.net/api/v1/" target='_blank noopener noreferrer' >Discord Bot</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
