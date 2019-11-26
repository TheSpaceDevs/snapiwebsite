import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';

import { NewsCard } from "../components";

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
    <Container style={styles.container}>
      <Container>
        <h1>News</h1>
      </Container>
        {articles.map(article => {
          return (
            <NewsCard
              key={article._id}
              title={article.title}
              site={article.news_site_long}
              url={article.url}
              date={article.published_date}
            />
          );
        })}
    </Container >
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}


export default LatestNews;
