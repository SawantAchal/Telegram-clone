# Telegram Clone

This project is a detailed replica of the Telegram messaging application, designed to be responsive for both desktop and mobile views. It uses ReactJS and Tailwind CSS to create a user-friendly interface with various features found in the original Telegram app.

## Features

- Full-width search bar in the header with a back arrow to close the search.
- Fetches and displays chat usernames starting with the input letters.
- Chat list with a search icon.
- Sidebar with user details and a dark mode toggle icon.
- Various chat tabs (All, Regulars, Unread, Personal, Archived, Group).
- Chat interface with top bar displaying chat details, pinned messages, unread message notifications, and message alignment.
- Message box with a send button.
- Header with username displaying the first character instead of a profile picture.
- Call button and menu button (three dots).
- Responsive design: Sidebar takes up 80% width on mobile screens and 40% width on desktop screens.

## Technologies Used

- ReactJS
- Tailwind CSS
- React Icons

## Installation

1. Clone the repository:

    bash
    git clone https://github.com/SawantAchal/Telegram-clone.git
    cd Telegram-clone
    

2. Install dependencies:

    bash
    npm install
    

3. Start the development server:

    bash
    npm run dev
    

## Usage

1. *Sidebar*: The sidebar is responsive and changes its width based on the screen size.
2. *Header*: The header contains the search bar and handles the search functionality.
3. *Chat List*: Displays a list of chats. When a search is performed, only chats matching the search criteria are shown.
4. *Dark Mode*: Toggle between dark and light modes using the dark mode toggle icon in the sidebar with animations.
5. *Chat Window*: Once a chat is selected, the chat window displays messages with a top bar showing chat details, pinned messages, and unread message notifications. The message box allows sending messages.

## Project Structure

- src/components: Contains all the reusable components.
- src/pages: Contains page components for routing.
- src/contexts: Contains context provider ThemeContext.
- src/services: Contains API service functions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
