import { FaGithub } from "react-icons/fa";
import Navber from "../Shared/Navber";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <Navber />
            <div className="bg-black py-8 text-white">
                <div className="w-full  font-serif max-w-md p-6 m-auto mx-auto bg-[#1B1616] rounded-2xl shadow-md dark:bg-gray-800">
                    <h2 className='text-2xl my-3 font-bold text-center'>ScholarHub</h2>
                    <h2 className='text-2xl my-3 font-bold text-center'>Please Sign In.</h2>

                    <form >
                        <div className="pb-2">
                            <label className="block text-sm text-white dark:text-gray-200">Email</label>
                            <input type="email" name="email" placeholder="Enter your Email" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm text-white dark:text-gray-200">Password</label>
                            <input type="password" name="password" placeholder="Enter your Password" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                                {/* <!-- Top glass gradient --> */}
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                {/* <!-- Bottom gradient --> */}
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                {/* <!-- Left gradient --> */}
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                {/* <!-- Right gradient --> */}
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative">Sign In</span>
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                        <p className="text-xs text-center text-white uppercase dark:text-gray-400">
                            or login with Social Media
                        </p>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                    </div>

                    <div className="flex items-center mt-6 gap-2 -mx-2">
                        <button className="relative w-full inline-flex items-center justify-center px-6 py-4 md:py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                </path>
                            </svg>
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                            {/* <!-- Top glass gradient --> */}
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            {/* <!-- Bottom gradient --> */}
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            {/* <!-- Left gradient --> */}
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            {/* <!-- Right gradient --> */}
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative hidden mx-2 sm:inline">Sign in with Google</span>
                        </button>

                        <button  className="relative w-full md:w-9 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                            {/* <!-- Top glass gradient --> */}
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            {/* <!-- Bottom gradient --> */}
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            {/* <!-- Left gradient --> */}
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            {/* <!-- Right gradient --> */}
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative text-2xl"><FaGithub /></span>
                        </button>
                    </div>

                    <p className="mt-8 text-xs font-light text-center text-white"> Dont have an account? <Link to='/signUp' className="font-bold text-blue-700 dark:text-gray-200 hover:underline">Create One</Link></p>
                </div>
            </div>
        </>
    );
};

export default Login;