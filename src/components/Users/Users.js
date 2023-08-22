import User from '../User/User';
import './Users.css';

const Users = ({ userData }) => {
  return (
    <article className="Users">
      {userData.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </article>
  );
};

export default Users;
