import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import useAxios from "./hooks/useAxios";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import "./App.css";
function App() {
  const API_URL = "https://users-app-backend.onrender.com/users";
  const { data, loading, error } = useAxios(API_URL);
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
    setExpanded(data.map((user) => user.id));
  }

  function handleCollapseAll() {
    setExpanded([]);
  }

  function renderContent() {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error error={error} />;
    }
    if (data) {
      return (
        <>
          <SearchBar value={input} onChange={setInput} />
          <button onClick={handleExpandAll}>Expand all</button>
          <button onClick={handleCollapseAll}>Collapse All</button>

          <Users
            users={data}
            input={input}
            expanded={expanded}
            handleToggleExpanded={handleToggleExpanded}
          />
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
