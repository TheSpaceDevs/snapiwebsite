import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import axios from 'axios';


class LatestNewsCard extends Component {
  renderCard = async () => {
    const articles = await axios.get(`https://test.spaceflightnewsapi.net/api/v1/articles?limit=3&page=1`)
    console.log(articles)
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Row>
          <Col xs={12} sm={4}>
            <Card>
              <CardImg top width="100%"
                       src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                       alt="Card image cap"/>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                  content.</CardText>
                <Button onClick={() => this.renderCard()}>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LatestNewsCard;
