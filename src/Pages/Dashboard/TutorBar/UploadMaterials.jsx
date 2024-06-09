import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";
import CommonBtn from "../../../Shared/CommonBtn";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";

const UploadMaterials = () => {
    const [sessions, setSessions] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const axiosCommon = useAxiosCommon()

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

    useEffect(() => {
        axiosSecure.get(`/sessions/${user?.email}?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => {
                // console.log(res.data);
                setSessions(res.data)
            })
    }, [axiosSecure, user?.email, currentPage, itemsPerPage])

    useEffect(() => {
        axiosCommon.get('/sessionsCount')
            .then(res => {
                // console.log(res.data.count);
                setCount(res.data.count)
            })
    })


    // handlePagination
    const handlePagination = value => {
        setCurrentPage(value)
    }
    return (
        <div>
            <SectionTitle heading='Upload materials' subHeading='This page is for uploading materials' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    sessions.map((session, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
                        <div className="flex-grow">
                            <div className='flex items-center justify-between'>
                                <span className='text-xs font-light text-white '>
                                    Registration start: {session.registration_start_date}
                                </span>
                                <span className='text-xs font-light text-white '>
                                    End: {session.registration_end_date}
                                </span>
                            </div>

                            <div>
                                <h1 className='mt-2 text-lg font-semibold text-white '>
                                    {session.session_title}
                                </h1>

                                <p className='mt-2 text-sm text-white '>
                                    {session.description}
                                </p>

                            </div>
                        </div>
                        <div className="flex items-end justify-end mt-4">
                            <Link to={`/dashboard/upload-materials/${session._id}`} ><CommonBtn title='Upload' /></Link>
                        </div>
                    </div>)
                }
            </div>

            {/* pagination */}
            <div className='flex justify-center mt-12'>
                {/* Previous Button */}
                <button
                    disabled={currentPage == 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-black disabled:text-gray-500 capitalize bg-[#c59d5f] rounded-md disabled:cursor-not-allowed disabled:hover:bg-[#786969] disabled:hover:text-white hover:bg-[#534848]  hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* Numbers */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePagination(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-[#c59d5f] text-black' : ''
                            }  px-4 py-2 mx-1 transition-colors duration-300 text-white transform  rounded-md sm:inline hover:bg-[#1B1616]  `}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* Next Button */}
                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePagination(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-black transition-colors duration-300 transform bg-[#c59d5f] rounded-md hover:bg-[#473f3f] disabled:hover:bg-[#1B1616] disabled:hover:text-white hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default UploadMaterials;