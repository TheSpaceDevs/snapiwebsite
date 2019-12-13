import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {AppCard} from "../components";
import firebase from "../firebase";

const db = firebase.firestore();

export default function Apps() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    db.collection("apps").get().then((querySnapshot) => {
      querySnapshot.forEach((app) => {
        setApps((oldArray) => [...oldArray, app.data()])
      })
    });
  }, []);

  return (
    <Container>
      {console.log(apps)}
      <Row>
        {apps.map((app => {
          return (
            <Col lg={4} sm={6} key={app.name} >
              <AppCard app={app}
              />
            </Col>
          )
        }))}
      </Row>
    </Container>
  )
}
