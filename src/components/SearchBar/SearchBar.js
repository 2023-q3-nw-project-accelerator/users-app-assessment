import './SearchBar.css';
import gereral_ from '../../general_';
const SearchBar = ({onSearchInputChange, searchInput}) => {
  return <div className='search-bar-div'>
    <input 
      className = 'flex-grow'
      type = "text" 
      placeholder = "Search by name, country, or company" 
      value = {searchInput}
      onChange = {onSearchInputChange}
    />
    <button onClick={()=>{gereral_.toggleAllAbout()}}>Expand All</button>
    <button onClick={()=>{gereral_.collapseAllAbout()}}>Collapse All</button>
  </div>
};

export default SearchBar;
