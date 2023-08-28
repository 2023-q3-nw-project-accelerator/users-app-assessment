import User from "../User/User";
import "./Users.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Users = ({ users = [] }) => {

  console.log(`Users Rendered!`);
  

  return (
    <div className="Users__controls">
    <SearchBar users={users}/>
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
