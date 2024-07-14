import React, { useEffect, useState , useRef} from 'react';
import { fetchChatMessages, markMessagesAsRead } from '../services/api';
import { IoCall, IoEllipsisVertical, IoSend } from 'react-icons/io5';
import { FaArrowLeft } from "react-icons/fa6";
import profilePic from '../assets/ProfilePic.avif'

const ChatWindow = ({ chatId, onChatBack }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [chatDetails, setChatDetails] = useState(null);
    const [currentDate, setCurrentDate] = useState('');
    const chatRef = useRef(null);

    useEffect(() => {
    const loadMessages = async () => {
        if (chatId) {
            setLoading(true);
            setError(null);
            try {
                const fetchedMessages = await fetchChatMessages(chatId);
                const messagesWithDates = fetchedMessages.map(msg => ({
                    ...msg,
                    date: new Date(msg.created_at).toLocaleDateString('en-US',{
                        month: 'long', day: 'numeric'
                    })
                }));
                setMessages(messagesWithDates);
                 // Mark messages as read
                await markMessagesAsRead(chatId);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
    };
    loadMessages();
    }, [chatId]);

    useEffect(() => {
    if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
    }, [messages]);

    useEffect(() => {
    const handleScroll = () => {
        if (chatRef.current) {
            const chatDiv = chatRef.current;
            const visibleMessages = messages.filter(message => {
                const messageElement = document.getElementById(`message-${message.id}`);
                if (messageElement) {
                    const rect = messageElement.getBoundingClientRect();
                    return rect.top >= 0 && rect.bottom <= window.innerHeight;
                }
                return false;
            });
            if (visibleMessages.length > 0) {
                setCurrentDate(visibleMessages[0].date);
            }
        }
    };

    if (chatRef.current) {
        chatRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
        if (chatRef.current) {
            chatRef.current.removeEventListener('scroll', handleScroll);
        }
    };
    }, [messages]);

    const handleSendMessage = () => {
    // Handle sending message (not implemented)
    setNewMessage(''); // Clear the input after sending
    };

    const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    if (loading) return <p>Loading messages...</p>;
    if (error) return <p>Error loading messages: {error.message}</p>;

   return (
    <div className="flex flex-col h-screen">
        <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 " >
            <div className='flex items-center gap-4'>
                <button onClick={onChatBack} className="text-blue-500">
                    <FaArrowLeft />
                </button>
                <div className="flex items-center gap-3">
                    <img src={profilePic} alt="User" className="h-10 w-10 rounded-full border border-gray-400" />
                    {/* <p className="ml-2 font-bold text-white">{messages.length > 0 ? messages[0].creator?.name : 'Unknown'}</p> */}
                    <p className=" font-bold text-gray-800">Username</p>
                </div>
            </div>
            <div className="flex items-center">
                <IoCall className="text-gray-500 text-xl mx-2" />
                <IoEllipsisVertical className="text-gray-500 text-xl" />
            </div>
        </div>
        <div className="relative flex-grow overflow-y-auto p-4 pb-20 bg-no-repeat bg-cover" ref={chatRef} style={{backgroundImage:`url('/bgchatwindow.png')`}}>
            <div className="fixed top-18 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-gray-700 px-4 py-1 rounded shadow z-10 " >
                {currentDate}
            </div>
            {
                messages.map((message,index )=> (
                    <div key={message.id}>
                        {
                            index === 0 || (messages[index - 1].read && !message.read) ? (
                                <div className="text-center text-gray-500 my-4">
                                    Unread messages
                                </div>
                            ) : null
                        }
                        <div id={`message-${message.id}`} className={`my-2 ${message.created_by === 'yourUserId' ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block p-2 rounded-lg ${message.created_by === 'yourUserId' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                                {message.message}
                                <div className="text-xs text-gray-500 mt-1 text-right">{formatTimestamp(message.created_at)}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-200 dark:bg-gray-800">
            <div className="flex items-center">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="flex-grow p-2 rounded border border-gray-400 dark:border-gray-600 outline-none" placeholder="Type a message..."/>
                <button onClick={handleSendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded">
                    <IoSend />
                </button>
            </div>
        </div>
    </div>
  )
}


export default ChatWindow



// import React, { useEffect, useState , useRef} from 'react';
// import { fetchChatMessages, markMessagesAsRead } from '../services/api';
// import { IoCall, IoEllipsisVertical, IoSend } from 'react-icons/io5';
// import { FaArrowLeft } from "react-icons/fa6";

// const ChatWindow = ({ chatId, onChatBack }) => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [chatDetails, setChatDetails] = useState(null);
//   const [currentDate, setCurrentDate] = useState('');
//   const chatRef = useRef(null);

//   useEffect(() => {
//     const loadMessages = async () => {
//         if (chatId) {
//             setLoading(true);
//             setError(null);
//             try {
//                 const fetchedMessages = await fetchChatMessages(chatId);
//                 const messagesWithDates = fetchedMessages.map(msg => ({
//                     ...msg,
//                     date: new Date(msg.created_at).toLocaleDateString('en-US',{
//                         month: 'long', day: 'numeric'
//                     })
//                 }));
//                 setMessages(messagesWithDates);
//                  // Mark messages as read
//                 await markMessagesAsRead(chatId);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };
//     loadMessages();
// }, [chatId]);

// useEffect(() => {
//     if (chatRef.current) {
//         chatRef.current.scrollTop = chatRef.current.scrollHeight;
//     }
// }, [messages]);

// useEffect(() => {
//     const handleScroll = () => {
//         if (chatRef.current) {
//             const chatDiv = chatRef.current;
//             const visibleMessages = messages.filter(message => {
//                 const messageElement = document.getElementById(`message-${message.id}`);
//                 if (messageElement) {
//                     const rect = messageElement.getBoundingClientRect();
//                     return rect.top >= 0 && rect.bottom <= window.innerHeight;
//                 }
//                 return false;
//             });
//             if (visibleMessages.length > 0) {
//                 setCurrentDate(visibleMessages[0].date);
//             }
//         }
//     };

//     if (chatRef.current) {
//         chatRef.current.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//         if (chatRef.current) {
//             chatRef.current.removeEventListener('scroll', handleScroll);
//         }
//     };
// }, [messages]);

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       // Simulate sending message
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { id: Date.now(), content: newMessage, sender: 'me' }
//       ]);
//       setNewMessage('');
//     }
//   };

//   if (loading) return <p>Loading chat...</p>;
//   if (error) return <p>Error loading chat: {error.message}</p>;

//   return (
//     <div className="flex flex-col h-full">
//         {/* Top bar with back button, call button, and menu button */}
//         <div className="flex justify-between items-center bg-blue-500 text-white p-4">
//             <div className="flex items-center gap-4">
//                 <button className="p-2" onClick={onChatBack}>
//                     <FaArrowLeft />
//                 </button>
//                 <div className="font-bold">{chatDetails?.creator?.name || 'Chat'}</div>
//             </div>
//             <div className="flex items-center gap-4">
//                 <button className="p-2">
//                     <IoCall />
//                 </button>
//                 <button className="p-2">
//                     <IoEllipsisVertical />
//                 </button>
//             </div>
//         </div>
//         {/* Date display when scrolling */}
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-800 px-4 py-1 rounded-full">
//             {currentDate}
//         </div>
//         {/* Chat messages */}
//         <div ref={chatRef} className="flex-grow p-4 overflow-y-auto">
//             {messages.map((message) => (
//                 <div key={message.id} id={`message-${message.id}`} className={`p-2 my-2 rounded-lg ${message.sender === 'me' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}>
//                     {message.content}
//                 </div>
//             ))}
//         </div>
//         {/* Message input area */}
//         <div className="flex items-center p-4 bg-gray-100 border-t">
//             <input
//                 className="flex-grow p-2 border rounded-lg mr-2"
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type a message"
//             />
//             <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={sendMessage}>
//                 <IoSend />
//             </button>
//         </div>
//     </div>
// );
// };

// export default ChatWindow;

