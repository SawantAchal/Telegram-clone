import React, { forwardRef } from 'react';
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import sidebarData from '../assets/SidebarData';
import { useTheme } from '../contexts/ThemeContext';
import profile from '../assets/profile.jpg'

const Sidebar = forwardRef(({ isVisible }, ref) => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <aside ref={ref} className={`fixed top-0 left-0 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} text-black transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} style={{ width: '80%', zIndex: 50 }}>
            <section className='p-4 bg-[#0088cc] text-white'>
                <section className='flex justify-between'>
                    <img src={profile} alt='profile' className='h-20 w-20 rounded-full'/>
                    <div onClick={toggleDarkMode} className="cursor-pointer text-white">
                        {darkMode ? <IoSunnySharp /> : <IoMoon />} 
                    </div>
                </section>
                <section className='flex justify-between mt-2 items-center'>
                    <section>
                        <p>Achal Sawant</p>
                        <p>+91 2345678902</p>
                    </section>
                    <section>
                        <IoIosArrowDown />
                    </section>
                </section>
            </section>
            <hr/>
            <section className=''>
                {sidebarData.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className="flex items-center gap-6 ">
                            <IconComponent className='text-gray-500 text-2xl mt-8'/>
                            <p className='mt-8'>{item.content}</p>
                        </div>
                    );
                })}
            </section>
        </aside>
    );
});

export default Sidebar;