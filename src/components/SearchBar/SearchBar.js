import "./SearchBar.css";

const SearchBar = ({ searchInput, handleChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name, country, or company"
      value={searchInput}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
