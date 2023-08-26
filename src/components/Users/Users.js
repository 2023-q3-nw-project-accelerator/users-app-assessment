import User from "../User/User";
import "./Users.css";

const Users = ({ input, users = [], expanded, handleToggleExpanded }) => {
  return (
    <article className="Users">
      {users.length
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
        : `No results for ${input}!`}
    </article>
  );
};

export default Users;
