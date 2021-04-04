import React from 'react';
import List from 'components/List'
import Form from 'components/Form'

export default function HomePage() {
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>User config</h2>
          <Form />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <List/>
        </div>
      </div>
    </div>
  )
}
