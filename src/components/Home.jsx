import React, {Component} from "react";
import {Button, Container, Jumbotron} from "reactstrap";

import HeaderImage from "./assets/header.jpg";
import LatestNews from "./LatestNews";
import About from "./About";

class Home extends Component {
  selectUrl = () => {
    return (process.env.NODE_ENV) === 'production' ? "https://spaceflightnewsapi.net" : "https://test.spaceflightnewsapi.net"
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Jumbotron style={{ backgroundImage: `url(${HeaderImage})` }}>
          {/*Rendering display-3 on large screens, and display-4 on xs screens.*/}
          <h1 className="display-3 d-none d-sm-block">Spaceflight News API</h1>
          <h1 className="display-4 d-block d-sm-none">Spaceflight News API</h1>
          <p className="lead">Spaceflight News API (SNAPI) enables developers to add the latest spaceflight news to
            their apps.</p>
          <hr className="my-2"/>
          <p>Ready to begin?</p>
          <p className="lead">
            <Button onClick={() => window.open(`${this.selectUrl()}/api/v1`)}
                    color="primary">Go To Docs</Button>
          </p>
            <a href='https://www.patreon.com/bePatron?u=8565105' target="_blank" rel="noopener noreferrer"><img height={35} alt='Become a Patron!' src='https://c5.patreon.com/external/logo/become_a_patron_button.png'/></a>
          </Jumbotron>
        <Container>
          <About/>
          <LatestNews/>
        </Container>
      </div>
    );
  }
}

export default Home;
