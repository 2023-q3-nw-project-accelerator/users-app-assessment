import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ value, onChange, handleExpandALL, handleCollapseALL }) => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search by name, country, or company" onChange={onChange} value={value} />
      <button onClick={handleExpandALL}>Expand ALL</button>
      <button onClick={handleCollapseALL}>Collapse ALL</button>
    </div>
  );
};

export default SearchBar;
