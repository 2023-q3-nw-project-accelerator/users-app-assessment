import Users from './components/Users/Users';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import './App.css';

import { useEffect, useState } from 'react';
 


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const API_URL = "https://users-app-backend.onrender.com/users"

  useEffect(() => {
    console.log(`<App/> useEffect FIRED`)
    setLoading(true)

    async function fetchData() {
      try{

        const response = await fetch(`${API_URL}`)
        const json = await response.json()
          console.log(`<App/> useEffect() fetch data`, json)
  
         const {data} = json
         data.split(',')
         setUsers(data) 
        setLoading(false)
      }catch (err) {
        console.log(`<App/> useEffect erorr: ${err.message}`)
        setLoading(false)
        setError(err.message)
      }
    }
    fetchData()
  },[])

  const renderContent = () => {
    if (loading) {
      return <Loading/>
    }else if (error) {
      return <Error error={error} />
    }else{
      return <Users users={users}/>
    }
  }


 console.log(`<App/> Rendered! error=${error} loading=${loading} number of users=${users.length}`)

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderContent()}
    </div>
  );
}

export default App;
