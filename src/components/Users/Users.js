import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], input, expanded, handleToggleExpanded }) => {
  const renderFilteredUsers = () => {
    let filteredUsers = [];

    if (input !== "") {
      filteredUsers = users.filter((user) => {
        return (
          user.name.toLowerCase().includes(input.toLowerCase()) ||
          user.country.toLowerCase().includes(input.toLowerCase()) ||
          user.company.toLowerCase().includes(input.toLowerCase())
        );
      });
    } else {
      filteredUsers = users;
    }

    if (filteredUsers.length === 0) {
      return <h1>No results for {input}</h1>;
    } else {
      return filteredUsers.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            expanded={expanded.includes(id)}
            handleToggleExpanded={handleToggleExpanded}
          />
        );
      });
    }
  };

  return <article className="Users">{renderFilteredUsers()}</article>;
};

export default Users;
