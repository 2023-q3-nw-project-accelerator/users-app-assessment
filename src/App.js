import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";
import useAxios from "./hooks/useAxios";
function App() {
  const API_URL = "https://users-app-backend.onrender.com/users";
  const { data, loading, error } = useAxios(API_URL);
  const [input, setInput] = useState("");

  console.log(data, loading, "error ", error);
  function filterUsers() {
    return data.filter((user) => {
      return (
        user.name.toLowerCase().includes(input.toLowerCase()) ||
        user.country.toLowerCase().includes(input.toLowerCase()) ||
        user.company.toLowerCase().includes(input.toLowerCase())
      );
    });
  }
  console.log(input);
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
          <Users users={filterUsers()} />;
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
