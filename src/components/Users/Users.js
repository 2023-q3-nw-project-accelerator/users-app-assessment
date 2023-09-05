import User from "../User/User"
import "./Users.css"

const Users = ({ input, toggleExpand, expanded, users = [] }) => {
  return (
    <article className="Users">
      {users.length
        ? users.map((user) => {
            const { id } = user
            return (
              <User
                key={id}
                user={user}
                expanded={expanded.includes(user.id)}
                toggleExpand={() => toggleExpand(user.id)}
              />
            )
          })
        : `no results for: ${input}`}
    </article>
  )
}

export default Users
