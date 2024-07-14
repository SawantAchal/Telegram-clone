import React from 'react';
import ChatWindow from '../components/ChatWindow';

const ChatPage = ({ chatId, onChatBack }) => {
    return (
        <div >
            <ChatWindow chatId={chatId} onChatBack={onChatBack}/>
        </div>
    );
};

export default ChatPage;
