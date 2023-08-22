import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading"
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";

const API_URL = "https://users-app-backend.onrender.com/users";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}`);
        const json = await response.json();
        const { error, data } = json;

        if (response.ok) {
          setUserData(data);
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

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error/>;
    } else {
      return <Users users={userData}/>;
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Container>{renderContent()}</Container>
    </div>
  );
}

export default App;
