import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], expand }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        const display = expand.indexOf(id) > -1;
        return <User key={id} user={user} expand={display} />;
      })}
    </article>
  );
};

export default Users;
