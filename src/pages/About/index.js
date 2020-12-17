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
          <h1>Welcome to my page</h1>
          <p></p>
        </Jumbotron>
        <Card style={{ width: "25rem", marginLeft: "150px", marginRight: "10px", marginTop: "10px", marginBottom: "25px", }}>
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEInA6RXC24PA/profile-displayphoto-shrink_400_400/0/1603938258171?e=1613001600&v=beta&t=857STUN5rpIKyiJ2kOsPYFlb9DLyaLWIADbR6hM5PjA"
          />
          <Card.Body>
            <Card.Title>Isaac Dallas</Card.Title>
            <Card.Text>
              Fullstack Web Developer based in Brooklyn, New York. I like to learn new technologies, run, and spend time with my black lab, Stella. Technical skills include React, React.js, Javascript, MongoDB , Node.Js., Express,  jQuery,  JSX, GIT, GitHub,  MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, React Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON, Sequelize
            </Card.Text>
            <Button className="about-button">
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
