// import React, { useEffect, useState } from 'react';
// import { fetchAllChats, fetchChatMessages } from '../services/api';

// // Utility function to format the date
// const formatDate = (date) => {
//     const messageDate = new Date(date);
//     const now = new Date();

//     const daysDiff = Math.floor((now - messageDate) / (1000 * 60 * 60 * 24));

//     // Format options
//     const options = { weekday: 'long' };

//     if (daysDiff < 7) {
//         return messageDate.toLocaleDateString(undefined, options); // Day of the week
//     } else {
//         return messageDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' }); // Month and day
//     }
// };

// const ChatList = ({ onChatClick }) => {
//     const [chats, setChats] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadChats = async () => {
//             try {
//                 const allChats = await fetchAllChats();
//                 const chatsWithLastMessage = await Promise.all(allChats.map(async (chat) => {
//                     const messages = await fetchChatMessages(chat.id);
//                     const lastMessage = messages.length > 0 ? messages[messages.length - 1] : { message: 'No messages', created_at: new Date() };
//                     const unreadCount = messages.filter(msg => !msg.read).length;
                    
//                     const truncatedMessage = lastMessage.message.length > 50 ? `${lastMessage.message.slice(0, 35)}...` : lastMessage.message;
//                     const lastMessageTime = formatDate(lastMessage.created_at);

//                     return { 
//                         ...chat, 
//                         lastMessage: truncatedMessage, 
//                         unreadCount, 
//                         lastMessageTime 
//                     };
//                 }));
//                 setChats(chatsWithLastMessage);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadChats();
//     }, []);

//     if (loading) return <p>Loading chats...</p>;
//     if (error) return <p>Error loading chats: {error.message}</p>;

//     if (!Array.isArray(chats)) {
//         return <p>Unexpected data format</p>;
//     }

//     const getInitials = (name) => {
//         if (!name) return '??';
//         const words = name.split(' ');
//         const initials = words.map(word => word[0].toUpperCase()).join('').slice(0, 2);
//         return initials;
//     };

//     return (
//         <div className="p-4">
//         {chats.map(chat => (
//             <div key={chat.id} onClick={() => onChatClick(chat.id)} className="flex items-center gap-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
//                                     <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold">
//              {getInitials(chat.creator?.name)}
//             </div>
//                 <div className="flex-1">
//                     <p className="font-bold flex justify-between">
//                         {chat.creator?.name || 'Unknown'}
//                         <span className="text-gray-500">{chat.lastMessageTime}</span>
//                     </p>
//                     <div className="flex justify-between">
//                         <p className="text-gray-500">{chat.lastMessage}</p>
//                         {chat.unreadCount > 0 && (
//                             <span className="text-red-500">{chat.unreadCount}</span>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
//     );
// };

// export default ChatList;

// import React, { useEffect, useState } from 'react';
// import { fetchAllChats, fetchChatMessages } from '../services/api';

// // Utility function to format the date
// const formatDate = (date) => {
//     const messageDate = new Date(date);
//     const now = new Date();

//     const daysDiff = Math.floor((now - messageDate) / (1000 * 60 * 60 * 24));

//     // Format options
//     const options = { weekday: 'long' };

//     if (daysDiff < 7) {
//         return messageDate.toLocaleDateString(undefined, options); // Day of the week
//     } else {
//         return messageDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' }); // Month and day
//     }
// };

// const ChatList = ({ onChatClick }) => {
//     const [chats, setChats] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadChats = async () => {
//             try {
//                 const allChats = await fetchAllChats();
//                 const chatsWithLastMessage = await Promise.all(allChats.map(async (chat) => {
//                     const messages = await fetchChatMessages(chat.id);
//                     const lastMessage = messages.length > 0 ? messages[messages.length - 1] : { message: 'No messages', created_at: new Date() };
//                     const unreadCount = messages.filter(msg => !msg.read).length;
                    
//                     const truncatedMessage = lastMessage.message.length > 50 ? `${lastMessage.message.slice(0, 35)}...` : lastMessage.message;
//                     const lastMessageTime = formatDate(lastMessage.created_at);

//                     return { 
//                         ...chat, 
//                         lastMessage: truncatedMessage, 
//                         unreadCount, 
//                         lastMessageTime 
//                     };
//                 }));
//                 setChats(chatsWithLastMessage);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadChats();
//     }, []);

//     if (loading) return <p>Loading chats...</p>;
//     if (error) return <p>Error loading chats: {error.message}</p>;

//     if (!Array.isArray(chats)) {
//         return <p>Unexpected data format</p>;
//     }

//     const getInitials = (name) => {
//         if (!name) return '??';
//         const words = name.split(' ');
//         const initials = words.map(word => word[0].toUpperCase()).join('').slice(0, 2);
//         return initials;
//     };

//     return (
//         <div className="p-4">
//             {chats.map((chat, index) => (
//                 <div key={chat.id} onClick={() => onChatClick(chat.id)}>
//                     <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
//                         <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold">
//                             {getInitials(chat.creator?.name)}
//                         </div>
//                         <div className="flex-1">
//                             <p className="font-bold flex justify-between">
//                                 {chat.creator?.name || 'Unknown'}
//                                 <span className="text-gray-500">{chat.lastMessageTime}</span>
//                             </p>
//                             <div className="flex justify-between">
//                                 <p className="text-gray-500">{chat.lastMessage}</p>
//                                 {chat.unreadCount > 0 && (
//                                     <span className="text-red-500">{chat.unreadCount}</span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     {index < chats.length - 1 && <hr className="my-2 border-gray-300 dark:border-gray-700 mx-16" />} {/* Exclude hr for the last chat item */}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChatList;











// // mobile
// import React, { useEffect, useState } from 'react';
// import { fetchAllChats, fetchChatMessages } from '../services/api';

// // Utility function to format the date
// const formatDate = (date) => {
//     const messageDate = new Date(date);
//     const now = new Date();

//     const daysDiff = Math.floor((now - messageDate) / (1000 * 60 * 60 * 24));

//     // Format options
//     const options = { weekday: 'long' };

//     if (daysDiff < 7) {
//         return messageDate.toLocaleDateString(undefined, options); // Day of the week
//     } else {
//         return messageDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' }); // Month and day
//     }
// };

// const ChatList = ({ onChatClick }) => {
//     const [chats, setChats] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadChats = async () => {
//             try {
//                 const allChats = await fetchAllChats();
//                 const chatsWithLastMessage = await Promise.all(allChats.map(async (chat) => {
//                     const messages = await fetchChatMessages(chat.id);
//                     const lastMessage = messages.length > 0 ? messages[messages.length - 1] : { message: 'No messages', created_at: new Date() };
//                     const unreadCount = messages.filter(msg => !msg.read).length;
                    
//                     const truncatedMessage = lastMessage.message.length > 50 ? `${lastMessage.message.slice(0, 35)}...` : lastMessage.message;
//                     const lastMessageTime = formatDate(lastMessage.created_at);

//                     return { 
//                         ...chat, 
//                         lastMessage: truncatedMessage, 
//                         unreadCount, 
//                         lastMessageTime 
//                     };
//                 }));
//                 setChats(chatsWithLastMessage);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadChats();
//     }, []);

//     if (loading) return <p>Loading chats...</p>;
//     if (error) return <p>Error loading chats: {error.message}</p>;

//     if (!Array.isArray(chats)) {
//         return <p>Unexpected data format</p>;
//     }

//     const getInitials = (name) => {
//         if (!name) return '??';
//         const words = name.split(' ');
//         const initials = words.map(word => word[0].toUpperCase()).join('').slice(0, 2);
//         return initials;
//     };

//     return (
//         <div className="p-4 lg:border-r lg:border-gray-200 lg:dark:border-gray-700">
//             {chats.map((chat, index) => (
//                 <div key={chat.id} onClick={() => onChatClick(chat.id)}>
//                     <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
//                         <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold">
//                             {getInitials(chat.creator?.name)}
//                         </div>
//                         <div className="flex-1">
//                             <p className="font-bold flex justify-between">
//                                 {chat.creator?.name || 'Unknown'}
//                                 <span className="text-gray-500">{chat.lastMessageTime}</span>
//                             </p>
//                             <div className="flex justify-between">
//                                 <p className="text-gray-500">{chat.lastMessage}</p>
//                                 {chat.unreadCount > 0 && (
//                                     <span className="text-red-500">{chat.unreadCount}</span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     {index < chats.length - 1 && <hr className="my-2 border-gray-300 dark:border-gray-700 mx-16" />} {/* Exclude hr for the last chat item */}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChatList;











// desktop
import React, { useEffect, useState } from 'react';
import { fetchAllChats, fetchChatMessages } from '../services/api';

// Utility function to format the date
const formatDate = (date) => {
    const messageDate = new Date(date);
    const now = new Date();
    const daysDiff = Math.floor((now - messageDate) / (1000 * 60 * 60 * 24));
    const options = { weekday: 'long' };

    if (daysDiff < 7) {
        return messageDate.toLocaleDateString(undefined, options); // Day of the week
    } else {
        return messageDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' }); // Month and day
    }
};

const ChatList = ({ onChatClick }) => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadChats = async () => {
            try {
                const allChats = await fetchAllChats();
                const chatsWithLastMessage = await Promise.all(allChats.map(async (chat) => {
                    const messages = await fetchChatMessages(chat.id);
                    const lastMessage = messages.length > 0 ? messages[messages.length - 1] : { message: 'No messages', created_at: new Date() };
                    const unreadCount = messages.filter(msg => !msg.read).length;
                    const truncatedMessage = lastMessage.message.length > 50 ? `${lastMessage.message.slice(0, 35)}...` : lastMessage.message;
                    const lastMessageTime = formatDate(lastMessage.created_at);

                    return { 
                        ...chat, 
                        lastMessage: truncatedMessage, 
                        unreadCount, 
                        lastMessageTime 
                    };
                }));
                setChats(chatsWithLastMessage);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadChats();
    }, []);

    if (loading) return <p>Loading chats...</p>;
    if (error) return <p>Error loading chats: {error.message}</p>;

    if (!Array.isArray(chats)) {
        return <p>Unexpected data format</p>;
    }

    const getInitials = (name) => {
        if (!name) return '??';
        const words = name.split(' ');
        const initials = words.map(word => word[0].toUpperCase()).join('').slice(0, 2);
        return initials;
    };

    return (
        <div className="p-4">
            {chats.map((chat, index) => (
                <div key={chat.id} onClick={() => onChatClick(chat.id)}>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold">
                            {getInitials(chat.creator?.name)}
                        </div>
                        <div className="flex-1">
                            <p className="font-bold flex justify-between">
                                {chat.creator?.name || 'Unknown'}
                                <span className="text-gray-500">{chat.lastMessageTime}</span>
                            </p>
                            <div className="flex justify-between">
                                <p className="text-gray-500">{chat.lastMessage}</p>
                                {chat.unreadCount > 0 && (
                                    <span className="text-red-500">{chat.unreadCount}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    {index < chats.length - 1 && <hr className="my-2 border-gray-300 dark:border-gray-700 mx-16" />} {/* Exclude hr for the last chat item */}
                </div>
            ))}
        </div>
    );
};

export default ChatList;
