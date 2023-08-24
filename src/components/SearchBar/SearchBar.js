import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  // const [searchInput, setSearchInput] = useState("");

  // const handleChange = (e) => {
  //   setSearchInput(e.target.value);
  // };
  // console.log(searchInput);
  return <input type="text" placeholder="Search by name, country, or company" onChange={onChange} value={value} />;
};

export default SearchBar;
