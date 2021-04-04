import React from 'react';
import { Navbar } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const clg = (...str) => console.log(...str)

const Example = () => {
	const history = useHistory()
	const userId = localStorage.currentUser ? JSON.parse(localStorage.currentUser) : ''
	const users = localStorage.users ? JSON.parse(localStorage.users) : []
	const obj = users.find(i=>i.id === userId)
	const logout = () => {
		localStorage.removeItem('currentUser')
		history.push('/login')
	}
	return (
		<Navbar className="h80 fullFlex p0-50">
			<h1>{obj && obj.username}</h1>
			<button onClick={logout}>Logout</button>
		</Navbar>
	);
}

export default Example;