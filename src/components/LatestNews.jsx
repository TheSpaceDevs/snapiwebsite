import React, { Component } from "react";
import { Col, Row, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import axios from "axios";


class LatestNews extends Component {
  state = {
    news: [],
    blogs: []
  };

  async componentWillMount() {
    let news = await axios.get("https://test.spaceflightnewsapi.net/api/v1/articles?limit=5");
    this.setState({
      news: news.data.docs
    });

    let blogs = await axios.get("https://test.spaceflightnewsapi.net/api/v1/blogs?limit=5");
    this.setState({
      blogs: blogs.data.docs
    });
  }

  render() {
    const listArticles = this.state.news.map(article => {
      return (
        <ListGroupItem style={{ color: "#2C3E50" }} key={article._id} tag="a" href={article.url}>
          <ListGroupItemHeading>{article.title}</ListGroupItemHeading>
          <ListGroupItemText>{article.news_site_long}</ListGroupItemText>
        </ListGroupItem>
      );
    });

    const listBlogs = this.state.blogs.map(blog => {
      return (
        <ListGroupItem style={{ color: "#2C3E50" }} key={blog._id} tag="a" href={blog.url}>
          <ListGroupItemHeading>{blog.title}</ListGroupItemHeading>
          <ListGroupItemText>{blog.news_site_long}</ListGroupItemText>
        </ListGroupItem>
      );
    });

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Latest</h1>
        <Row>
          <Col xs={12} sm={6}>
            <h2>Articles</h2>
            <ListGroup flush>
              {listArticles}
            </ListGroup>
          </Col>
          <Col xs={12} sm={6}>
            <h2>Blogs</h2>
            <ListGroup flush>
              {listBlogs}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LatestNews;
