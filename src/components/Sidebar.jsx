// import React, { forwardRef } from 'react';
// import { IoSunnySharp, IoMoon } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import sidebarData from '../assets/SidebarData';
// import { useTheme } from '../contexts/ThemeContext';

// const Sidebar = forwardRef(({ isVisible }, ref) => {
//     const { darkMode, toggleDarkMode } = useTheme();

//     return (
//         <aside ref={ref} className={`fixed top-0 left-0 h-full bg-gray-700 text-white transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} style={{ width: '80%' }}>
//             <section className='p-4'>
//                 <section className='flex justify-between'>
//                     <img src='' alt='profile' className='h-20 w-20 rounded-full border-2 border-red-500'/>
//                     <div onClick={toggleDarkMode} className="cursor-pointer">
//                         {darkMode ? <IoMoon /> : <IoSunnySharp />}
//                     </div>
//                 </section>
//                 <section className='flex justify-between mt-2 items-center'>
//                     <section>
//                         <p>Achal Sawant</p>
//                         <p className='text-gray-500'>+91 2345678902</p>
//                     </section>
//                     <section>
//                         <IoIosArrowDown />
//                     </section>
//                 </section>
//             </section>
//             <section className='mt-4'>
//                 {sidebarData.map((item, index) => {
//                     const IconComponent = item.icon;
//                     return (
//                         <div key={index} className="flex items-center gap-6 ">
//                             <IconComponent className='text-gray-500 text-2xl mt-3'/>
//                             <p className='mt-3'>{item.content}</p>
//                         </div>
//                     );
//                 })}
//             </section>
//         </aside>
//     );
// });

// export default Sidebar;


import React, { forwardRef } from 'react';
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import sidebarData from '../assets/SidebarData';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar = forwardRef(({ isVisible }, ref) => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <aside ref={ref} className={`fixed top-0 left-0 h-full ${darkMode ? 'bg-gray-800' : 'bg-gray-700'} text-white transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} style={{ width: '80%', zIndex: 50 }}>
            <section className='p-4'>
                <section className='flex justify-between'>
                    <img src='' alt='profile' className='h-20 w-20 rounded-full border-2 border-red-500'/>
                    <div onClick={toggleDarkMode} className="cursor-pointer">
                        {darkMode ? <IoSunnySharp /> : <IoMoon />} {/* Adjusted icon */}
                    </div>
                </section>
                <section className='flex justify-between mt-2 items-center'>
                    <section>
                        <p>Achal Sawant</p>
                        <p className='text-gray-500'>+91 2345678902</p>
                    </section>
                    <section>
                        <IoIosArrowDown />
                    </section>
                </section>
            </section>
            <section className='mt-4'>
                {sidebarData.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className="flex items-center gap-6 ">
                            <IconComponent className='text-gray-500 text-2xl mt-3'/>
                            <p className='mt-3'>{item.content}</p>
                        </div>
                    );
                })}
            </section>
        </aside>
    );
});

export default Sidebar;