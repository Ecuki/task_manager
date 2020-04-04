import React from "react";

import { Card, Nav, Container, Button } from "react-bootstrap";
import List from "../List";
import Task from "../Task";
import "./Work.scss";

const tasks = [
  { id: 101, classes: "badge badge-pill ", name: "All", stage: -1 },
  {
    id: 11,
    classes: "badge badge-pill badge-primary",
    name: "Primary",
    stage: -1,
  },
  {
    id: 21,
    classes: "badge badge-pill badge-secondary",
    name: "Secondary",
    stage: 0,
  },
  {
    id: 31,
    classes: "badge badge-pill badge-success",
    name: "Success",
    stage: 1,
  },
  {
    id: 41,
    classes: "badge badge-pill badge-danger",
    name: "Danger",
    stage: 0,
  },
  {
    id: 51,
    classes: "badge badge-pill badge-warning",
    name: "Warning",
    stage: 1,
  },
  { id: 61, classes: "badge badge-pill badge-info", name: "Info", stage: -1 },
  { id: 71, classes: "badge badge-pill badge-light", name: "Light", stage: 0 },
  { id: 81, classes: "badge badge-pill badge-dark", name: "Dark", stage: 1 },
];
const toDo = tasks.filter((task) => task.stage < 0);
const active = tasks.filter((task) => task.stage === 0);

const done = tasks.filter((task) => task.stage > 0);
function Work() {
  return (
    <>
      <Container
        className="h-100 p-2 d-flex flex-row  justify-content-center"
        style={{ height: "100%" }}
      >
        <div className="d-flex flex-column flex-grow-1 justify-content-center">
          <h5 className="text-center border border-dark">ToDo</h5>
          <List items={toDo}>
            <Task />
          </List>
        </div>

        <div className="d-flex flex-column flex-grow-1 justify-content-center">
          <h5 className="text-center border border-dark border-right-0 border-left-0">
            Active
          </h5>
          <List items={active}>
            <Task />
          </List>
        </div>

        <div className="d-flex flex-column flex-grow-1 justify-content-center">
          <h5 className="text-center border border-dark">Done</h5>
          <List items={done}>
            <Task />
          </List>
        </div>
      </Container>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Work;
