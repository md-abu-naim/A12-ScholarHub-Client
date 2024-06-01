import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { CiViewTimeline } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { AiOutlineBars } from 'react-icons/ai'
import { IoCreateSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Sideber = () => {

    const [isActive, setActive] = useState(false)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div>
            <>
                {/* Small Screen Navbar */}
                <div className='bg-[#C39C5D] text-white flex justify-between md:hidden'>
                    <div>
                        <div className='block cursor-pointer p-4 font-bold'>
                            <Link to='/' className='text-2xl'>ScholarHub</Link>
                        </div>
                    </div>

                    <button
                        onClick={handleToggle}
                        className='mobile-menu-button p-4 focus:outline-none focus:bg-[#bba684]'
                    >
                        <AiOutlineBars className='h-5 w-5' />
                    </button>
                </div>

                {/* Sidebar */}
                <div
                    className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden text-white bg-[#C39C5D] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                        }  md:translate-x-0  transition duration-200 ease-in-out`}
                >
                    <div>
                        <div>
                            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                                <Link to='/' className='text-2xl font-bold text-black'>ScholarHub</Link>
                            </div>
                        </div>

                        {/* Nav Items */}
                        <div className='flex flex-col justify-between flex-1 mt-6'>
                            {/* Conditional toggle button here.. */}

                            {/*  Menu Items */}
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
                                    to='my-listings'
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
                                    to='my-listings'
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                                        }`
                                    }
                                >
                                    <CiViewTimeline className='w-6 h-6' />

                                    <span className='mx-4 font-medium'>View all study materials</span>
                                </NavLink>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <hr />

                        {/* Profile Menu */}
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-[#f7ce8c]  text-black' : 'text-black'
                                }`
                            }
                        >
                            <FcSettings className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Profile</span>
                        </NavLink>
                        {/* logout */}
                        <button

                            className='flex w-full items-center px-4 py-2 mt-5 text-black hover:text-white hover:bg-black transition-colors duration-300 transform'
                        >
                            <GrLogout className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Logout</span>
                        </button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Sideber;