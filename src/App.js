import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/users`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setUserData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        console.log(`<App/> useEffect error: ${err.message}`);
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  let dataToDisplay = userData;

  if (input) {
    dataToDisplay = userData.filter((user) => {
      const { name, country, company } = user;
      const userDetails = `${name} ${country} ${company}`.toLowerCase();

      return userDetails.includes(input.toLowerCase());
    });
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return (
        <div>
          <SearchBar input={input} handleChange={handleChange} />
          <Users input={input} userData={dataToDisplay} />
        </div>
      );
    }
  };

  console.log(
    "data",
    userData,
    "loading",
    loading,
    "error",
    error,
    "input",
    input
  );

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderContent()}
    </div>
  );
}

export default App;
