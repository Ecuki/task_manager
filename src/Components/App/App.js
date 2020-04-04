import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import Tasks from "../Tasks";
import Work from "../Work";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <Container
      className="column justify-content-center"
      style={{ height: "100%" }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/burndown">
            <div>Burndown</div>
          </Route>
          <Route exact path="/">
            <div>Hi</div>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
