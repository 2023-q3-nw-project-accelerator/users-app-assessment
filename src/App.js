import SearchBar from "./components/SearchBar/SearchBar"
import Users from "./components/Users/Users"
import "./App.css"
import { useEffect, useState } from "react"
import Loading from "./components/Loading/Loading"
import Error from "./components/Error/Error"
import Grid from "./components/Grid/Grid"

function App() {
  // TODO: Fetch data here
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [users, setUsers] = useState([])

  const API_URL = "https://users-app-backend.onrender.com/users"

  async function fetchData() {
    try {
      setError("")
      setLoading(true)
      const response = await fetch(`${API_URL}`)
      const json = await response.json()
      const { data } = json
      console.log("<App /> useEffect() fetched data", data)
      if (response.ok) {
        setUsers(data)
        setLoading(false)
      } else {
        setError(error)
        setLoading(false)
      }
    } catch (error) {
      console.log(`<App /> useEffect error:, ${error.message}`)
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Users users={users} />
    </div>
  )
}
export default App
