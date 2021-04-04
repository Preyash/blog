import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { initialState, usersData, editMode } from "store";

const clg = (...str) => console.log(...str)

const App = (props) => {
  const [users, setUsers] = useAtom(usersData)
  const [user, setUser] = useAtom(initialState)
  const [editing, setEditing] = useAtom(editMode)

  useEffect(()=>{
    localStorage.setItem('localUsers', JSON.stringify(users))
  }, [user])

  const inputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!user.name || !user.username) return
    if (editing) {
      setEditing(false)
      setUsers(users.map((i) => (i.id === user.id ? user : i)))
    } else {
      user.id = new Date().valueOf()
      setUsers([...users, user])
    }
    setUser(initialState.init)
  }

  const { name, username } = user
  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={inputChange}/>
      <label>Username</label>
      <input type="text" name="username" value={username} onChange={inputChange} />
      <button>{editing ? 'Save user' : 'Add user'}</button>
    </form>
  )
}

export default App