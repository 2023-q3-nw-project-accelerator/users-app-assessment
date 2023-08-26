import "./SearchBar.css";

const SearchBar = ({
  input,
  handleInput,
  handleExpandAll,
  handleCollapseAll,
}) => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Search by name, country, or company"
      />
      <button onClick={handleExpandAll}>Expand All</button>
      <button onClick={handleCollapseAll}>Collapse All</button>
    </div>
  );
};

export default SearchBar;
