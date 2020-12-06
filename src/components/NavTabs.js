import React from "react";
import { Link } from "react-router-dom"

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
          <Link to="/SocialMedia" className="nav-link">
            SocialMedia
          </Link>
        </nav>
    )
}

export default NavTabs