import React from "react";
import "./SearchBar.css";

function SearchBar({
  handleChange,
  input,
  handleExpandAll,
  handleCollapseAll,
}) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search by name, country, or company"
      />
      <button onClick={handleExpandAll}>ExpandAll</button>
      <button onClick={handleCollapseAll}>CollapseAll</button>
    </div>
  );
}

export default SearchBar;
