import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
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
            <div className="home-jumbo-items">
            <p className="jumbo-header">
                Isaac J. Dallas 
            </p>
            <p className="jumbo-subtitle">
            Creative and driven web developer excited to collaboratively solve complex problems.
            </p>
            <HomeModal>
            </HomeModal>
            </div>
          </Jumbotron>
          </div>
      </Container>
    );
  }
}

export default Home;

