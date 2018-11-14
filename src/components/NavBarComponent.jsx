import React, { Component } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarToggler,
  Collapse
} from "reactstrap";

class NavBarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavbarBrand href="/">Spaceflight News API</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://spaceflight-news-api.readthedocs.io/en/latest/" target="_blank">API
                Documentation</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Social
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://discord.gg/9FaQdny" target="_blank">
                  Discord
                </DropdownItem>
                <DropdownItem href="https://www.reddit.com/r/snapi/" target="_blank">
                  Reddit
                </DropdownItem>
                <DropdownItem href="https://twitter.com/the_snapi" target="_blank">
                  Twitter
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem href="mailto:derk@spaceflightnewsapi.net">
                  E-Mail
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/spaceflightnewsapi" target="_blank">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBarComponent;