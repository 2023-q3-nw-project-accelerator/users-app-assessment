import SearchBar from "./components/SearchBar/SearchBar"
import Users from "./components/Users/Users"
import "./App.css"
import { useEffect, useState } from "react"
import Loading from "./components/Loading/Loading"
import Error from "./components/Error/Error"
import Grid from "./components/Grid/Grid"

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [users, setUsers] = useState([])
  const [input, setInput] = useState("")
  const [expanded, setExpanded] = useState([])

  const API_URL = "https://users-app-backend.onrender.com/users"

  async function fetchData() {
    try {
      setError("")
      setLoading(true)
      const response = await fetch(`${API_URL}`)
      const json = await response.json()
      const { data, error } = json

      if (response.ok) {
        setUsers(data)
        setLoading(false)
      } else {
        setError(error)
        setLoading(false)
      }
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const toggleExpand = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id]
      setExpanded(newExpanded)
    } else {
      const removeId = expanded.filter((currentId) => currentId !== id)
      setExpanded(removeId)
    }
  }

  const handleExpandAll = () => {
    const userId = users.map((user) => user.id)
    setExpanded(userId)
  }

  const handleCollapseAll = () => {
    setExpanded([])
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  let dataToDisplay = users

  if (input) {
    const searchLowerCase = input.toLowerCase()

    dataToDisplay = users.filter((user) => {
      const { name, country, company } = user

      const nameLowerCase = name.toLowerCase()
      const countryLowerCase = country.toLowerCase()
      const companyLowerCase = company.toLowerCase()

      return (
        nameLowerCase.includes(searchLowerCase) ||
        countryLowerCase.includes(searchLowerCase) ||
        companyLowerCase.includes(searchLowerCase)
      )
    })
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (error) {
      return <Error error={error} />
    } else {
      return (
        <Users
          input={input}
          users={dataToDisplay}
          expanded={expanded}
          toggleExpand={toggleExpand}
        />
      )
    }
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar
        handleChange={handleChange}
        input={input}
        handleExpandAll={handleExpandAll}
        handleCollapseAll={handleCollapseAll}
      />
      <Grid center={Boolean(error || loading || !dataToDisplay.length)}>
        {renderContent()}
      </Grid>
    </div>
  )
}
export default App
