import React from 'react';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const AppCard = () => {
  return (
    <div>
      <Card style={styles.cardStyle} className="shadow">
        <Card.Body>
          <Card.Img src="holder.js/200x200" className="rounded-circle mx-auto d-block shadow-sm"/>
          <Card.Title style={styles.cardTitleStyle} className="text-center">App Name</Card.Title>
          <div className="text-center" >
            <Badge pill variant="success">Supporter</Badge>
          </div>
          <Card.Text className="text-center">
            Dit is de summary die de ontwikkelaars zelf sturen
          </Card.Text>
          <div className="text-center">
            <Card.Link href="https://www.google.com">Website</Card.Link>
            <Card.Link href="https://www.google.com">Discord</Card.Link>
            <Card.Link href="https://www.google.com">App</Card.Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const styles = {
  cardStyle: {
    marginTop: 5
  },
  cardTitleStyle: {
    marginTop: 10
  }
}

export default AppCard;
