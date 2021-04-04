import React, { useState, useEffect } from 'react'

const App = (props) => {
  const { editing, addUser, user, setUser, updateUser } = props
  const initialFormState = { id: null, name: '', username: '' }

  useEffect(() => {
    editing && setUser(user)
  }, [props])

  const inputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!user.name || !user.username) return
    if (editing) {
      updateUser(user.id, user)
    } else {
      addUser(user)
    }
    setUser(initialFormState)
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