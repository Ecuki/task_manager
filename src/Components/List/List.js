import React from "react";

import "./List.scss";
function List({ items, children }) {
  return (
    <div class="list-group">
      {items.map(item => {
        return (
          <button
            type="button"
            class="list-group-item list-group-item-action"
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
