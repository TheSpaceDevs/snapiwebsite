import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {AppCard, Loading} from "../components";
import firebase from "../firebase";
import {ColStyle} from "../styles";

const db = firebase.firestore();

export default function Apps() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    db.collection("apps").get().then((querySnapshot) => {
      setLoading(false)
      querySnapshot.forEach((app) => {
        setApps((oldArray) => [...oldArray, app.data()])
      })
    });
  };

  if (loading) {
    return (
      <Container>
        <Row>
          <Loading/>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container>
        <Row>
          {apps.map((app => {
            return (
              <Col lg={4} sm={6} key={app.name} style={ColStyle} >
                <AppCard app={app}
                />
              </Col>
            )
          }))}
        </Row>
      </Container>
    )
  }
}
