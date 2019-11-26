import React, { useState, useEffect } from "react";
import axios from "axios";

import { NewsCard } from "../components";

function LatestNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      const results = await axios.get(
        "https://spaceflightnewsapi.net/api/v1/articles?limit=5"
      );
      setArticles(results.data.docs);
    }
    getData();
  }, []);

  return (
    <div style={styles.container}>
      {articles.map(article => {
        return (
          <NewsCard
            key={article._id}
            title={article.title}
            site={article.news_site_long}
            url={article.url}
            image={article.featured_image}
            style={styles.card}
          />
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  }
}


export default LatestNews;
