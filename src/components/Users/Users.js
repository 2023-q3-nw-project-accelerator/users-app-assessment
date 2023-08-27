import User from "../User/User";
import "./Users.css";

const Users = ({ users, input, expanded, handleToggleExpanded }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return (
          < User
            key={id}
            user={user}
            input={input}
            expanded={expanded.includes(user.id)}
            onClick={() => handleToggleExpanded(user.id)}
          />
        );
      })}
    </article>
  );
};

export default Users;
