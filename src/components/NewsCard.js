import React from "react";
import Card from "react-bootstrap/Card";

export default function NewsCard(props) {
  const { title, site, url } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{site}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href={url}>Read more...</Card.Link>
      </Card.Body>
    </Card>
  );
}
