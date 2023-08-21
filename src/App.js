import React,{useState,Fragment} from 'react';
import './App.css';
import User from './COMPONENT/USER/User';
import UserList from './COMPONENT/USER/UserList';

function App() {
  const [userList,setUserList]=useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name: uName, age: uAge , id: Math.random().toString()}];
    })
  }

  return (
    <Fragment>
      <User onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </Fragment>
  );
}

export default App;
