import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({users}) => {
  //create useState for user input
  const [searchInput, setSearchInput] = useState('')

  //input value is updated when user types in search bar
  const handleChange = (e) =>{
    setSearchInput(e.target.value)
  }

 
  console.log(`<SearchBar/> Rendered searchInput = ${searchInput}`)

  return (
    <input 
    //set value to dynamic user input
    value={searchInput}
    type="text" 
    placeholder="Search by name, country, or company"
    onChange={handleChange} 
    />
  );
};

export default SearchBar;
