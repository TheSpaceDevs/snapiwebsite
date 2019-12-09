import React, {useState, useEffect} from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {ReportsCard} from "../components";

function LatestReports() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      const results = await axios.get(
        `https://spaceflightnewsapi.net/api/v1/reports?limit=8`
      );
      setArticles(results.data.docs);
    }

    getData();
  }, []);

  return (
    <Container>
      <Row>
        {articles.map(article => {
          return (
            <Col sm={3} key={article._id} style={styles.colStyle}>
              <ReportsCard
                title={article.title}
                site={article.news_site_long}
                url={article.url}
                date={article.published_date}
                summary={article.summary}
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
    padding: 3,
    marginTop: 5
  }
};


export default LatestReports;
