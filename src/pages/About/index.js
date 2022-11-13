import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./style.css";
import AboutMe from "../Assets/AboutMe.png";

class About extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <Container className = 'about-container'>
        <Card className ='about-card' style={{ width: '100%', marginRight: '25px'}}>
          <Card.Img
            width="25%"
            variant="top"
            src={AboutMe}
            className='about-image'
          />
          <Card.Body className ='about-body'>
            <Card.Title className='card-title'>Isaac Dallas</Card.Title>
            <Card.Text className='card-text'>
              Full stack web developer leveraging a ​background in healthcare technology, product management, clinical trial management, and consulting. Recognized for creativity, adaptability and complex problem-solving abilities as a part of fast-paced, quality-driven companies and teams. Excellent interpersonal communication, collaboration, project management, and presentation skills who works well on team-based projects as well as independently. 
              Technical skills include React, React.js, Javascript, MongoDB , Node.Js., Express,  jQuery,  JSX, GIT, GitHub,  MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, React Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON, and Sequelize. I like to learn new technologies, run, and spend time with my black lab, Stella. 
            </Card.Text>
            {/* <Button className="about-button">
              <Link to="/Portfolio" className="nav-link-one">
                Go to Portfolio
              </Link>
            </Button> */}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default About;
