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














// import React, { useState, useEffect, useRef } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import ChatList from './components/ChatList'; // Assuming ChatList is another component
// import ChatPage from './pages/ChatPage'; // Update import as per your project structure
// import { useTheme } from './contexts/ThemeContext';

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [selectedChatId, setSelectedChatId] = useState(null);
//   const sidebarRef = useRef(null);
//   const navigate = useNavigate();
//   const { darkMode } = useTheme();

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setSidebarVisible(false);
//     }
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

//   const handleChatClick = (id) => {
//     setSelectedChatId(id);
//     navigate(`/chat/${id}`);
//   };

//   return (
//       <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
//         {/* <Header toggleSidebar={toggleSidebar} /> */}
//         <Sidebar isVisible={isSidebarVisible} ref={sidebarRef} onChatClick={handleChatClick} />
//         <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-80' : 'translate-x-0'}`}>
//           <Routes>
//             <Route path="/" element={<><Header toggleSidebar={toggleSidebar} /><ChatList onChatClick={handleChatClick} /></>} />
//             <Route path="/chat/:id" element={<ChatPage />} />
//             {/* <Route path="/" element={<ChatList onChatClick={handleChatClick} />} /> */}
//           </Routes>
//         </div>
//       </div>
//   );
// };

// export default App;


// // mobile
// import React, { useState, useEffect, useRef } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import ChatList from './components/ChatList'; // Assuming ChatList is another component
// import ChatPage from './pages/ChatPage'; // Update import as per your project structure
// import { useTheme } from './contexts/ThemeContext';

// const App = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const [selectedChatId, setSelectedChatId] = useState(null);
//   const sidebarRef = useRef(null);
//   const navigate = useNavigate();
//   const { darkMode } = useTheme();

//   const toggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setSidebarVisible(false);
//     }
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

//   const handleChatClick = (id) => {
//     setSelectedChatId(id);
//     navigate(`/chat/${id}`);
//   };

//   return (
//     <div className={darkMode ? 'bg-gray-900 text-white h-screen flex flex-col' : 'bg-white text-black h-screen flex flex-col'}>
//       <div className="lg:flex lg:flex-1">
//         <Sidebar isVisible={isSidebarVisible} ref={sidebarRef} onChatClick={handleChatClick} />
//         <div className={`transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-80' : 'translate-x-0'} lg:flex lg:flex-1 lg:translate-x-0`}>
//           <Routes>
//             <Route path="/" element={<><Header toggleSidebar={toggleSidebar} /><ChatList onChatClick={handleChatClick} /></>} />
//             <Route path="/chat/:id" element={<ChatPage />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;












// desktop
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
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} h-screen flex flex-col`}>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {/* Sidebar for mobile */}
        <div className={`fixed inset-y-0 left-0 w-3/4 bg-white dark:bg-gray-800 shadow-md z-30 lg:hidden transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidebar isVisible={isSidebarVisible} ref={sidebarRef} onChatClick={handleChatClick} />
        </div>
        {/* Main content area */}
        <div className="flex flex-1 lg:flex-row">
          <div className="hidden lg:block lg:w-1/3 border-r border-gray-200 dark:border-gray-700">
            <ChatList onChatClick={handleChatClick} />
          </div>
          <div className="flex-1 lg:w-2/3">
            <Routes>
              <Route path="/chat/:id" element={<ChatPage />} />
              <Route path="/" element={<ChatList onChatClick={handleChatClick} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
