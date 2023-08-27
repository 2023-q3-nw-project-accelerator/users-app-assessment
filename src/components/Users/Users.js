import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], input, expanded, handleToggleExpanded }) => {
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(input.toLowerCase()) ||
      user.country.toLowerCase().includes(input.toLowerCase()) ||
      user.company.toLowerCase().includes(input.toLowerCase())
    );
  });

  if (filteredUsers.length === 0) {
    return <p>No results for {input} </p>;
  }

  return (
    <article className="Users">
      {filteredUsers.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            expanded={expanded.includes(id)}
            handleToggleExpanded={handleToggleExpanded}
          />
        );
      })}
    </article>
  );
};

export default Users;
