import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Spaceflight News API</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">News</Nav.Link>
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
          <Nav.Link as={Link} to="/apps">Apps</Nav.Link>
          {/*<Nav.Link as={Link} to="/info">Info</Nav.Link>*/}
        </Nav>
        <Nav>
          <NavDropdown title="Connect" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://discord.gg/AmfkJdA" target='_blank noopener noreferrer'>Discord</NavDropdown.Item>
            <NavDropdown.Item href="https://www.reddit.com/r/snapi/" target='_blank noopener noreferrer'>Reddit</NavDropdown.Item>
            <NavDropdown.Item href="https://twitter.com/the_snapi" target='_blank noopener noreferrer'>Twitter</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://spaceflightnewsapi.net/api/v1/" target='_blank noopener noreferrer' >API Docs</Nav.Link>
          <Nav.Link href="https://discordapp.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D620237184842072074%26scope%3Dbot%26permissions%3D2048" target='_blank noopener noreferrer' >Discord Bot</Nav.Link>
          <Nav.Link href="https://www.patreon.com/bePatron?u=8565105" target='_blank noopener noreferrer' >Patreon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
