import Container from "./components/Container/Container";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import NoContent from "./components/NoContent/NoContent";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useState, useEffect } from "react";

const API_URL = "https://users-app-backend.onrender.com";

function App() {
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
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
    setInput(e.target.value);
  };

  let dataToDisplay = userData;

  if (input) {
    const userInputToLowerCase = input.toLowerCase();

    dataToDisplay = userData.filter((user) => {
      const { name, country, company } = user;

      return (
        name.toLowerCase().includes(userInputToLowerCase) ||
        country.toLowerCase().includes(userInputToLowerCase) ||
        company.toLowerCase().includes(userInputToLowerCase)
      );
    });
  }

  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  const handleExpandAll = () => {
    const allIds = userData.map((user) => user.id);
    setExpanded(allIds);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else if (!dataToDisplay.length) {
      return <NoContent input={input} />;
    } else {
      return (
        <Users
          input={input}
          users={dataToDisplay}
          expanded={expanded}
          handleToggleExpanded={handleToggleExpanded}
        />
      );
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar
        input={input}
        handleChange={handleChange}
        handleExpandAll={handleExpandAll}
        handleCollapseAll={handleCollapseAll}
      />
      <Container
        center={Boolean(error || loading || !dataToDisplay.length)}
        loading={loading}
        error={error}
      >
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
