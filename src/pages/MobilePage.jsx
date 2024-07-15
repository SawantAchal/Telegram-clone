import React from 'react'
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import { FaPen } from 'react-icons/fa';

const MobilePage = ({ toggleSidebar, onChatClick }) => {
  return (
    <div className="relative h-screen flex flex-col">
      <div className='md:hidden'>
        <Header toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <ChatList onChatClick={onChatClick} toggleSidebar={toggleSidebar} />
      </div>
      <div className="fixed bottom-4 right-4 cursor-pointer">
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          <FaPen size={20} />
        </button>
      </div>
    </div>
  )
}

export default MobilePage