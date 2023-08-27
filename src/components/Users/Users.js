import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], expand, handleSingleExpand, handleSingleCollapse }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        const display = expand.indexOf(id) > -1;
        return (
          <User
            key={id}
            user={user}
            expand={display}
            handleSingleExpand={handleSingleExpand}
            handleSingleCollapse={handleSingleCollapse}
          />
        );
      })}
    </article>
  );
};

export default Users;
