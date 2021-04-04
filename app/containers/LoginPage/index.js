import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from 'components/Layout'
import { Redirect, useHistory } from 'react-router-dom'

const mockUsers = [
  { id: 1, username: 'preyash', email: 'preyash@yopmail.com', data: [{ "id": 1617465251936, "title": "post", "body": "asdfasdfasdf", "tags": ["test", "test3"], "order": 1 }, { "id": 1617466595144, "title": "post2", "body": "uiouiopuoi", "tags": ["test3", "test4"], "order": 0 }, { "id": 1617466613351, "title": "post3", "body": "njunkie", "tags": ["test"], "order": 1 }] },
  { id: 2, username: 'dharmin', email: 'dharmin@yopmail.com', data: [{ "id": 1617470666605, "title": "test post", "body": "ijoasdfiagjoeiw", "tags": ["test", "test2", "test3"], "order": 1 }] },
]

const clg = (...str) => console.log(...str)

function LoginPage() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const users = localStorage.users ? JSON.parse(localStorage.users) : []
  const userId = localStorage.currentUser ? JSON.parse(localStorage.currentUser) : ''
  const login = () => {
    let obj = users.find(i => i.username === username)
    if (obj !== undefined) {
      localStorage.setItem('currentUser', JSON.stringify(obj.id))
      history.push('/home')
    } else {
      alert('User doesn\'t exist')
    }
    setUsername('')
  }

  return (
    <>
      {
        userId ?
          <Redirect to='/home' /> :
          <div>
            <Helmet>
              <title>Login</title>
              <meta name="description" content="Description of LoginPage" />
            </Helmet>
            <Layout>
              <h1>Login page</h1>
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
              <button onClick={login}>Login</button>
              <br />
              <br />
              <p>
                New user?
          <button onClick={() => history.push('/register')}>Register</button>
              </p>
            </Layout>
          </div>
      }
    </>
  );
}

export default LoginPage;
