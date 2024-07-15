// import React, { forwardRef } from 'react';
// import { IoSunnySharp, IoMoon } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import sidebarData from '../assets/SidebarData';
// import { useTheme } from '../contexts/ThemeContext';
// import profile from '../assets/profile.jpg'

// const Sidebar = forwardRef(({ isVisible }, ref) => {
//     const { darkMode, toggleDarkMode } = useTheme();

//     return (
//         <aside ref={ref} className={`fixed top-0 left-0 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} text-white transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 w-4/5 md:w-1/5`} >
//             <section className={`p-4 pb-2  text-white ${darkMode ? 'bg-gray-700' : 'bg-blue-500'}`}>
//                 <section className='flex justify-between'>
//                     <img src={profile} alt='profile' className='h-20 w-20 rounded-full'/>
//                     <div onClick={toggleDarkMode} className="cursor-pointer text-white">
//                         {darkMode ? <IoSunnySharp /> : <IoMoon />} 
//                     </div>
//                 </section>
//                 <section className='flex justify-between mt-2 items-center'>
//                     <section>
//                         <p>Achal Sawant</p>
//                         <p className={`text-sm ${darkMode ?' text-gray-700' : 'text-blue-50' }`}>+91 2345678902</p>
//                     </section>
//                     <section>
//                         <IoIosArrowDown />
//                     </section>
//                 </section>
//             </section>
//             <hr/>
//             <section className={`mt-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                 {sidebarData.map((item, index) => {
//                     const IconComponent = item.icon;
//                     return (
//                         <div key={index} className={`flex items-center gap-6 ml-4 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}  cursor-pointer`}>
//                             <IconComponent className='text-gray-500  text-2xl mt-8'/>
//                             <p className='mt-8'>{item.content}</p>
//                         </div>
//                     );
//                 })}
//             </section>
//         </aside>
//     );
// });

// export default Sidebar;


import React, { useState, forwardRef } from 'react';
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import sidebarData from '../assets/SidebarData';
import { useTheme } from '../contexts/ThemeContext';
import profile from '../assets/profile.jpg';

const Sidebar = forwardRef(({ isVisible }, ref) => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggleDarkMode = () => {
        setIsAnimating(true);
        setTimeout(() => {
            toggleDarkMode();
            setIsAnimating(false);
        }, 500); // Match this duration with the CSS animation duration
    };

    return (
        <aside ref={ref} className={`fixed top-0 left-0 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} text-white transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 w-4/5 md:w-1/5`} >
            <section className={`p-4 pb-2 text-white ${darkMode ? 'bg-gray-700' : 'bg-blue-500'}`}>
                <section className='flex justify-between'>
                    <img src={profile} alt='profile' className='h-20 w-20 rounded-full'/>
                    <div onClick={handleToggleDarkMode} className={`cursor-pointer text-white ${isAnimating ? 'animate-rotate' : ''}`}>
                        {darkMode ? <IoSunnySharp /> : <IoMoon />} 
                    </div>
                </section>
                <section className='flex justify-between mt-2 items-center'>
                    <section>
                        <p>Achal Sawant</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-700' : 'text-blue-50'}`}>+91 2345678902</p>
                    </section>
                    <section>
                        <IoIosArrowDown />
                    </section>
                </section>
            </section>
            <hr />
            <section className={`mt-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {sidebarData.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className={`flex items-center gap-6 ml-4 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'} cursor-pointer`}>
                            <IconComponent className='text-gray-500 text-2xl mt-8' />
                            <p className='mt-8'>{item.content}</p>
                        </div>
                    );
                })}
            </section>
        </aside>
    );
});

export default Sidebar;
