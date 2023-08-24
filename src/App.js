import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const PORT = process.env.REACT_APP_API_URL;

    // Fetch users data
    axios
      .get(PORT)
      .then((res) => {
        const responseIsOk = res.status === 200;
        const data = res.data;

        // Check if response status is ok
        if (responseIsOk) {
          console.log(data);
          // handle success.
          setUserData(data);
        } else {
          // handle error.
          setError(error);
        }
        //stop showing the user the loading UI...
        setLoading(false);
      })
      .catch((error) => {
        // handle error.
        setError(error);
        setLoading(false);
      });
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
