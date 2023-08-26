import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";

const API_URL = "https://users-app-backend.onrender.com";

function App() {
  const [userData, setUserData] = useState([]);
  // TODO: Fetch data here

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/users`);
        const json = await response.json();
        // console.log(json.data);
        const { data, error } = json;
        if (response.ok) {
        setUserData(data);
        } else {
          // error handling
        }


      } catch (err) {
        //update error 
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
