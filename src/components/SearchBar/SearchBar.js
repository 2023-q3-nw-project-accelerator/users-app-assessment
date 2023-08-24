import "./SearchBar.css";

const SearchBar = ({ input, onChange }) => {
  return (
    <input
      type="text"
      value={input}
      onChange={onChange}
      placeholder="Search by name, country, or company"
    />
  );
};

export default SearchBar;
