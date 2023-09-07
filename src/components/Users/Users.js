import User from "../User/User"
import "./Users.css"
import NoContent from "../NoContent/NoContent"

const Users = ({ input, toggleExpand, expanded, users = [] }) => {
  return (
    <article className="Users">
      {users.length ? (
        users.map((user) => {
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
      ) : (
        <NoContent input={input} />
      )}
    </article>
  )
}

export default Users
