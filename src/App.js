import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';

import { useEffect, useState } from 'react';
 


function App() {
  const [users, setUsers] = useState([])

  const API_URL = "https://users-app-backend.onrender.com/users"
  // TODO: Fetch data here

  useEffect(() => {
    console.log(`<App/> useEffect FIRED`)

    async function fetchData() {
      const response = await fetch(`${API_URL}`)
      const json =  await response.json()
        console.log(`<App/> useEffect() fetch data`, json)

       const {data} = json
       setUsers(data) 
      
    }
    fetchData()
  },[])
 

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Users />
    </div>
  );
}

export default App;
