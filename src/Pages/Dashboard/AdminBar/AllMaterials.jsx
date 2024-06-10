/* eslint-disable no-unused-vars */
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";

const AllMaterials = () => {
    const [materials, setMaterials] = useState()
    const [itemsPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const axiosSecure = useAxiosSecure()
    const axiosCommon = useAxiosCommon()

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)


    useEffect(() => {
        axiosSecure.get(`/materials?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => {
                console.log(res.data);
                setMaterials(res.data)
            })
    }, [axiosSecure, currentPage, itemsPerPage])

    useEffect(() => {
        axiosCommon.get('/materialsCount')
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
            <SectionTitle heading='view all materials' subHeading='This is our all materials page' />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {materials?.map(material => <div key={material._id} className="card md:w-96 bg-[#1B1616] text-white shadow-xl">
                    <figure><img src={material?.img} alt="Shoes" className="border-[10px] rounded-xl border-[#1B1616] h-[250px]" /></figure>
                    <div className="card-body px-3">
                        <h2 className="card-title text-xl">{material?.title}</h2>
                        <p className="flex gap-2">Link: <a href={material?.link} target="_blank" className="text-blue-500 underline">https://drive.google.com/file</a></p>
                        <p className="flex gap-2">Email: <span>{material?.tutor_email}</span></p>
                    </div>
                    <div className="card-actions  pb-4 px-4">
                        <Link to={`/dashboard/materials/${material._id}`} className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative">Update</span>
                        </Link>
                    </div>
                </div>)}
            </div>

            {/* pagination */}
            <div className='flex justify-center mt-12'>
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
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePagination(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-[#c59d5f] text-black' : ''}  px-4 py-2 mx-1 transition-colors duration-300 text-white transform  rounded-md sm:inline hover:bg-[#1B1616]  `}
                    >
                        {btnNum}
                    </button>
                ))}
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

export default AllMaterials;