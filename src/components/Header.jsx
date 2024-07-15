import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ toggleSidebar, onSearch }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [active , setActive] = useState("All")
    const { darkMode } = useTheme();

    const handleSearchToggle = () => {
        setIsSearching(!isSearching);
        if (isSearching) {
            onSearch(''); // Clear search when closing
        }
    };

    return (
        <header className={`text-white ${darkMode ? 'bg-gray-700' : 'bg-blue-500'}`} >
            <section className={`flex items-center p-2 sm:p-4 ${darkMode ? 'bg-gray-700' : 'bg-blue-500'} text-white cursor-pointer`}>
                {
                    !isSearching ? (
                        <>
                            <RxHamburgerMenu onClick={toggleSidebar} className='text-xl'/>
                            <p className="ml-5 font-bold">Telegram</p>
                            <FaMagnifyingGlass onClick={handleSearchToggle} className="ml-auto cursor-pointer" />
                        </>
                    ) : (
                        <div className="flex items-center w-full">
                            <IoArrowBack onClick={handleSearchToggle} className="cursor-pointer mr-2" />
                            <input  type="text"  placeholder="Search in chats..."  className="bg-white text-gray-500 p-2 rounded w-full border-none outline-none"  autoFocus onChange={(e) => onSearch(e.target.value)}/>
                        </div>
                    )
                }
            </section>
            <section className='flex justify-around p-4 gap-8 text-center overflow-x-scroll scrollbar-hidden font-medium'>
                <p className={`cursor-pointer ${active === 'All' ? 'border-b-2 border-blue-7x00 text-blue-400' : ""}`} onClick={() => setActive("All")}>All</p><span className="h-6 w-6 p-1 rounded-full bg-gray-300 text-center -ml-5 text-sm">50</span>
                <p className={`cursor-pointer ${active === 'Regulars' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Regulars")}>Regulars</p>
                <p className={`cursor-pointer ${active === 'Unread' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Unread")}>Unread</p><span className="h-6 w-6 p-1 rounded-full bg-gray-300 text-center -ml-5 text-sm">25</span>
                <p className={`cursor-pointer ${active === 'Personal' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Personal")}>Personal</p>
                <p className={`cursor-pointer ${active === 'Archived' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Archived")}>Archived</p>
                <p className={`cursor-pointer ${active === 'Group' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Group")}>Group</p>
            </section>
        </header>
    );
}

export default Header;