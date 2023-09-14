import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import { useState, useEffect } from 'react';
import OnError from './components/OnError/OnError';
import OnLoading from './components/OnLoading/OnLoading';
import fe_ from './fetch_';
////////////////////////////////////////////////
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [aboutToggleState, setAboutToggleState] = useState({});

  const filteredUser = users.filter((user) => {
    for (let itm of ["company", "country", "name"]) {
      if (user[itm].toLowerCase().includes(searchInput.toLowerCase())) return true;
    }
    return false;
  });
  const setToggleAllabout = () => {
    const ret = {};
    for (let { id } of users) ret[id] = true;
    setAboutToggleState(ret);
  }
  const setCollapseAllAbout = () => {
    setAboutToggleState({});
  }
  ////////////////////////////////////////////////
  useEffect(() => {
    setIsError("");
    setIsLoading(true);
    fe_.getAllUsers(res => {
      if (res.data) {
        //if success
        setUsers(res.data);
      } else if (res.error) {
        //if failed
        setIsError(res.error);
      }
      setIsLoading(false);
    });
  }, [])
  ////////////////////////////////////////////////
  function renderUser() {

    if (isLoading) {
      //on loading
      return <OnLoading />
    } else if (isError) {
      //on error
      return <OnError message={isError} />
    } else if (filteredUser.length === 0) {
      //no results
      return <div><h3>No results for {searchInput}</h3></div>
    } else {
      //normal display results
      return <Users
        users={users}
        filteredUser={filteredUser}
        aboutToggleState={aboutToggleState}
        setAboutToggleState={setAboutToggleState}
      />
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
      <SearchBar
        searchInput={searchInput}
        onSearchInputChange={onSearchInputChange}
        setToggleAllabout={setToggleAllabout}
        setCollapseAllAbout={setCollapseAllAbout}
      />
      {renderUser()}
    </div>
  );
}

export default App;