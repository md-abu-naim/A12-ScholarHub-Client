import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import useAdmin from '../../../Hooks/useAdmin';
import StudentNavLinks from './StudentNavLinks'
import AdminNavLinks from './AdminNavLinks'
import useStudent from '../../../Hooks/useStudent'
import useTutor from '../../../Hooks/useTutor'
import TutorNavLinks from './TutorNavLinks'
const Sideber = () => {
    const [isActive, setActive] = useState(false)
    const { logOutUser } = useAuth()
    const [isStudent] = useStudent()
    const [isTutor] = useTutor()
    const [isAdmin] = useAdmin()
    const {user} = useAuth()
    
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            <>
                {/* Small Screen Navbar */}
                <div className='bg-[#C39C5D] text-black flex justify-between md:hidden'>
                    <div>
                        <div className='block cursor-pointer p-4 font-bold'>
                            <Link to='/' className='text-2xl text-black'>ScholarHub</Link>
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

                            {/*  Menu Items */}
                            {user && isStudent && <StudentNavLinks />}
                            {user && isTutor && <TutorNavLinks />}
                            {user && isAdmin && <AdminNavLinks />}
                            
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
                            onClick={logOutUser}
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