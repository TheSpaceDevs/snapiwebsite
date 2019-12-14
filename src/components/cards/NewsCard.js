import React from "react";
import Card from "react-bootstrap/Card";

function NewsCard(props) {
  const {title, site, url, date, image} = props;

  return (
    <Card style={styles.card} className='shadow'>
      <Card.Img variant="top" src={image} style={{height: "15rem"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`${site} | ${new Date(date).toLocaleDateString()}`}</Card.Subtitle>
        <div style={styles.linkStyle}>
          <Card.Link href={url} target='_blank noopener noreferrer'>Read</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

const styles = {
  card: {
    height: "27rem"
  },
  linkStyle: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '5px'
  }
};

export default NewsCard;