import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import useAxios from "./hooks/useAxios";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import "./App.css";
function App() {
  const API_URL = "https://users-app-backend.onrender.com";
  const { data: users, loading, error } = useAxios(`${API_URL}/users`);
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState([]);

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
    setExpanded(users.map((user) => user.id));
  }

  function handleCollapseAll() {
    setExpanded([]);
  }

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(input.toLowerCase()) ||
      user.country.toLowerCase().includes(input.toLowerCase()) ||
      user.company.toLowerCase().includes(input.toLowerCase())
    );
  });

  function renderContent() {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error error={error} />;
    }
    if (users) {
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
