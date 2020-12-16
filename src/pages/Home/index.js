import React, { Component } from "react";
import { Jumbotron, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeModal from "../../components/HomeModal"
import "./style.css";

class Home extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <Container className="home-container" style={{ marginLeft: "15vw" }}>
        <div className="jumbo-div" >
          <Jumbotron id="home-jumbo" style={{ background:"transparent", padding: "none" }} >
            <p className="jumbo-header">
                Isaac J. Dallas 
            </p>
            <p className="jumbo-subtitle">
            Creative and driven web developer excited to collaboratively solve complex problems.
            </p>
            <HomeModal>
            </HomeModal>
          </Jumbotron>
          </div>
      </Container>
    );
  }
}

export default Home;

