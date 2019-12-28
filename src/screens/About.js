import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>About the Spaceflight News API</h1>
          <p>
            The Spaceflight News API, or SNAPI for short, started because Derk Weijers wanted an app where he could
            easily check the latest spaceflight news. A Linux Engineer by profession, he had some experience with
            programming, but
            never had he developed an app. At the start of 2018, he started following an online course for mobile app
            development (React Native). While doing so, he also
            started planning the app, and soon came to the conclusion that he would first need to build an API as a
            uniform interface to get data into his app.
          </p>
          <h2>Space Launch Now - Go4Liftoff</h2>
          <p>
            As a fan of the <a href="#">Space Launch Now</a> (SLN) app for tracking launches and looking for testers,
            Derk turned to the
            developer of SLN; Caleb Jones.
            <br/>
            Caleb build the SNAPI into a development version the SLN app and started testing, while giving constructive
            feedback.
            <br/>
            After a couple of months and a few updates, the SNAPI went into production in the summer of 2018 in the
            Space Launch Now app.
            <br/><br/>
            Being a great contributor to the Space Launch Now community, and developer of the <a
            href="#">Go4Liftoff</a> app, Jacques Rascagneres also added the SNAPI to his app. Receiving great feedback, Jacques helped improving the API as
            well.
          </p>
          <h2>The start and end of the Spaceflight News App</h2>
          <p>
            Now that the API was up-and-running, Derk began developing the Spaceflight News app for both iOS and Android.
            The app was revised 3 times before it was released in the app stores in the summer of 2019. Being alone in
            development, Derk learned a couple of things:
            <ul>
              <li>Developing apps is something he really likes doing</li>
              <li>Developing an app costs more time than one thinks</li>
            </ul>
            Since there were quite some apps already doing the same (and even better), Derk retired the app to focus on
            the SNAPI, ideas for new apps and other projects.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
