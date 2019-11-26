import React from "react";
import Card from "react-bootstrap/Card";

function NewsCard(props) {
  const { title, site, url, date } = props;

  return (
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{site}</Card.Subtitle>
        <Card.Link href={url} target='_blank noopener noreferrer'>Read more...</Card.Link>
      </Card.Body>
      <Card.Footer>
        {new Date(date).toLocaleDateString()}
      </Card.Footer>
    </Card>
  );
}

const styles = {
  card: {
    width: "15rem",
    height: "18rem",
    margin: 5
  }
}

export default NewsCard;