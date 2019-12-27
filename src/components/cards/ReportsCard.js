import React from "react";
import Card from "react-bootstrap/Card";

function ReportsCard(props) {
  const {title, site, url, date, summary} = props;

  return (
    <Card style={{height: "100%"}} className='shadow'>
      <Card.Body>
        <Card.Title><a href={url} target='_blank noopener noreferrer'>{title}</a></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`${site} | ${new Date(date).toLocaleDateString()}`}</Card.Subtitle>
        <Card.Text>
          {summary}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReportsCard;