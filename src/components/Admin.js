import React, {useState} from 'react'
import './Admin.css'
import axios, { Axios } from 'axios'

function Admin() {
    //states to hold data from input fields and to submit to back-end
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const addUser = () => {
        console.log(userName)
        axios.post('http://localhost:3001/user', {userName: userName, password: password}).then(() => console.log('posted'))
    }

  return (
    <div className="admin">
      <h1>ADMIN</h1>
      <div className="information">
        <label>Create a User</label>
        <input type="text" onChange={(event) => {setUserName(event.target.value)}} />
        <label>Create password</label>
        <input type="text" onChange={(event) => {setPassword(event.target.value)}}/>
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
}

export default Admin