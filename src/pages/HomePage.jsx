import React from 'react'
import Header from '../components/Header'
import ChatList from '../components/ChatList'

const HomePage = ({ toggleSidebar, onChatClick }) => {
  return (
    <>
    <Header toggleSidebar={toggleSidebar}/>
    <ChatList onChatClick={onChatClick}/>
    </>
  )
}

export default HomePage