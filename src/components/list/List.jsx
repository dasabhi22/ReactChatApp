import React from 'react'
import './list.css'
// import ChatList from './chatList/ChatList'
// import UserInfo from './userinfo/Userinfo'
import UserInfo from "./userinfo/UserInfo"
import ChatList from "./chatList/ChatList"

const List = () => {
  return (
    <div className='list'>
        <UserInfo/>
        <ChatList />
    </div>
  )
}

export default List