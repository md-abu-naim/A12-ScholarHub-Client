import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <div className="navbar bg-[#C39C5D] py-3 px-5 md:px-12">
            <div className="navbar-start">

                <Link to='/' className="btn btn-ghost font-bold text-xl md:text-3xl"> ScholarHub </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/dashboard/view-booked-session'>Dashboard</Link></li>
                        <li><Link to='/signIn'>SignIn</Link></li>
                        <li><Link to='/signUp'>SignUp</Link></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;