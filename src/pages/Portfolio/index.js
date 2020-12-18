import React, { Component } from "react";
import { Jumbotron, Container, Card, Button, CardGroup } from "react-bootstrap";
import "./style.css";
import HotParkr from "../Assets/HotParkr.png";
import HotDawgr from "../Assets/HotDawgr.png";
import Jsquiz from "../Assets/Jsquiz.png";
import Burger from "../Assets/Burger.png";
import Directory from "../Assets/Directory.png";
import Weather from "../Assets/Weather.png";


class Portfolio extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <Container className="portfolio-container">
        <CardGroup>
          <Card className="portfolio-card">
            <Card.Img variant="top" src={HotParkr} height="150px" width="200px"/>
            <Card.Body>
              <Card.Title>
              <a href="https://project-three-skirk.herokuapp.com/"> HotParkr App</a> 
              </Card.Title>
              <Card.Text>
              A social media app for dog owners to  set up dog play dates to socialize their pets.
              </Card.Text>
              <a href="https://github.com/idallas93/HotParkr-Application"> HotParkr Repository </a> 
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 16Dec2020</small>
            </Card.Footer>
          </Card>
          <Card className="portfolio-card">
            <Card.Img variant="top" src={HotDawgr} height="150px" width="200px"/>
            <Card.Body>
              <Card.Title>
              <a href="https://project-two-asika.herokuapp.com/"> HotDawgr App </a> 
              </Card.Title>
              <Card.Text>
                This is the prototype for a dog play date matching app, think tinder but for dog owners to arrange dog play dates. This app has a working backend for user profiles built using MongoDB
              </Card.Text>
              <a href="https://github.com/idallas93/HotDawgr-Application"> HotDawgr Repository </a> 
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 16Dec2020</small>
            </Card.Footer>
          </Card>
          <Card className="portfolio-card">
            <Card.Img variant="top" src={Burger} height="150px" width="200px"/>
            <Card.Body>
              <Card.Title>
              <a href="https://calm-temple-91222.herokuapp.com/"> Burger App </a> 
              </Card.Title>
              <Card.Text>
              This app is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM. This app follows a MVC design pattern using Node and MySQL to query and route data/ Handlebars to generate HTML.
              </Card.Text>
              <a href="https://github.com/idallas93/burger-app"> Burger Repository </a> 
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 16Dec2020</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="portfolio-card"> 
            <Card.Img variant="top" src={Jsquiz} height="150px" width="200px" />
            <Card.Body>
              <Card.Title>
              <a href="https://idallas93.github.io/Javascript-Quiz/"> Javascript Quiz App</a> 
              </Card.Title>
              <Card.Text>
              This app is a timed quiz on JavaScript fundamentals that stores high scores, this app was made using vanilla Javascript.
              </Card.Text>
              <a href="https://github.com/idallas93/02-Homework-web-apis"> Javascript Quiz Repository </a> 
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 16Dec2020</small>
            </Card.Footer>
          </Card>
          <Card className="portfolio-card">
            <Card.Img variant="top" src={Directory} height="150px" width="200px"/>
            <Card.Body>
              <Card.Title>
              <a href="https://www.youtube.com/watch?v=CNgu8uQm5dw&feature=youtu.be&ab_channel=IsaacDallas"> Employee Directory Program Video </a> 
              </Card.Title>
              <Card.Text>
              This application is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. This app also includes tests that are all passed.
              </Card.Text>
              <a href="https://github.com/idallas93/template-engine"> Employee Directory Repository </a> 
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 16Dec2020</small>
            </Card.Footer>
          </Card>
          <Card className="portfolio-card">
            <Card.Img variant="top" src={Weather} height="150px" width="200px"/>
            <Card.Body>
              <Card.Title>
              <a href="https://github.com/idallas93/Weather-Application"> Weather Application </a> 
              </Card.Title>
              <Card.Text>
              This is an app that allows a user to see the weather outlook for multiple cities by searching for the city in the search bar. The user can also see the five day forcast for that city.
              </Card.Text>
              <a href="https://idallas93.github.io/Weather-Application/"> Weather Dashboard Repository </a> 
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 16Dec2020</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}

export default Portfolio;
