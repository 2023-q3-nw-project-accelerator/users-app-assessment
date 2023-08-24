import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Container from "./components/Container/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //render function will either display loading, or users, or error message if either of their state is truthy.
  const render = (loading, error) => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      console.log("render", error);
      return <Error error={error} />;
    } else {
      return <Users users={userData} />;
    }
  };

  useEffect(() => {
    const PORT = process.env.REACT_APP_API_URL;

    // Fetch users data
    axios
      .get(PORT)
      .then((res) => {
        // res.map((el) => el);
        const responseIsOk = res.status === 200;
        const data = res.data.data;
        const error = res.data;

        // Check if response status is ok
        if (responseIsOk) {
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
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Users />
      {/* if loading display Loading component else if error display error else display Users component */}
      {<Container center={error || loading}>{render(loading, error)}</Container>}
    </div>
  );
}

export default App;
