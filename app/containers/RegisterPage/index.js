import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from 'components/Layout'
import { useHistory } from 'react-router-dom'

const clg = (...str) => console.log(...str)

function RegisterPage() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const users = localStorage.users ? JSON.parse(localStorage.users) : []
  const register = () => {
    let obj = {
      id: 'user'+new Date().valueOf(),
      email, 
      username, 
      data: []
    }
    localStorage.setItem('users', JSON.stringify([...users, obj]))
    alert('Registered')
    history.push('/login')
  }

  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Description of RegisterPage" />
      </Helmet>
      <Layout>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        <button onClick={register}>Register</button>
      </Layout>
    </>
  );
}

export default RegisterPage;
