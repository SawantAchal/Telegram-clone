// import React, { useState, useEffect, useRef } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import ChatPage from './pages/ChatPage'; // Update import as per your project structure
// import ChatList from './components/ChatList';

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setSidebarVisible(false);
//     }
//   };

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   useEffect(() => {
//     if (isSidebarVisible) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isSidebarVisible]);

//   return (
//     <div className="relative">
//       <Header toggleSidebar={toggleSidebar} onSearch={handleSearch} />
//       <Sidebar isVisible={isSidebarVisible} ref={sidebarRef} />
//       <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-80' : 'translate-x-0'}`}>
//         <ChatPage />
//         <ChatList searchQuery={searchQuery} />
//       </div>
//     </div>
//   );
// };

// export default App;














import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList'; // Assuming ChatList is another component
import ChatPage from './pages/ChatPage'; // Update import as per your project structure
import { useTheme } from './contexts/ThemeContext';

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

  return (
      <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
        {/* <Header toggleSidebar={toggleSidebar} /> */}
        <Sidebar isVisible={isSidebarVisible} ref={sidebarRef} onChatClick={handleChatClick} />
        <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-80' : 'translate-x-0'}`}>
          <Routes>
            <Route path="/" element={<><Header toggleSidebar={toggleSidebar} /><ChatList onChatClick={handleChatClick} /></>} />
            <Route path="/chat/:id" element={<ChatPage />} />
            {/* <Route path="/" element={<ChatList onChatClick={handleChatClick} />} /> */}
          </Routes>
        </div>
      </div>
  );
};

export default App;

