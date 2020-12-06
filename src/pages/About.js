import React, { Component } from "react";
import { Jumbotron, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

class About extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <Container>
        <Jumbotron fluid>
          <h1>Welcome to Isaac's Portfolio</h1>
          <p></p>
        </Jumbotron>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEInA6RXC24PA/profile-displayphoto-shrink_400_400/0/1603938258171?e=1613001600&v=beta&t=857STUN5rpIKyiJ2kOsPYFlb9DLyaLWIADbR6hM5PjA"
          />
          <Card.Body>
            <Card.Title>Isaac Dallas</Card.Title>
            <Card.Text>
              Freelance Web Designer and Developer based in Brooklyn, New York.
              experienced in designing and developing custom websites and apps.
            </Card.Text>
            <Button variant="primary">
              <Link to="/Portfolio" className="nav-link-one">
                Go to Portfolio
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default About;
