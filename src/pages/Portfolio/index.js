import React, { Component } from "react";
import {  Container, Card, CardGroup } from "react-bootstrap";
import "./style.css";
import HotParkr from "../Assets/HotParkr.png";
import HotDawgr from "../Assets/HotDawgr.png";
import Jsquiz from "../Assets/Jsquiz.png";
import Burger from "../Assets/Burger.png";
import Directory from "../Assets/Directory.png";
import Quiz from "../Assets/Quiz.png";


class Portfolio extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <Container className="portfolio-container" style={{background: ""}}>
       
          <Card className="portfolio-card">
            <Card.Img variant="top" src={HotParkr} height="300rem" width="50rem"/>
            <Card.Body style={{background: ""}}>
              <Card.Title>
              <a className="card-title-link" href="https://project-three-skirk.herokuapp.com/"> HotParkr App</a> 
              </Card.Title>
              <Card.Text>
              A fullstack MERN social media app for dog owners to set up dog play dates and socialize their pets.
              </Card.Text>
              <a className="card-text-link" href="https://github.com/idallas93/HotParkr-Application" style={{color: "#577399", fontWeight: "bold"}}> HotParkr Repository </a> 
            </Card.Body>
            
          </Card>
          <Card className="portfolio-card">
            <Card.Img variant="top" src={HotDawgr} height="300rem" width="200px"/>
            <Card.Body style={{background: ""}}>
              <Card.Title>
              <a className="card-title-link" href="https://project-two-asika.herokuapp.com/"> HotDawgr App </a> 
              </Card.Title>
              <Card.Text>
                This is the prototype for a dog play date matching app, think tinder but for dog owners to arrange dog play dates. This app has a working backend for user profiles built using mySQL/ Sequelize.
              </Card.Text>
              <a className="card-text-link" href="https://github.com/idallas93/HotDawgr-Application" style={{color: "#577399", fontWeight: "bold"}}> HotDawgr Repository </a> 
            </Card.Body>
          </Card>

          <Card className="portfolio-card">
            <Card.Img variant="top" src={Quiz} height="300rem" width="200px"/>
            <Card.Body style={{background: ""}}>
              <Card.Title>
              <a className="card-title-link" href="https://react-quiz-tailwind.herokuapp.com"> React Quiz Game </a> 
              </Card.Title>
              <Card.Text>
                *Under Construction* This app is similar to the vanilla javascript quiz game but was built with react and styled with Tailwind. This app has a fully functional frontend that counts your score and tells you whether or not you got the right answer. Next steps on this project's roadmap include setting up a functioning backend that allows a user to sign in and record their high scores. This backend will be built with express, node.js and mongoDB.
              </Card.Text>
              <a className="card-text-link" href="https://github.com/idallas93/react-quiz" style={{color: "#577399", fontWeight: "bold"}}> React Quiz Application </a> 
            </Card.Body>
          </Card>

          <Card className="portfolio-card">
            <Card.Img variant="top" src={Burger} height="300rem" width="200px"/>
            <Card.Body style={{background: ""}}>
              <Card.Title>
              <a className="card-title-link" href="https://calm-temple-91222.herokuapp.com/"> Burger App </a> 
              </Card.Title>
              <Card.Text>
              This app is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM. This app follows a MVC design pattern using Node and MySQL to query and route data/ Handlebars to generate HTML.
              </Card.Text>
              <a className="card-text-link" href="https://github.com/idallas93/burger-app" style={{color: "#577399", fontWeight: "bold"}}> Burger Repository </a> 
            </Card.Body>
          </Card>
          <Card className="portfolio-card"> 
            <Card.Img variant="top" src={Jsquiz} height="300rem" width="200px" />
            <Card.Body style={{background: ""}}>
              <Card.Title>
              <a className="card-title-link" href="https://idallas93.github.io/Javascript-Quiz/"> Javascript Quiz App</a> 
              </Card.Title>
              <Card.Text>
              This app is a timed quiz on JavaScript fundamentals that stores high scores, this app was made using vanilla Javascript.
              </Card.Text>
              <a className="card-text-link" href="https://github.com/idallas93/02-Homework-web-apis" style={{color: "#577399", fontWeight: "bold"}}> Javascript Quiz Repository </a> 
            </Card.Body>
          </Card>
          <Card className="portfolio-card">
            <Card.Img variant="top" src={Directory} height="300rem" width="200px"/>
            <Card.Body style={{background: ""}}>
              <Card.Title>
              <a className="card-title-link" href="https://www.youtube.com/watch?v=CNgu8uQm5dw&feature=youtu.be&ab_channel=IsaacDallas"> Employee Directory Program Video </a> 
              </Card.Title>
              <Card.Text>
              This application is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. This app also includes tests that are all passed.
              </Card.Text>
              <a className="card-text-link" href="https://github.com/idallas93/template-engine" style={{color: "#577399", fontWeight: "bold"}}> Employee Directory Repository </a> 
            </Card.Body>
          </Card>
      </Container>
    );
  }
}

export default Portfolio;
