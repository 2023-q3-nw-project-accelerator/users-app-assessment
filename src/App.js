import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import { useState, useEffect } from 'react';
import OnError from './components/OnError/OnError';
import OnLoading from './components/OnLoading/OnLoading';
import fe_ from './fetch_';
////////////////////////////////////////////////
function App() {
  // TODO: Fetch data here
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const filteredUser = users.filter(({company, country, name}) => {
    return (company + country + name).toLowerCase().includes(searchInput.toLowerCase())
  });
  ////////////////////////////////////////////////
  useEffect(() => {
    setIsLoading(true);
    fe_.getAllUsers(res => {
      if(res.data){
        //if success
        setUsers(res.data)
      }else if(res.error){
        //if failed
        setIsError(res.error);
      }
      setIsLoading(false);
    });
  }, [])
  ////////////////////////////////////////////////
  function renderUser(){
    if(isError !== ""){
      //on error
      return <OnError message = {isError} />
    }else if(isLoading){
      //on loading
      return <OnLoading />
    }else{
      if(filteredUser.length === 0){
        //no results
        return <div><h3>No results</h3></div>
      }else{
        //normal display results
        return <Users users = {filteredUser}/>
      }
    }
  }
  ///event/////////////////////////////////////////////
  function onSearchInputChange(evt) {
    setSearchInput(evt.target.value);
  }
  /////////////////////////////////////////////
  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar searchInput={searchInput} onSearchInputChange={onSearchInputChange} />
      {renderUser()}
    </div>
  );
}

export default App;
