import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/users">
            <div>users</div>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
