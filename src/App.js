import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";

const API_URL = "https://users-app-backend.onrender.com/users";

function App() {
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");
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
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  let dataToDisplay = users;
  if (input) {
    dataToDisplay = users.filter((user) => {
      const { name, company, country } = user;
      const fullName = `${name} ${company} ${country}`.toLowerCase();

      return fullName.includes(input.toLowerCase());
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
    setExpanded([])
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="App__loading">
          <Loading />
        </div>
      );
    } else if (error) {
      return <Error error={error} />;
    }
    if (!dataToDisplay.length) {
      return <div className="App__no content">No items found!</div>;
    }
    
  };
  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar
        handleChange={handleChange}
        input={input}
        handleExpandAll={handleExpandAll}
        handleCollapseAll={handleCollapseAll}
      />
       <Users
        users={dataToDisplay}
        input={input}
        expanded={expanded}
        handleToggleExpanded={handleToggleExpanded}
      />
      <Container center={Boolean(error || loading)} scroll={false}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
