import "./SearchBar.css"

const SearchBar = ({
  input,
  handleChange,
  handleExpandAll,
  handleCollapseAll,
}) => {
  return (
    <div className="Searchbar">
      <input
        value={input}
        onChange={handleChange}
        type="text"
        placeholder="Search by name, country, or company"
      />
      <button onClick={handleExpandAll}>Expand All</button>
      <button onClick={handleCollapseAll}>Collapse All</button>
    </div>
  )
}

export default SearchBar
