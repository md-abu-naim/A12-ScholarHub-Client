import { CiViewTimeline } from "react-icons/ci";
import { FaBookBookmark } from "react-icons/fa6";
import { IoCreateSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const StudentNavLinks = () => {
    return (
        <nav className='text-white'>
            {/* View booked session */}
            <NavLink
                to='view-booked-session'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <FaBookBookmark className='w-5 h-5' />

                <span className='mx-4 font-medium'>View booked session</span>
            </NavLink>

            {/* Creat note */}
            <NavLink
                to='create-note'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <IoCreateSharp className='w-5 h-5' />

                <span className='mx-4 font-medium'>Create note</span>
            </NavLink>
            {/* Manage personal notes */}
            <NavLink
                to='personal-notes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <MdManageAccounts className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage personal notes</span>
            </NavLink>
            {/* View all study materials */}
            <NavLink
                to='all-study-materials'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <CiViewTimeline className='w-6 h-6' />

                <span className='mx-4 font-medium'>View all study materials</span>
            </NavLink>
        </nav>
    );
};

export default StudentNavLinks;