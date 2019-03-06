import React, { Component } from "react";
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import LatestNewsCard from "./LatestNewsCard";


class LatestNews extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Latest News</h1>
        <LatestNewsCard/>
      </div>
    );
  }
}

export default LatestNews;
