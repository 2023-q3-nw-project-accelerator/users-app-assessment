import "./SearchBar.css";

const SearchBar = ({ input, handleChange }) => {
  return (
    <input
      type="text"
      value={input}
      placeholder="Search by name, country, or company"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
