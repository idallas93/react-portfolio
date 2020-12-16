import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./components/NavTabs";
import FooterPage from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="image-opacity">
        <Router>
          <NavTabs />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
          <FooterPage />
        </Router>
      </div>
    </div>
  );
};

export default App;
