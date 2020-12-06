import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
// pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import SocialMedia from "./pages/SocialMedia"
import NavTabs from "./components/NavTabs"

const App = () => {
  return (
    <Router>
      <NavTabs />
      <div className="container">
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/socialMedia" component={SocialMedia} />
      </div>
    </Router>
  );
};

export default App;
