import User from '../User/User';
import './Users.css';
import SearchBar from '../SearchBar/SearchBar';

const Users = ({ users = [] }) => {
  console.log(`Users Rendered!`)

// let dataToDisplay = users

// dataToDisplay = users.filter((user) => {
//   const name = `${name}`.toLowerCase()
//   const country = `${country}`.toLowerCase()
//   const company = `${company}`.toLowerCase()

//   return 
// })


  return (
    <div className='Users__searchbar'>
    <SearchBar/>
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </article>
    </div>
  );
};

export default Users;
