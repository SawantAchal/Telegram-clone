export const fetchAllChats = async () => {
    let allChats = [];
    let page = 1;
    let totalPages = 1;

    try {
        while (page <= totalPages) {
            const response = await fetch(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`);
            const result = await response.json();
            // console.log(result.data)
            if (result && result.data && result.data.data) {
                allChats = [...allChats, ...result.data.data];
                totalPages = result.data.last_page;
            } else {
                throw new Error("Unexpected response structure");
            }

            page += 1;
        }

        return allChats;
    } catch (error) {
        throw error;
    }
};

export const fetchChatMessages = async (chatId) => {
    try {
        const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        const result = await response.json();
        if (result && result.data) {
            return result.data;
        } else {
            throw new Error("Unexpected response structure");
        }
    } catch (error) {
        throw error;
    }
};

// services/api.js
export const markMessagesAsRead = async (chatId) => {
    // Make an API call to mark messages as read
    try {
        await fetch(`/api/chats/${chatId}/markAsRead`, {
            method: 'POST'
        });
    } catch (error) {
        console.error('Error marking messages as read:', error);
    }
};