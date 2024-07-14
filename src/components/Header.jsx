import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";

const Header = ({ toggleSidebar, onSearch }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [active , setActive] = useState("All")

    const handleSearchToggle = () => {
        setIsSearching(!isSearching);
        if (isSearching) {
            onSearch(''); // Clear search when closing
        }
    };

    return (
        <header className='bg-slate-900 text-white'>
            <section className='flex items-center p-2 sm:p-4 bg-slate-900 text-white cursor-pointer dark:bg-purple-200 dark:text-yellow-50'>
                {!isSearching ? (
                    <>
                    <section className='flex gap-6 items-center'>
                    <RxHamburgerMenu onClick={toggleSidebar} />
                    <p className="ml-2">Telegram</p>
                    </section>

                        <FaMagnifyingGlass onClick={handleSearchToggle} className="ml-auto cursor-pointer" />
                    </>
                ) : (
                    <div className="flex items-center w-full">
                        <IoArrowBack onClick={handleSearchToggle} className="cursor-pointer mr-2" />
                        <input 
                            type="text" 
                            placeholder="Search in chats..." 
                            className="bg-slate-700 text-white p-2 rounded w-full" 
                            autoFocus
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </div>
                )}
            </section>
            <section className='flex justify-around p-4 gap-8 text-center overflow-x-scroll scrollbar-hidden'>
          <p className={`cursor-pointer ${active === 'All' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("All")}>All</p>
          <p className={`cursor-pointer ${active === 'Regulars' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Regulars")}>Regulars</p>
          <p className={`cursor-pointer ${active === 'Unread' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Unread")}>Unread</p>
          <p className={`cursor-pointer ${active === 'Personal' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Personal")}>Personal</p>
          <p className={`cursor-pointer ${active === 'Archived' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Archived")}>Archived</p>
          <p className={`cursor-pointer ${active === 'Group' ? 'border-b-2 border-blue-700 text-blue-400' : ""}`} onClick={() => setActive("Group")}>Group</p>
        </section>
        </header>
    );
}

export default Header;
