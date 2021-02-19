import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import HomeModal from "../../components/HomeModal";
import "./style.css";
import About from '../../pages/About'
import Portfolio from '../../pages/Portfolio'


const Header = () => {
    return (
    <div className="header-wrapper" >
      <div className="main-info">
        <h1>  Isaac J. Dallas </h1>
      <p className="jumbo-subtitle">
      Creative and driven web developer excited to collaboratively solve complex problems.
      </p>
      <HomeModal>
      </HomeModal>
      </div>
    </div>
    )

}

export default Header
    