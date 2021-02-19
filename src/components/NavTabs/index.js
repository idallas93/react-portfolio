import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Navbar} from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/react-fontawesome"


const NavTabs = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" style={{background: "transparent"}}>
      <Navbar.Brand href="#home">
        <Link to="/" id="isaac-dallas" className="nav-link">
        <img
        src="https://pngarchive.com/public/uploads/preview/labrador-puppy-png-1001576265834jdhaarwx2n.png"
          alt=""
          width="50"
          height="50"
          className="
          d-inline-block align-top"
        />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav">
          <Link to="/" id="isaac-dallas" className="nav-link">
            Isaac Dallas
          </Link>
          {/* <Link to="/about" className="nav-link">
            About
          </Link> */}
          {/* <Link to="/Portfolio" className="nav-link">
            Portfolio
          </Link> */}
          <NavDropdown title="Social Media" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://www.linkedin.com/in/isaacjdallas/">
              <img
                src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              LinkedIn
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/idallas93">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Github
            </NavDropdown.Item>
            <NavDropdown.Item href=""></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://stackexchange.com/users/19318034/isaac-dallas?tab=bookmarks">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Stack Overflow
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTabs;
