import React from "react";
import "./List.scss";
// List ([ {id:1, ...},{id:2,..},{}, ...], children)
function List({ items, children, className = "" }) {
  return (
    <div className={`list-group ${className}`}>
      {items.map((item) => {
        return (
          <button
            type="button"
            className="list-group-item list-group-item-action"
            key={item.id}
          >
            {React.cloneElement(children, { item: item })}
          </button>
        );
      })}
    </div>
  );
}

export default List;
