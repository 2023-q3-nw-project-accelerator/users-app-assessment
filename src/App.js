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
  const [input, setInput] = useState("")
  const [expand, setExpand] = useState([])

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

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleExpandAll = () => {}

  const handleCollapseAll = () => {
    setExpand([])
  }

  let datatToDisplay = users

  if(input){
    datatToDisplay = users.filter((user)=>{
      const {name, country, company }= user
      const userDetails = `${name} ${country} ${company}`.toLowerCase()
      return userDetails.includes(input.toLowerCase())
  })

  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (error) {
      return <Error error={error} />
    } else {
      return <Users users={users} />
    }
  }
  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar
        expand={expand}
        handleChange={handleChange}
        input={input}
        handleExpandAll={handleExpandAll}
        handleCollapseAll={handleCollapseAll}
      />
      <Grid>{renderContent()}</Grid>
    </div>
  )
}
export default App
