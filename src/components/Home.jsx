import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";


class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }} >
        <Jumbotron>
          <h1 className="display-3">Spaceflight News API</h1>
          <p className="lead">Spaceflight News API (SNAPI) enables developers to add the latest spaceflight news to their apps.</p>
          <hr className="my-2" />
          <p>Ready to begin?</p>
          <p className="lead">
            <Button color="primary">Go To Docs</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;