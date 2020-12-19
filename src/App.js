import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./components/NavTabs";
import FooterPage from "./components/Footer";
import "./App.css";
import coding from "./pages/Assets/coding.png"

const App = () => {
  return (
    <div className="wrapper">
    <div className="App" style={{backgroundImage:`url(${coding})`}}>
      <div className="image-opacity">
        <Router>
          <NavTabs className="header"/>
          <div id="article" className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
        </Router>
      </div>
    </div>
    <FooterPage className="footer"/>
    </div>
  );
};

export default App;
