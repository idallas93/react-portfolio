import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import Portfolio from "./pages/PortfolioPage";
import FooterPage from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import LoadingScreen from "./components/LoadingScreen";
import Grid from "@mui/material/Grid/Grid";
import StellaCarousel from "./components/StellaCarousel";
import ContactInfo from "./components/ContactInfo";
import Container from "@mui/material/Container";
import { NavBar } from "./components/NavBar";
import Main from "./pages/Main";

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {!loading ?
        (<div style={{ backgroundImage: `url(https://i.imgur.com/HWbKq9B.jpg)` }}>
          <div className="appContainer" >
            <Router>
              {/* <NavTabs className="header"/> */}
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} /> */}
            </Router>
            <NavBar/>
            <Container>
              <Main/>
            </Container>
          </div>
          <FooterPage className="footer" />
        </div>) : (
          <div style={{ backgroundImage: `url(https://i.imgur.com/HWbKq9B.jpg)` }}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}
            >
              <Grid item xs={3}>
                <LoadingScreen />
              </Grid>
            </Grid>
          </div>

        )}
    </>
  );
};

export default App;