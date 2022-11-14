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
      <h2> Please be aware, this portfolio is outdated and actively under construction. I was proud of it as a junior developer but now it needs some work! At the very least you'll be able to access my resume, view contact information, and see pictures of my dog Stella. V2 will include a completely different UI/UX and feature projects showcasing React/Typescript, Java, and more! </h2>
      </div>
    </div>
    )

}

export default Header
    