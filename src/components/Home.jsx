import React, {Component} from "react";
import {Button, Container, Jumbotron} from "reactstrap";

import HeaderImage from "./assets/header.jpg";
import LatestNews from "./LatestNews";

class Home extends Component {
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
            <Button onClick={() => window.open('https://test.spaceflightnewsapi.net/api/v1')}
                    color="primary">Go To Docs</Button>
          </p>
        </Jumbotron>
        <Container>
          <LatestNews/>
        </Container>
      </div>
    );
  }
}

export default Home;
