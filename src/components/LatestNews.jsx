import React, { Component } from "react";
import { Col, Row, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import axios from "axios";


class LatestNews extends Component {
  state = {
    news: []
  };

  async componentWillMount() {
    let news = await axios.get("https://test.spaceflightnewsapi.net/api/v1/articles?limit=5");
    this.setState({
      news: news.data.docs
    });
  }

  render() {
    const listItem = this.state.news.map(article => {
      return (
        <ListGroupItem key={article._id} tag="a" href={article.url}>
          <ListGroupItemHeading>{article.title}</ListGroupItemHeading>
          <ListGroupItemText>{article.news_site_long}</ListGroupItemText>
        </ListGroupItem>
      );
    });

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Latest</h1>
        <Row>
          <Col xs={12} sm={6}>
            <ListGroup>
              {listItem}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LatestNews;
