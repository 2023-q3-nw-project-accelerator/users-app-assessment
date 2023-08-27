import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";
import useAxios from "./hooks/useAxios";
function App() {
  const API_URL = "https://users-app-backend.onrender.com/users";
  const { data, loading, error } = useAxios(API_URL);
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState([]);

  const filteredUsers = data.filter((user) => {
    return (
      user.name.toLowerCase().includes(input.toLowerCase()) ||
      user.country.toLowerCase().includes(input.toLowerCase()) ||
      user.company.toLowerCase().includes(input.toLowerCase())
    );
  });

  function handleToggleExpanded(id) {
    let newExpanded = [...expanded];
    if (newExpanded.includes(id)) {
      newExpanded = newExpanded.filter((item) => item !== id);
    } else {
      newExpanded.push(id);
    }
    setExpanded(newExpanded);
  }

  function handleExpandAll() {
    setExpanded(data.map((user) => user.id));
  }

  function handleCollapseAll() {
    setExpanded([]);
  }

  function renderContent() {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error}</p>;
    }
    if (data) {
      return (
        <>
          <SearchBar value={input} onChange={setInput} />
          <button onClick={handleExpandAll}>Expand all</button>
          <button onClick={handleCollapseAll}>Collapse All</button>
          {filteredUsers.length ? (
            <Users
              users={filteredUsers}
              expanded={expanded}
              handleToggleExpanded={handleToggleExpanded}
            />
          ) : (
            <p>No results for {input} </p>
          )}
        </>
      );
    }
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderContent()}
    </div>
  );
}

export default App;
