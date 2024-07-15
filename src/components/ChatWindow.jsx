import React, { useEffect, useState , useRef} from 'react';
import { fetchChatMessages, markMessagesAsRead } from '../services/api';
import { IoCall, IoEllipsisVertical, IoSend } from 'react-icons/io5';
import { FaArrowLeft } from "react-icons/fa6";
import profilePic from '../assets/ProfilePic.avif'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { LuMic } from "react-icons/lu";
import { useTheme } from '../contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

const ChatWindow = ({ chatId, onChatBack }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const chatRef = useRef(null);
    const { darkMode } = useTheme();
    const location = useLocation();
    const username =location.state?.username;

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
    <div className="flex flex-col h-screen scrollbar-hidden">
        <div className={`flex justify-between items-center p-4 w-full bg-transparent`}>
            <div className='flex items-center gap-4'>
                <button onClick={onChatBack} className="text-white">
                    <FaArrowLeft />
                </button>
                <div className="flex items-center gap-3">
                    <img src={profilePic} alt="User" className="h-10 w-10 rounded-full border border-gray-400" />
                    <div>
                        <p className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{username || 'Unknown'}</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-300"}`}>last seen within a week</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <IoCall className={` text-white  text-xl mx-4`} />
                <IoEllipsisVertical className={` text-white  text-xl `} />
            </div>
        </div>
        <div className={`relative flex-grow overflow-y-auto scrollbar-hidden p-4 pb-20 bg-no-repeat bg-cover"`} ref={chatRef}  style={{ backgroundImage: `${darkMode ? "url('/bgchatwindowdarkmode.png')" : "url('/bgchatwindow.png')"}`}}>
            <div className={`fixed top-18 left-1/2 transform -translate-x-1/2 ${darkMode ? "bg-gray-700" : "bg-gray-200 "} px-4 py-1 rounded shadow z-10`} >
                {currentDate}
            </div>
            {
                messages.map((message,index )=> (
                    <div key={message.id}>
                        {
                            index === 0 || (messages[index - 1].read && !message.read) ? (
                                <div className='text-center'>
                                    Unread messages
                                </div>
                            ) : null
                        }
                        <div id={`message-${message.id}`} className={`my-2`}>
                            <div className={`inline-block p-2 rounded-lg ${darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-700"}`} >
                                {message.message}
                                <div className="text-xs text-gray-500 mt-1 text-right">{formatTimestamp(message.created_at)}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className={`fixed bottom-0 lg:left-[30%] lg:w-[70%] md:w-full  justify-between left-0 right-0 p-4 ${darkMode ? "bg-gray-800" : "bg-gray-200"}  `}>
            <div className="flex  md:flex-row items-center max-w-4xl mx-auto gap-3">
                <div className='rounded border border-gray-400 dark:border-gray-600 flex items-center w-full pl-2 pr-2'>
                    <MdOutlineEmojiEmotions className='md:text-2xl text-lg text-black'/>
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="flex-grow p-2 border-none text-black outline-none bg-transparent" placeholder="Type a message..."/>
                    <GrAttachment className='md:text-2xl text-lg text-black'/>
                </div>
                {
                    newMessage ? (
                        <button onClick={handleSendMessage} className="h-9 w-9 rounded-full bg-gray-400 items-center text-center p-2 text-blue-500 ">
                            <IoSend className='text-2xl'/>
                        </button>
                    ) : (
                        <div className='h-9 w-9 rounded-full bg-gray-400 items-center text-center p-2'>
                            <LuMic className='text-2xl'/>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}


export default ChatWindow