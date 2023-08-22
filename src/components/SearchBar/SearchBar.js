import "./SearchBar.css";

const SearchBar = ({
  input,
  handleChange,
  handleExpandAll,
  handleCollapseAll,
}) => {
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Search by name, country, or company"
        onChange={handleChange}
      />
      <button onClick={handleExpandAll}>Expand All </button>
      <button onClick={handleCollapseAll}>Collapse All </button>
    </div>
  );
};

export default SearchBar;
