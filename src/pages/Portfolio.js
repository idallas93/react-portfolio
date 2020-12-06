import React, { Component } from "react";
import { Jumbotron, Container, Card, Button, CardGroup } from "react-bootstrap";
import "./style.css";

class Portfolio extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <Container>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://www.kindpng.com/picc/m/80-808011_check-book-icon-png-download-budget-clipart-transparent.png" />
            <Card.Body>
              <Card.Title>
              <a href="https://github.com/idallas93/PWA-Budget-Tracker"> Budget Tracker </a> 
              </Card.Title>
              <Card.Text>
              This is a Budget tracker app that works offline. The user is be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they can populate the total when brought back online.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.kindpng.com/picc/m/431-4311924_clipart-puppy-animated-transparent-background-dog-clipart-hd.png" />
            <Card.Body>
              <Card.Title>
              <a href="https://github.com/idallas93/project-two-group"> Hot Dawgr </a> 
              </Card.Title>
              <Card.Text>
                This is the prototype for a dog play date matching app, think tinder but for dog owners to arrange dog play dates. This app has a working backend for user profiles built using MongoDB
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.kindpng.com/picc/m/549-5499625_open-burger-png-transparent-png.png" />
            <Card.Body>
              <Card.Title>
              <a href="https://github.com/idallas93/burger-app"> Burger App </a> 
              </Card.Title>
              <Card.Text>
              This app is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM. This app follows a MVC design pattern using Node and MySQL to query and route data/ Handlebars to generate HTML.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/37-376131_test-clipart-multiple-choice-test-multiple-choice-questions.png" />
            <Card.Body>
              <Card.Title>
              <a href="https://github.com/idallas93/02-Homework-web-apis"> JavaScript Quiz </a> 
              </Card.Title>
              <Card.Text>
              This app is a timed quiz on JavaScript fundamentals that stores high scores, this app was made using vanilla javascript.

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/432-4325142_euclidean-vector-directory-computer-file-transparent-background-file.png" />
            <Card.Body>
              <Card.Title>
              <a href="https://github.com/idallas93/template-engine"> Employee Directory </a> 
              </Card.Title>
              <Card.Text>
              This application is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. This app also includes tests that are all passed.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://scx2.b-cdn.net/gfx/news/hires/2019/weatherforec.jpg" />
            <Card.Body>
              <Card.Title>
              <a href="https://github.com/idallas93/WeatherApplication-"> Weather Application </a> 
              </Card.Title>
              <Card.Text>
              This is an app that allows a user to see the weather outlook for multiple cities by searching for the city in the search bar. The user can also see the five day forcast for that city.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}

export default Portfolio;
