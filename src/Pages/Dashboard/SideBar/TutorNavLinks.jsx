import { CiViewTimeline } from "react-icons/ci";
import { SiSession } from "react-icons/si";
import { IoCreateSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { GiExplosiveMaterials } from "react-icons/gi";

const TutorNavLinks = () => {
    return (
        <nav className='text-white'>
            {/* Create study session */}
            <NavLink
                to='create-session'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <IoCreateSharp className='w-5 h-5' />

                <span className='mx-4 font-medium'>Create study session</span>
            </NavLink>

            {/* View all study sessions */}
            <NavLink
                to='my-all-sessions'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <SiSession  className='w-5 h-5' />

                <span className='mx-4 font-medium'>View all study sessions </span>
            </NavLink>
            {/* Upload materials */}
            <NavLink
                to='upload-materials'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <CiViewTimeline className='w-5 h-5' />

                <span className='mx-4 font-medium'> Upload materials </span>
            </NavLink>
            {/* View all materials */}
            <NavLink
                to='my-all-materials'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                    }`
                }
            >
                <GiExplosiveMaterials className='w-6 h-6' />

                <span className='mx-4 font-medium'>View all materials</span>
            </NavLink>
        </nav>
    );
};

export default TutorNavLinks;