import React from "react";

function FilterButton(props) {
  console.log("Btn Filters props: " + props);
  console.log("filterType " + props.filterType);
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isActive}
      onClick={() => props.setActiveFilter(props.filterType)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.filterType}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
