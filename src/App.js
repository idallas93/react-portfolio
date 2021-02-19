import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./components/NavTabs";
import FooterPage from "./components/Footer";
import "./App.css";
// import coding from "./pages/Assets/coding.png"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div className="wrapper">
    <div className="App" >
        <Router>
          {/* <NavTabs className="header"/> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
        </Router>
    </div>
    <FooterPage className="footer"/>
    </div>
  );
};

export default App;


// style={{backgroundImage:`url(${coding})`, backgroundSize: "contain"}}