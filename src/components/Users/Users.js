import User from '../User/User';
import { useState } from 'react';
import './Users.css';
import gereral_ from '../../general_';
////////////////////////////////////////////////
const Users = ({ users }) => {
  const [aboutToggleState, setAboutToggleState] = useState({});
  ////////////////////////////////////////////////
  gereral_.setToggleAllabout(() =>{
    const ret = {};
    for(let {id} of users) ret[id] = true;
    setAboutToggleState(ret);
  })
  gereral_.setCollapseAllAbout(() =>{
    const ret = {};
    for(let {id} of users) ret[id] = false;
    setAboutToggleState(ret);
  })
  const handleUserToggleAbout = (id) => {
    setAboutToggleState(pv => {
      if(pv[id]){
        return {...pv, [id]: !pv[id]};
      }else{
        return {...pv, [id]: true}
      }
    });
  }
  ////////////////////////////////////////////////
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return <User 
          key = {id} 
          user = {user} 
          aboutState = {aboutToggleState[id]} 
          handleUserToggleAbout = {handleUserToggleAbout} 
        />;
      })}
    </article>
  );
};

export default Users;
