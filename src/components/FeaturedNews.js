import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FeaturedCard from "./cards/FeaturedCard";

const FeaturedNews = props => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get('https://snapi.space/api/v1/articles?featured=true&limit=3');
    setFeatured(response.data.docs);
    setLoading(false);
  };

  if (loading) {
    return (
      <>
      </>
    )
  } else {
    return (
      <Row className="mt-2 justify-content-center" >
        <h1 className="font-weight-bold">Featured</h1>
        <Row>
          {featured.map(article => {
            return (
              <Col className="p-1" sm={12} md={4} >
                <FeaturedCard
                  title={article.title}
                  image_url={article.featured_image}
                  news_site={article.news_site_long}
                  url={article.url}
                />
              </Col>
            )
          })}
        </Row>
      </Row>
    );
  }
};

export default FeaturedNews;
