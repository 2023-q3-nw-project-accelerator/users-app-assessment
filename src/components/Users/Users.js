import User from '../User/User';
import './Users.css';
////////////////////////////////////////////////
const Users = ({ filteredUser, aboutToggleState, setAboutToggleState }) => {
  ////////////////////////////////////////////////
  const handleUserToggleAbout = (id) => {
    setAboutToggleState(previous => {
      if (previous[id]) {
        return { ...previous, [id]: !previous[id] };
      } else {
        return { ...previous, [id]: true };
      }
    });
  }
  ////////////////////////////////////////////////
  return (
    <article className="Users">
      {filteredUser.map((user) => {
        const { id } = user;
        return <User
          key={id}
          user={user}
          aboutState={aboutToggleState[id]}
          handleUserToggleAbout={handleUserToggleAbout}
        />;
      })}
    </article>
  );
};

export default Users;
