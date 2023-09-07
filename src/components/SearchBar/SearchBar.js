import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name, country, or company"
    />
  );
};

export default SearchBar;
