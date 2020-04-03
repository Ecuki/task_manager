import React from "react";

import "./Tag.scss";
function Tag({ item }) {
  return <span className={item.classes}>{item.name}</span>;
}

export default Tag;
