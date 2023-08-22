import User from "../User/User";
import "./Users.css";

const Users = ({ input, userData, expanded, handleToggleExpanded }) => {
  console.log("expanded", expanded);

  return (
    <article className="Users">
      {userData.length
        ? userData.map((user) => {
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
