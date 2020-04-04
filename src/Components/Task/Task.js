import React from "react";

import "./Task.scss";
function Task({ item }) {
  return (
    <span className={item.classes} key={item.id}>
      {item.name}
    </span>
  );
}

export default Task;
