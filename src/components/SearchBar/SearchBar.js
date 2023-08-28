import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({users}) => {
  //create useState for user input
  const [searchInput, setSearchInput] = useState('')
  const [expand, setExpanded] = useState(false)


  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  

//SEARCH FILTER BUG STUCKKKK

  let dataToDisplay = users

// if(searchInput){
//   dataToDisplay = users.filter((user) =>{
//     const {name} = user
//     const {company} = user.company
//     const {country} = user.country

//     return company.includes(searchInput)
//   })
// }





  console.log(`<SearchBar/> Rendered searchInput = ${searchInput}  `)

  return (
    <div className='SearchBar--controls'>
    <span>
    <input 
    value={searchInput}
    type="text" 
    placeholder="Search by name, country, or company"
    onChange={handleChange} 
    />
    <button onClick={() =>{setExpanded(!expand)}}>Expand All</button>
    <button>Collapse All</button>
    </span>

    </div>
  );
};

export default SearchBar;
