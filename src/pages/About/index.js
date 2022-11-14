import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./style.css";

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
            src={"https://i.imgur.com/qQMCCub.png"}
            className='about-image'
          />
          <Card.Body className ='about-body'>
            <Card.Title className='card-title'>Isaac Dallas</Card.Title>
            <Card.Text className='card-text'>
            Full-stack software engineer developing strategic portfolio management software, leveraging a ​background in healthcare technology, product management, clinical trial management, and consulting. Recognized for creativity, adaptability, and complex problem-solving abilities as a part of agile, quality-driven companies and teams. Excellent interpersonal communication, collaboration, project management, and presentation skills who works well on team-based projects as well as independently. I like to learn new technologies, run, and spend time with my fiance Chelsea and our dog, Stella. 
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
