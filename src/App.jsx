import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatPage from './pages/ChatPage'; // Update import as per your project structure
import { useTheme } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarVisible]);

  const handleChatClick = (id) => {
    setSelectedChatId(id);
    navigate(`/chat/${id}`);
  };

  const handleChatBack = () => {
    setSelectedChatId(null);
    navigate('/');
};

  return (
      <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
        <Sidebar isVisible={isSidebarVisible} ref={sidebarRef} onChatClick={handleChatClick} />
        <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-10' : 'translate-x-0'}`}>
          <Routes>
            <Route path="/" element={<HomePage toggleSidebar={toggleSidebar} onChatClick={handleChatClick}/>} />
            <Route path="/chat/:id" element={<ChatPage chatId={selectedChatId} onChatBack={handleChatBack} />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;

