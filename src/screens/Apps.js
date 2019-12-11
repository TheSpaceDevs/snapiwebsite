import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {AppCard} from "../components";
import firebase from "../firebase";
import axios from "axios";

const db = firebase.firestore();

export default function Apps() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    db.collection("apps").get().then((querySnapshot) => {
      querySnapshot.forEach((app) => {
        setApps(app.data())
      })
    });
  }, []);

  return (
    <Container>
      {console.log(apps)}
      <Row>
        <Col sm={4} >
          <AppCard/>
        </Col>
      </Row>
    </Container>
  )
}
