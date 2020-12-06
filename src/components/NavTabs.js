import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const NavTabs = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Isaac Dallas
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/Portfolio" className="nav-link">
        Portfolio
      </Link>
      {/* <Link to="/SocialMedia" className="nav-link">
        SocialMedia
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
    </nav>
  );
};

export default NavTabs;




