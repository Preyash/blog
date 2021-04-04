import React, { useState, useEffect, useRef } from 'react';
import Layout from 'components/Layout'
import { useHistory, Redirect } from 'react-router-dom'
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Select, Radio, Tag, Input, Modal } from 'antd';
import { Helmet } from "react-helmet";
import Posts from 'components/Posts'
const { Option } = Select;
const { TextArea } = Input;

const clg = (...str) => console.log(...str)
const optData = ['test', 'test2', 'test3', 'test4']

export default function HomePage() {
  const history = useHistory()
  const inputRef = useRef()
  const [users, setUsers] = useState(localStorage.users ? JSON.parse(localStorage.users) : [])
  const userId = localStorage.currentUser ? JSON.parse(localStorage.currentUser) : ''
  const currentUser = users.find(i => i.id == userId)
  const [user, setUser] = useState(currentUser)
  const [posts, setPosts] = useState(user && user.data)
  const [objId, setId] = useState()
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState()
  const [order, setOrder] = React.useState(1);

  function selectChange(value) {
    setTags(value)
  }

  const radioChange = e => {
    setOrder(e.target.value);
  };

  const submit = () => {
    if (editMode) {
      const index = posts.findIndex(i => i.id === objId)
      const postObj = posts.find(i => i.id === objId)
      postObj.title = title
      postObj.body = body
      postObj.tags = tags
      postObj.order = order
      user.data[index] = postObj
    } else {
      const obj = { id: new Date().valueOf(), title, body, tags, order }
      user.data = [...user.data, obj]
    }
    setPosts(user.data)
    setUser(user)
    setUsers(users)
    setTitle('')
    setBody('')
    setTags()
    setEditMode(false)
    setIsModalVisible(false)
    inputRef.current.focus()
  }

  const edit = (id) => {
    setIsModalVisible(true);
    const postObj = posts.find(i => i.id === id)
    setTitle(postObj.title)
    setBody(postObj.body)
    setTags(postObj.tags)
    setOrder(postObj.order)
    setEditMode(true)
    setId(id)
  }

  const deleteData = (id) => {
    const userIndex = users.findIndex(i => i.id == userId)
    const newPosts = posts.filter(i => i.id !== id)
    setPosts(newPosts)
    let newUser = { ...user, data: newPosts }
    users[userIndex].data = newUser.data
    localStorage.setItem('users', JSON.stringify(users))
  }


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users, user, posts, title])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    setTitle('')
    setBody('')
    setTags()
    setOrder(1)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      {
        userId === '' ?
          <Redirect to="/login" /> :
          <Layout>
            <Button onClick={showModal}>Add post</Button>
            <br />
            <Modal footer={null} title="Posts" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <main>
                <Input ref={inputRef} type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <br />
                <TextArea rows="3" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
                <br />
                <Select
                  mode="multiple"
                  allowClear
                  className="w100p"
                  placeholder="Select tags"
                  value={tags}
                  onChange={selectChange}
                >
                  {
                    optData.map((i, j) =>
                      <Option key={j} value={i}>{i}</Option>
                    )
                  }
                </Select>
                <br />
                <Radio.Group onChange={radioChange} value={order}>
                  <Radio value={1}>Active</Radio>
                  <Radio value={0}>Inactive</Radio>
                </Radio.Group>
                <br />
                <br />
                <button onClick={submit}>{editMode ? 'Save' : 'Submit'}</button>
              </main>
            </Modal>
            <br />
            <Posts posts={posts} edit={edit} deleteData={deleteData}/>
          </Layout>
      }
    </>
  );
}
