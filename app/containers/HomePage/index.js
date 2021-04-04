import React, { useState, useEffect, useRef } from 'react';
import UserTable from 'components/UserTable'
import DataForm from 'components/DataForm'

export default function HomePage() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const initialState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialState)
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const addUser = (user) => {
    user.id = new Date().valueOf()
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    const { id, name, username } = user
    setEditing(true)
    setUser({ id, name, username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      
      <div className="flex-row">
        <div className="flex-large">
          <h2>User config</h2>
          <DataForm 
            editing={editing}
            user={user}
            setUser={setUser}
            addUser={addUser}
            updateUser={updateUser}
          />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}
