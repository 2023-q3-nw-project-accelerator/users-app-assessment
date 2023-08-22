import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import Loading from "./components/Loading/Loading";
import "./App.css";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/users`);
        const json = await response.json();
        const { data } = json;
        if (response.ok) {
          setUserData(data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.log(`<App/> useEffect error: ${err.message}`);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else {
      return <Users userData={userData} />;
    }
  };

  console.log(userData, loading);

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      {renderContent()}
      {/* <Users /> */}
    </div>
  );
}

export default App;
