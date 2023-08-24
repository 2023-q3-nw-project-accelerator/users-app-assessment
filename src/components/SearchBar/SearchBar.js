import './SearchBar.css';

const SearchBar = ({search, handleChange, handleExpandAll, handleCollapseAll}) => {
  
  
  
  return (
    <div>
      <input 
    value={search}
    type="text" 
    placeholder="Search by name, country, or company"
    onChange={handleChange} />

    <button onClick={handleExpandAll}>Expand All</button>
    <button onClick={handleCollapseAll}>Collapse All</button>
   
    
    </div>
  );
};

export default SearchBar;
