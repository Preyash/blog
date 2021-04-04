import React from 'react'
import { atom, useAtom } from 'jotai'
import { initialState, usersData, editMode } from "store";

const App = () => {
  const [users, setUsers] = useAtom(usersData)
  const [, setEditing] = useAtom(editMode)
  const [, setUser] = useAtom(initialState)

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    const { id, name, username } = user
    setEditing(true)
    setUser({ id, name, username })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => editRow(user)}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default App