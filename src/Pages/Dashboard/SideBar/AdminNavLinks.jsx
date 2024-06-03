import { FaBookReader } from "react-icons/fa";
import {  FaUsers } from "react-icons/fa6";
import { GiExplosiveMaterials } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const AdminNavLinks = () => {
    return (
        <nav className='text-white'>
            {/* View all users */}
            <NavLink
                to='all-users'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <FaUsers className='w-5 h-5' />

                <span className='mx-4 font-medium'>View all users </span>
            </NavLink>

            {/* View all study session */}
            <NavLink
                to='all-study-session'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <FaBookReader className='w-5 h-5' />

                <span className='mx-4 font-medium'>View all study session </span>
            </NavLink>
            {/* View all materials */}
            <NavLink
                to='all-materials'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <GiExplosiveMaterials className='w-5 h-5' />

                <span className='mx-4 font-medium'> View all materials</span>
            </NavLink>
        </nav>
    );
};

export default AdminNavLinks;