import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], expanded, handleToggleExpanded, searchInput }) => {
  return (
    <article className="Users">
      {users.length !== 0
        ? users.map((user) => {
            const { id } = user;
            return (
              <User
                key={id}
                user={user}
                expanded={expanded.includes(user.id)}
                onClick={() => handleToggleExpanded(user.id)}
              />
            );
          })
        : `No results for ${searchInput}`}
    </article>
  );
};

export default Users;
