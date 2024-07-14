import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
    const { id } = useParams();
    return (
        <div className="chat-page">
            <ChatWindow chatId={id} />
        </div>
    );
};

export default ChatPage;
