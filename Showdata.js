import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
const Showdata = (props) => {


  return (
    <div>
      {console.log(props.users)}
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user,index) => (
            <div>
              <p>User: {index+1}</p>
            <li key={user.id}>{user.id}</li>
            <li key={user.id}>{user.first_name}</li>
            <li key={user.id}>{user.last_name}</li>
            <li key={user.id}>{user.email}</li>
            </div>
          ))}

        </ul>
      )}
    </div>
  )
}
export default Showdata;