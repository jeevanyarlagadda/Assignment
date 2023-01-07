import React, { useState, useEffect } from 'react';
import "./style.css";
import Search from './Search.js';
import Showdata from './Showdata.js';

export default function App() {
  const [users, setUsers] = useState([])
  const [inputText, setInputText] = useState("");
  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data.data);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  let inputHandler = (event) => {
    var lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <div><input type="text" placeholder="Search by the first name"
      onChange = {(event) => inputHandler(event)} value={inputText}/></div>
      <Search users= {users} input={inputText}/>
      <Showdata users={users}/>

      <h1>Hello Greendzine</h1>
      <p>Seaarch for the employee by first name :)</p>
    </div>
  );
}
