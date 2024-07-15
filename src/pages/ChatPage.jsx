import React from 'react';
import ChatWindow from '../components/ChatWindow';
import { useTheme } from '../contexts/ThemeContext';

const ChatPage = ({ chatId, onChatBack }) => {
    const { darkMode } = useTheme();
    return (
        <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
            <ChatWindow chatId={chatId} onChatBack={onChatBack} />
        </div>
    );
};

export default ChatPage;