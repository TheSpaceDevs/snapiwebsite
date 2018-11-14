import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody, CardHeader,
  Col,
  Container,
  Jumbotron,
  Row
} from "reactstrap";


class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Jumbotron>
          <h1 className="display-3">Spaceflight News API</h1>
          <p className="lead">Spaceflight News API (SNAPI) enables developers to add the latest spaceflight news to
            their apps.</p>
          <hr className="my-2"/>
          <p>Ready to begin?</p>
          <p className="lead">
            <Button color="primary">Go To Docs</Button>
          </p>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs="4">
              <Card className="card text-white bg-secondary mb-3">
                <CardHeader tag="h4">Latest News</CardHeader>
                <CardBody>
                  Add spaceflight related news to your websites and apps.
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card className="card text-white bg-secondary mb-3">
                <CardHeader tag="h4">Blogs</CardHeader>
                <CardBody>
                  There are many great space related blogs. Add them easily!
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card className="card text-white bg-secondary mb-3">
                <CardHeader tag="h4">ISS</CardHeader>
                <CardBody>
                  Want to get the latest ISS data? check the /iss endpoint.
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="card text-white bg-secondary mb-3">
                <CardHeader tag="h4">Manned Flights</CardHeader>
                <CardBody>
                  Retrieve data about all manned spaceflights <Badge color="info" >WIP</Badge>.
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="card text-white bg-secondary mb-3">
                <CardHeader tag="h4">Astronauts</CardHeader>
                <CardBody>
                  Want to know more about astronauts? /astronauts <Badge color="info" >WIP</Badge>.
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