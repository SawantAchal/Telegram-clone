import React, { useState } from 'react'
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import { useTheme } from '../contexts/ThemeContext';

const DesktopPage = ({ toggleSidebar,}) => {
    const [selectedChatId, setSelectedChatId] = useState(null);
    const { darkMode } = useTheme();

  const handleChatClick = (id) => {
    setSelectedChatId(id);
  };

  const handleChatBack = () => {
    setSelectedChatId(null);
  };
  return (
    <div className="flex h-screen">
      <div className={`w-[30%]  border-r  overflow-y-auto ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
        <ChatList onChatClick={handleChatClick} toggleSidebar={toggleSidebar}/>
        </div>
      <div className="w-[70%] flex items-center justify-center bg-gray-200 dark:bg-gray-800 p-4  bg-no-repeat bg-cover" style={{ backgroundImage: `${darkMode ? "url('/bgchatwindowdarkmode.png')" : "url('/bgchatwindow.png')"}`}}>
        {selectedChatId ? (
          <ChatWindow chatId={selectedChatId} onChatBack={handleChatBack} />
        ) : (
          <p className={`${darkMode ?'text-gray-400' : 'text-gray-500'} `}>Select a chat to start messaging</p>
        )}
      </div>
  </div>
  )
}

export default DesktopPage