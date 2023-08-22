import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/users`);
        const json = await response.json();
        const { data } = json;
        if (response.ok) {
          console.log(data);
          setUserData(data);
        }
      } catch (err) {
        console.log(`<App/> useEffect error: ${err.message}`);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Users />
    </div>
  );
}

export default App;
