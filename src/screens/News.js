import React from "react";
import Container from "react-bootstrap/Container";

import { LatestNews, FeaturedNews } from "../components";

function News(props) {
  return (
    <Container>
      <FeaturedNews/>
      <hr />
      <LatestNews />
    </Container>
  )
}

export default News;
