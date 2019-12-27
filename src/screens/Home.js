import React from "react";
import Container from "react-bootstrap/Container";

import { LatestNewsComponent, FeaturedNewsComponent } from "../components";

function Home(props) {
  return (
    <Container>
      <FeaturedNewsComponent/>
      <hr />
      <LatestNewsComponent />
    </Container>
  )
}

export default Home;
