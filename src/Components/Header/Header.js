import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.scss";
function Header() {
  return (
    <>
      <Navbar bg="light" variant="light" className="border border-light">
        <Navbar.Brand>
          <h3 className="logo">
            <Link to="/home" className="logo-text">
              TaskManager
            </Link>
          </h3>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer exact to="/tasks">
            <Button variant="light">Tasks</Button>
          </LinkContainer>
          <LinkContainer to="/work">
            <Button variant="light">Work</Button>
          </LinkContainer>
          <LinkContainer to="/burndown">
            <Button variant="light">Burndown</Button>
          </LinkContainer>
          <LinkContainer to="/about">
            <Button variant="light">About</Button>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default Header;
