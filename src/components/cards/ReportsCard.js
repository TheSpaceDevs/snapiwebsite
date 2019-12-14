import React from "react";
import Card from "react-bootstrap/Card";

function ReportsCard(props) {
  const {title, site, url, date, summary} = props;

  return (
    <Card style={styles.card} className='shadow'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`${site} | ${new Date(date).toLocaleDateString()}`}</Card.Subtitle>
        <Card.Text className="text-truncate text-wrap">
          {summary}
        </Card.Text>
        <div style={styles.linkStyle}>
          <Card.Link href={url} target='_blank noopener noreferrer'>Read</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

const styles = {
  card: {
    height: "25rem"
  },
  linkStyle: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '5px'
  }
};

export default ReportsCard;