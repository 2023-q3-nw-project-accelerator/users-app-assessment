import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import axios from "axios";
import "./App.css";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    return axios
      .get(API)
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

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

  const renderContent = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (error) {
      return <h1>Error: {error}</h1>;
    } else {
      return (
        <Users
          users={users}
          input={input}
          expanded={expanded}
          handleToggleExpanded={handleToggleExpanded}
        />
      );
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar input={input} onChange={onChange} />
      <button
        onClick={() => {
          handleExpandAll();
        }}
      >
        Expand All
      </button>
      <button
        onClick={() => {
          handleCollapseAll();
        }}
      >
        Collapse All
      </button>
      {renderContent()}
    </div>
  );
}

export default App;
