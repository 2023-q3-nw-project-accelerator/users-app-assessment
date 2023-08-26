import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], searchInput, expanded, setExpanded }) => {
  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  if (users.length === 0) {
    return <div>No results for {searchInput}</div>;
  } else {
    return (
      <article className="Users">
        {users.map((user) => {
          const { id } = user;
          return (
            <User
              key={id}
              user={user}
              expanded={expanded.includes(user.id)}
              onClick={() => handleToggleExpanded(user.id)}
            />
          );
        })}
      </article>
    );
  }
};

export default Users;
