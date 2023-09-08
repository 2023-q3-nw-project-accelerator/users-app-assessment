import User from "../User/User";

const Users = ({ users = [], expanded, handleToggleExpanded}) => {
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
};

export default Users;
