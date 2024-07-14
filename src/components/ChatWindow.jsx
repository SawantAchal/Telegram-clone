// mobile
import React, { useEffect, useState } from 'react';
import { fetchChatMessages } from '../services/api';
import { IoCall, IoEllipsisVertical, IoSend } from 'react-icons/io5';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();
  const [chatDetails, setChatDetails] = useState(null);

  useEffect(() => {
    const loadMessages = async () => {
        if (chatId) {
            setLoading(true);
            setError(null);
            try {
                const fetchedMessages = await fetchChatMessages(chatId);
                setMessages(fetchedMessages);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
    };
    loadMessages();
}, [chatId]);

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
<div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
    <button onClick={() => navigate('/')} className="text-blue-500">
        <FaArrowLeft />
    </button>
    <div className="flex items-center">
        <img src="profile-pic-url" alt="User" className="h-10 w-10 rounded-full" />
        <p className="ml-2 font-bold text-white">{chatDetails?.creator?.name || 'Unknown'}</p>
    </div>
    <div className="flex items-center">
        <IoCall className="text-gray-500 text-xl mx-2" />
        <IoEllipsisVertical className="text-gray-500 text-xl" />
    </div>
</div>
<div className="flex-grow overflow-y-auto p-4 pb-20">
    {messages.map(message => (
        <div key={message.id} className={`my-2 ${message.senderId === 'yourUserId' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.senderId === 'yourUserId' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.message}
                <div className="text-xs text-gray-500 mt-1 text-right">{formatTimestamp(message.timestamp)}</div>
            </div>
        </div>
    ))}
</div>
<div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-200 dark:bg-gray-800">
    <div className="flex items-center">
        <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-2 rounded border border-gray-400 dark:border-gray-600"
            placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded">
            <IoSend />
        </button>
    </div>
</div>
</div>
  )
}


export default ChatWindow









