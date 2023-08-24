import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import User from "./components/User/User";

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

  const [expanded, setExpanded] = useState([]);

  // pass this as a prop to the child
  // this function will toggle the presence of the
  // child's id in the expanded array
  const handleToggleExpanded = (id) => {
    // be careful not to mutate the state -- use copies of expanded array
    // if the id is not in the expanded array, add it to the array
    if (!expanded.includes(id)) {
      // add it to a copy of the expanded array
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      // remove the id from a copy of the expanded array
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  const handleExpandAll = () => {
    // replace the expanded state with an array that has all the ids
    // (all the ids == all the ids in studentData)
    const allIds = userData.map((student) => student.id);
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

  let dataDisplay = userData;

  if (searchInput) {
    dataDisplay = userData.filter((el) => {
      
      const { name } = el;

      return el.includes(searchInput.toLowerCase());
    });
  }

  // if (dataDisplay.length === 0) {
  //   return <div>`No Results for ${searchInput}`</div>;
  // } else {
  //   return (
  //     <div>
  //       {dataDisplay.map((user) => (
  //         <User
  //           key={user.id}
  //           user={user}
  //           expanded={expanded.includes(user.id)}
  //           onClick={() => handleToggleExpanded(user.id)}
  //         />
  //       ))}
  //     </div>
  //   );
  // }

  //Render

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else {
      return <Users 
      users={userData} />;
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar onChange={handleChange} />
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
