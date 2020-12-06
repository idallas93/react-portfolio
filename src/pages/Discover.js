import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { getNewDog } from "../utils/API";

class Discover extends Component {
  state = {
    // image url for the current dog
    currentDog: "",
    isMatch: false,
    matchCount: 0,
  };

  componentDidMount() {
    this.updateDog();
  }

  updateDog() {
    getNewDog().then((res) => {
      console.log(res);
      this.setState({
        currentDog: res.data.message,
      });
    });
  }

  handlePick = () => {
    // check if there is a match 
    const randomNumber = Math.floor(Math.random() * 5) +1;
    if (1 === randomNumber){
        this.setState({
            matchCount: this.state.matchCount +1})
        }
        this.updateDog();
  };

  handlePass = () => {
    this.updateDog();
  };

  render() {
    return (
      <Container>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.state.currentDog} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              You have {this.state.matchCount} matches
            </p>
            <button onClick={this.handlePass}>Pass</button>
            <button onClick={this.handlePick}>Pick</button>
          </div>
        </div>
      </Container>
    );
  }
}

export default Discover;
