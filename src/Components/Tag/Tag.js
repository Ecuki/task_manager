import React from "react";

import "./Tag.scss";
function Tag({ item }) {
  return (
    <span className={item.classes} key={item.id}>
      {item.name}
    </span>
  );
}

export default Tag;
