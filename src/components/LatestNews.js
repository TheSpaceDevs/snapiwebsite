import React, {useState, useEffect} from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {NewsCard} from "../components";

function LatestNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      const results = await axios.get(
        "https://spaceflightnewsapi.net/api/v1/articles?limit=8"
      );
      setArticles(results.data.docs);
    }

    getData();
  }, []);

  return (
    <Container>
      <Row>
        <h1>News</h1>
      </Row>
      <Row>
        {articles.map(article => {
          return (
            <Col key={article._id} style={styles.colStyle}>
              <NewsCard
                title={article.title}
                site={article.news_site_long}
                url={article.url}
                date={article.published_date}
                image={article.featured_image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

const styles = {
  colStyle: {
    padding: 0,
    margin: 5
  }
};


export default LatestNews;
