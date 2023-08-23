import User from "../User/User"
import "./Users.css"

const Users = ({ toggleExpand, expanded, users = [] }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user
        return (
          <User
            key={id}
            user={user}
            expanded={expanded}
            toggleExpand={toggleExpand}
          />
        )
      })}
    </article>
  )
}

export default Users
