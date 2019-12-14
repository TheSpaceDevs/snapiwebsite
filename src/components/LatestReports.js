import React, {useState, useEffect} from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {ReportsCard} from "../components";
import {ColStyle} from "../styles";

function LatestReports() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      const results = await axios.get(
        `https://spaceflightnewsapi.net/api/v1/reports?limit=6`
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
            <Col xl={4} lg={4} sm={6} key={article._id} style={ColStyle}>
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


export default LatestReports;
