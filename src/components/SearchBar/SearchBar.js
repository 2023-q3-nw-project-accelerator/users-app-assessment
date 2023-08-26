import './SearchBar.css';

const SearchBar = ({searchInput, handleChange, handleExpandAll, handleCollapseAll}) => {
  
  
  
  return (
    <div className='SearchBar'>
      <input 
    value={searchInput}
    type="text" 
    placeholder="Search by name, country, or company"
    onChange={handleChange} />

    <button onClick={handleExpandAll}>Expand All</button>
    <button onClick={handleCollapseAll}>Collapse All</button>
   
    
    </div>
  );
};

export default SearchBar;
