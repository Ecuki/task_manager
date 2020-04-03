import React from "react";
import List from "../List";
import Tag from "../Tag";
import "./Tasks.scss";

const tags = [
  { id: 0, classes: "badge badge-pill ", name: "All" },
  { id: 1, classes: "badge badge-pill badge-primary", name: "Primary" },
  { id: 2, classes: "badge badge-pill badge-secondary", name: "Secondary" },
  { id: 3, classes: "badge badge-pill badge-success", name: "Success" },
  { id: 4, classes: "badge badge-pill badge-danger", name: "Danger" },
  { id: 5, classes: "badge badge-pill badge-warning", name: "Warning" },
  { id: 6, classes: "badge badge-pill badge-info", name: "Info" },
  { id: 7, classes: "badge badge-pill badge-light", name: "Light" },
  { id: 8, classes: "badge badge-pill badge-dark", name: "Dark" }
];

function Tasks() {
  return (
    <div className="d-flex flex-column flex-wrap align-items-center h-100">
      <div className=" h-100 w-25">
        <List items={tags}>
          <Tag />
        </List>
      </div>
      <div className=" h-40 w-75">New Sprint</div>
      <div className=" h-60 w-75">All tasks</div>
    </div>
  );
}

export default Tasks;
