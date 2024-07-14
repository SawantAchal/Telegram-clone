import React from 'react';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import { FaPen } from 'react-icons/fa'; // Importing the pencil icon from FontAwesome

const HomePage = ({ toggleSidebar, onChatClick }) => {
  return (
    <div className="relative h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-y-auto">
        <ChatList onChatClick={onChatClick} />
      </div>
      <div className="fixed bottom-4 right-4 cursor-pointer">
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          <FaPen size={20} />
        </button>
      </div>
    </div>
  );
}

export default HomePage;




// import React, { useState } from 'react';
// import Header from '../components/Header';
// import ChatList from '../components/ChatList';
// import ChatWindow from '../components/ChatWindow';

// const HomePage = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedChatId, setSelectedChatId] = useState(null);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const handleSearch = (query) => {
//         setSearchQuery(query);
//     };

//     const handleChatClick = (chatId) => {
//         setSelectedChatId(chatId);
//     };

//     return (
//         <div className="h-screen flex flex-col">
//             {/* <Header toggleSidebar={toggleSidebar} onSearch={handleSearch} /> */}
//             <div className="flex flex-grow overflow-hidden">
//                 {/* Sidebar for mobile view */}
//                 {/* <div className={`fixed inset-0 z-30 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 w-64 bg-gray-800 md:bg-transparent`}>
//                     <ChatList onChatClick={handleChatClick} />
//                 </div> */}
//                 {/* Overlay when sidebar is open on mobile */}
//                 {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>}
//                 <div className="flex-grow flex flex-col md:flex-row">
//                     {/* Chat List for desktop view */}
//                     <div className="hidden md:flex md:w-1/3 bg-gray-100">
//                         <ChatList onChatClick={handleChatClick} />
//                     </div>
//                     {/* Chat Window */}
//                     <div className="flex-grow ">
//                         {selectedChatId ? <ChatWindow chatId={selectedChatId} onChatBack={() => setSelectedChatId(null)} c/> : <div className="h-full flex items-center justify-center text-gray-500">Select a chat to start messaging</div>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;

