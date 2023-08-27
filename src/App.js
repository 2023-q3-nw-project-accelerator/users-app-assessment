import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import "./App.css";

const API_URL = "https://users-app-backend.onrender.com";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/users`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setUserData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleExpandAll = () => {
    const allIds = userData.map((user) => user.id);
    setExpanded(allIds);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

  let dataToDisplay = userData;
  if (searchInput) {
    dataToDisplay = userData.filter((user) => {
      const { name, country, company } = user;
      let searchLowerCase = searchInput.toLowerCase();

      return (
        name.toLowerCase().includes(searchLowerCase) ||
        country.toLowerCase().includes(searchLowerCase) ||
        company.toLowerCase().includes(searchLowerCase)
      );
    });
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return (
        <Users
          users={dataToDisplay}
          searchInput={searchInput}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      );
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <div className="App__control">
        <SearchBar searchInput={searchInput} handleChange={handleChange} />
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>

      {renderContent()}
    </div>
  );
}

export default App;
