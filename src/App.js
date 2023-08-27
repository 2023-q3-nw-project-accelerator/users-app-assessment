import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Error from "./components/Error/Error";
import NoResults from "./components/NoResults/NoResults";
import Loading from "./components/Loading/Loading";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";

const API_URL = "https://users-app-backend.onrender.com/users";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setUsers(data);
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

  let dataToDisplay = users;
  if (input) {
    dataToDisplay = users.filter((user) => {
      const { name, company, country } = user;
      const userName = `${name} ${company} ${country}`.toLowerCase();
      return userName.includes(input.toLowerCase());
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
    const allIds = users.map((user) => user.id);
    setExpanded(allIds);
  };
  const handleCollapseAll = () => {
    setExpanded([]);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const renderContent = () => {
    if (loading) {
      return (
          <Loading />
      );
    } else if (error) {
      return <Error error={error} />;
    }
    if (!dataToDisplay.length) {
      return <NoResults input={input} />;
    }
    return (
      <div className="App__users">
        <Users
          users={dataToDisplay}
          input={input}
          expanded={expanded}
          handleToggleExpanded={handleToggleExpanded}
        />
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <div>
        <SearchBar
          handleInput={handleInput}
          input={input}
          handleExpandAll={handleExpandAll}
          handleCollapseAll={handleCollapseAll}
        />
      </div>
      <div>
        <Container center={Boolean(error || loading || input)} scroll={false}>
        {renderContent()}
        </Container>
      </div>
    </div>
  );
}

export default App;
