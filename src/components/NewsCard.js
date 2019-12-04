import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function NewsCard(props) {
  const {title, site, url, date, image} = props;

  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={image} style={{height: "180px"}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{site}</Card.Subtitle>
        <div style={{position: 'absolute', bottom: 0, marginBottom: '50px'}}>
          <Card.Link href={url} target='_blank noopener noreferrer'>Read</Card.Link>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        {new Date(date).toLocaleDateString()}
      </Card.Footer>
    </Card>
  );
}

const styles = {
  card: {
    width: "17rem",
    height: "26rem"
  }
};

export default NewsCard;