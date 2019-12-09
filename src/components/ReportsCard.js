import React from "react";
import Card from "react-bootstrap/Card";

function ReportsCard(props) {
  const {title, site, url, date, summary} = props;

  return (
    <Card style={styles.card}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{site}</Card.Subtitle>
        <Card.Text>
          {summary}
        </Card.Text>
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
    height: "31rem"
  }
};

export default ReportsCard;