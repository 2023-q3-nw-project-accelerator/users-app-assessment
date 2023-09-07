import User from "../User/User"
import "./Users.css"

const Users = ({ input, toggleExpand, expanded, users = [] }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user
        return (
          <User
            key={id}
            user={user}
            expanded={expanded.includes(user.id)}
            toggleExpand={() => toggleExpand(user.id)}
          />
        )
      })}
    </article>
  )
}

export default Users
