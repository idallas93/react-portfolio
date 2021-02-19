import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import Header from '../../components/Header'



class Home extends Component {
  state = {
    currentImage: "",
  };

  render() {
    return (
      <div>
        <Header></Header>
       
      </div>
    );
  }
}

export default Home;

