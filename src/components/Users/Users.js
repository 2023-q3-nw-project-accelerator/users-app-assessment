import { useState } from "react";
import User from "../User/User";
import "./Users.css";

const Users = ({ input, userData }) => {
  const [expanded, setExpanded] = useState([]);

  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  console.log("expanded", expanded);

  return (
    <article className="Users">
      {userData.length
        ? userData.map((user) => {
            const { id } = user;
            return (
              <User
                key={id}
                user={user}
                expanded={expanded.includes(user.id)}
                onClick={() => handleToggleExpanded(user.id)}
              />
            );
          })
        : `No results for ${input}!`}
    </article>
  );
};

export default Users;
