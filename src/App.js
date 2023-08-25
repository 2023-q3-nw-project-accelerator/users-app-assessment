import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Container from "./components/Container/Container";
import { filterUsers } from "./Helper/FilterUser";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [expand, setExpand] = useState([]);

  let usersToDisplay = userData;

  // if user types a search the usersToDisplay will filter only the users that match the search.
  if (searchInput) {
    usersToDisplay = filterUsers(usersToDisplay, searchInput);
  }

  //render function will either display loading, or users, or error message if either of their state is truthy.
  const render = (loading, error) => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return usersToDisplay.length ? (
        <Users users={usersToDisplay} expand={expand} />
      ) : (
        <h3>No Users To Display with the search of {searchInput}</h3>
      );
    }
  };

  const fetchData = () => {
    const PORT = process.env.REACT_APP_API_URL;

    // Fetch users data
    axios
      .get(`${PORT}`)
      .then((res) => {
        // res.map((el) => el);
        const responseIsOk = res.status === 200;
        const data = res.data.data;
        const error = res.data;

        // Check if response status is ok
        if (responseIsOk) {
          // handle success.
          setUserData(data);
        } else {
          // handle error.

          setError(error);
        }
        //stop showing the user the loading UI...
        setLoading(false);
      })
      .catch((error) => {
        // handle error.

        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Updates the searchInput state with the user input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // expands all the users about section
  const handleExpandALL = () => {
    const userIds = usersToDisplay.map((user) => user.id);
    console.log(userIds);
    setExpand(userIds);
  };

  //Collapse all the users about section
  const handleCollapseALL = () => {
    const userIds = [];
    console.log(userIds);
    setExpand(userIds);
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar
        value={searchInput}
        onChange={handleChange}
        handleExpandALL={handleExpandALL}
        handleCollapseALL={handleCollapseALL}
      />
      <Users />
      {/* if loading display Loading component else if error display error else display Users component */}
      {<Container center={error || loading}>{render(loading, error)}</Container>}
    </div>
  );
}

export default App;
