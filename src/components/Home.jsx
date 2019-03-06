import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row} from "reactstrap";

import HeaderImage from "./assets/header.jpg";

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
            <Button onClick={() => window.open("https://spaceflight-news-api.readthedocs.io/en/latest/", "_blank")}
                    color="primary">Go To Docs</Button>
          </p>
        </Jumbotron>
        <Container>
          <h1>Features</h1>
          <Row>
            <Col xs={12} sm={6}>
              <Card className="card text-white bg-secondary mb-3">
                <CardHeader tag="h4">Articles</CardHeader>
                <CardBody>
                  Add spaceflight related news to your websites and apps.
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="card text-white bg-secondary mb-3">
                <CardHeader tag="h4">Blogs</CardHeader>
                <CardBody>
                  There are many great space related blogs. Add them easily!
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
