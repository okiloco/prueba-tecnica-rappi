import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, Provider, useStore } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { startGetUsers, getCurrentUsers } from './redux/actions';
/* import UserList from './pages/users/UserList' */
import UserList from './containers/users';
import Header from './components/header/Header'

function App(props) {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(getCurrentUsers())
      /* dispatch(startGetUsers()) */
      setUsers([{}])
    }
  })
  return (
    <>
      <div className="App">
        <Header />
        <UserList />
      </div>
    </>
  );
}

export default App;
