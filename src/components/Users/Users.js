import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], searchInput }) => {
  if (users.length === 0) {
    return <div>No results for {searchInput}</div>;
  } else {
    return (
      <article className="Users">
        {users.map((user) => {
          const { id } = user;
          return <User key={id} user={user} />;
        })}
      </article>
    );
  }
};

export default Users;
