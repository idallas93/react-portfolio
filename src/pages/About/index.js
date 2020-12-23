import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import AboutMe from "../Assets/AboutMe.png";


class About extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <Container>
        <Card style={{ width: '100%', marginRight: '25px'}}>
          <Card.Img
            width="25%"
            variant="top"
            src={AboutMe}
          />
          <Card.Body>
            <Card.Title>Isaac Dallas</Card.Title>
            <Card.Text>
              Fullstack Web Developer based in Brooklyn, New York. I like to learn new technologies, run, and spend time with my black lab, Stella. Technical skills include React, React.js, Javascript, MongoDB , Node.Js., Express,  jQuery,  JSX, GIT, GitHub,  MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, React Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON, and Sequelize.
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
