import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useStudent from "../Hooks/useStudent";
import useAdmin from "../Hooks/useAdmin";
import useTutor from "../Hooks/useTutor";

const Navber = () => {
    const { user , logOutUser} = useAuth()
    const [isStudent] = useStudent()
    const [isTutor] = useTutor()
    const [isAdmin] = useAdmin()

    const signOutUser = () => {
        logOutUser(() => {
            toast.success('Sign Out successfully')
        })
    }
    return (
        <div className="navbar font-serif bg-[#C39C5D] py-3 px-5 md:px-12">
            <div className="navbar-start">

                <Link to='/' className="btn btn-ghost font-bold text-xl md:text-3xl"> ScholarHub </Link>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full">
                                <img title={user?.displayName} alt="User Profile" src={user?.photoURL} className="w-20" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-[#C39C5D] text-black font-bold rounded-box w-52">
                            { user && isStudent && <li className='hover:bg-black hover:text-white rounded-full'><Link to='/dashboard/view-booked-session' >Dashoard</Link></li>}
                            { user && isTutor && <li className='hover:bg-black hover:text-white rounded-full'><Link to='/dashboard/view-booked-session' >Dashoard</Link></li>}
                            { user && isAdmin && <li className='hover:bg-black hover:text-white rounded-full'><Link to='/dashboard/all-users' >Dashoard</Link></li>}
                            <li className='hover:bg-black hover:text-white rounded-full' onClick={signOutUser}><Link to='/signIn'>Sign Out</Link></li>
                        </ul>
                    </div> :
                        <div className='flex gap-3'>
                            <Link to='/signUp' className="relative hidden  md:inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">SignUp</span>
                            </Link>
                            <Link to='/signIn' className="relative  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white font-bold">SignIn</span>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navber;