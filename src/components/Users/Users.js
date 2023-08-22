import User from "../User/User";
import "./Users.css";

const Users = ({ input, userData }) => {
  return (
    <article className="Users">
      {userData.length
        ? userData.map((user) => {
            const { id } = user;
            return <User key={id} user={user} />;
          })
        : `No results for ${input}!`}
    </article>
  );
};

export default Users;
