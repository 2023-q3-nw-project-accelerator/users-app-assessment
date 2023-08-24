import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";


const API_URL = "https://users-app-backend.onrender.com/users";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState([]);

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

  

  const handleToggleExpanded = (id) => {
   
    if (!expanded.includes(id)) {
     
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
     
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  const handleExpandAll = () => {
    const allIds = userData.map((x) => x.id);
    setExpanded(allIds);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

  //Search

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  let dataDisplay = userData
  
  if (searchInput) {
    dataDisplay = userData.filter((el) => {
      
      const { name, country, company } = el;

      const userInfo = `${name} ${company} ${country}`.toLowerCase()

      return userInfo.includes(searchInput.toLowerCase());
    });
  }

  

  //Render

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else {
      return <Users 
      users={dataDisplay} 
      searchInput={searchInput}
      expanded={expanded}
      handleToggleExpanded={handleToggleExpanded}/>;
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar 
      handleChange={handleChange} 
      searchInput={searchInput}
      handleCollapseAll={handleCollapseAll}
      handleExpandAll={handleExpandAll}
      />
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
