import React from "react";
import { Container, Grid } from "@material-ui/core";
// import Profile from "../Components/Profile/Profile";
import Header from "../Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Profileicon from "../Pages/Profileicon/Profileicon";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import Contact from "../Pages/Contact/Contact";
import Income from "../Pages/Income/Income";
import Expence from "../Pages/Expence/Expence";
import Footer from "../Components/Footer/Footer";
import Career from "../Pages/Career/Career";
import Newsroom from "../Pages/Newsroom/Newsroom";
import '../App.css';


const App = () => {
  return (
    <>
      <Container className={""} m-0 >
        <Grid container>
          {/* <Grid item xs={12} sm={12} md={4} lg={3} style={{}}>
            <Profile />
          </Grid> */}
          <Grid item xs>
            {/* <Profile /> */}
            <Router>
              <Header />
              <div className="main_content container_shadow">
                <Switch>
                  <Route path="/profileicon">
                    <Profileicon />
                  </Route>
                  <Route path="/income">
                    <Income />
                  </Route>
                  <Route path="/newsroom">
                    <Newsroom />
                  </Route>
                  <Route path="/expence">
                    <Expence />
                  </Route>
                  <Route path="/career">
                    <Career />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/contact">
                  <Contact />
                  </Route>
                  <Route path="/Service">
                    <Service />
                  </Route>
                  <Route path="/login">
                    <Login/>
                  </Route>
                  <Route path="/singup">
                    <Singup />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
