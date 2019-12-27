import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";

const Loading = () => {
  return (
    <Col className="col-12 text-center mt-4">
      <Spinner animation="border"/>
    </Col>
  );
};

export default Loading;
