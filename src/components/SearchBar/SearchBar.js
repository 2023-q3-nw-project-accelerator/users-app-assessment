import './SearchBar.css';
const SearchBar = ({ onSearchInputChange, searchInput, setToggleAllabout, setCollapseAllAbout }) => {
  return <div className='search-bar-div'>
    <input
      className='flex-grow'
      type="text"
      placeholder="Search by name, country, or company"
      value={searchInput}
      onChange={onSearchInputChange}
    />
    <button onClick={() => { setToggleAllabout() }}>Expand All</button>
    <button onClick={() => { setCollapseAllAbout() }}>Collapse All</button>
  </div>
};

export default SearchBar;
