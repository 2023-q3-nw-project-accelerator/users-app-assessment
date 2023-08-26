import User from "../User/User";
import "./Users.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Users = ({ users = [] }) => {
  console.log(`Users Rendered!`);
  
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="Users__controls">
    <span>
    <SearchBar />
    <button onClick={(expanded)}>Expand All</button>
    <button onClick={(!expanded)}>Collapse All</button>
    </span>
      
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
