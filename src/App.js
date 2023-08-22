import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import Loading from './components/Loading/Loading';
import './App.css';

import { useEffect, useState } from 'react';
 


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const API_URL = "https://users-app-backend.onrender.com/users"

  useEffect(() => {
    console.log(`<App/> useEffect FIRED`)
    setLoading(true)

    async function fetchData() {
      const response = await fetch(`${API_URL}`)
      const json = await response.json()
        console.log(`<App/> useEffect() fetch data`, json)

       const {data} = json
       setUsers(data) 
      setLoading(false)
    }
    fetchData()
  },[])
 console.log(`<App/> Rendered! loading=${loading} number of users=${users.length}`)

  return (
    <div className="App">
      <h1>Our Users</h1>
      {loading ? <Loading/> : <SearchBar /> && <Users users={users}/>}
      
    </div>
  );
}

export default App;
