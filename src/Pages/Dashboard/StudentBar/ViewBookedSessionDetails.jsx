import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const ViewBookedSessionDetails = () => {
    const [sassionsDetails, setSassionsDetails] = useState([])
    const { session_title } = useParams()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const sassions = sassionsDetails.find(sassion => sassion.sassion_title === session_title)
    const { sassion_title: title, tutor_name, rating, description,
        registration_start_date, registration_end_date, class_start_time,
        class_end_time, session_duration, registration_fee, category } = sassions || {}

    useEffect(() => {
        axios('/SassionCard.json')
            .then(res => setSassionsDetails(res.data))
    }, [])


    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['tutors'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/reviews')
            console.log(data);
            return data
        }
    })

    const handleReview = e => {
        e.preventDefault()
        const form = e.target
        const review = form.review.value
        const rating = form.rating.value
        const name = user?.displayName
        const image = user?.photoURL
        const studentReview = { review, rating, name, image }

        axiosSecure.post('/review', studentReview)
            .then(res => {
                if (res.data.insertedId) {
                    refetch()
                    e.target.reset()
                    toast.success('Thanks for your best Review')
                }
            })
    }

    return (
        <div className='flex flex-col lg:flex-row justify-around gap-5  min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            {/* Job Details */}
            <div className="w-full">
                <div className='flex-1  border-[#C39C5D] border px-4 py-7  rounded-md shadow-md md:min-h-[350px]'>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm font-light text-white '>
                            Ragistration start: {registration_start_date}
                        </span>
                        <span className='text-sm font-light text-white '>
                            Ragistration end: {registration_end_date}
                        </span>
                    </div>

                    <div>
                        <h1 className='mt-2 md:text-3xl text-xl font-semibold text-white '>
                            {title}
                        </h1>

                        <p className='mt-2 text-white '>
                            {description}
                        </p>
                        <div className="flex md:justify-between flex-col md:flex-row">
                            <p className='mt-6 text-sm font-bold text-white '>
                                Tutor Name: {tutor_name}
                            </p>
                            <p className='mt-6 text-sm font-bold text-white '>
                                Category: {category}
                            </p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className="">
                                <p className='mt-2 text-sm  text-white '>Class start: {class_start_time}</p>
                                <p className='mt-2 text-sm  text-white '>Class end: {class_end_time}</p>
                                <p className='mt-2 text-sm  text-white '>Class duration: {session_duration}</p>
                            </div>

                        </div>
                        <div className="flex justify-between items-center">
                            <p className='mt-6 text-lg font-bold text-white '>
                                Registration Fee: {registration_fee}
                            </p>
                            <p className='mt-6 text-lg font-bold text-white '>
                                Average rating: {rating}
                            </p>
                        </div>
                    </div>
                    <button className="relative mt-8 w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
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
                        <span className="relative">Book Now</span>
                    </button>
                </div>
            </div>
            {/* Place A Bid Form */}
            <div className="w-full">
                <section className='p-6 border-[#C39C5D] border text-white rounded-md shadow-md flex-1 '>
                    <h2 className='text-2xl text-center font-semibold capitalize '>
                        Students Review*
                    </h2>
                    <div className="flex flex-col items-center gap-3 mt-5">
                        <img src={user?.photoURL} alt="" className="self-center flex-shrink-0 w-16 h-16 border-[#C39C5D] border-2 rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                        <form onSubmit={handleReview}>
                            <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
                                <input type="text" name="review" placeholder="Type here your review" className="input input-bordered input-md w-full bg-[#1B1616]" />
                                <input type="text" name="rating" placeholder="Type here your rating" className="input input-bordered input-md w-full bg-[#1B1616]" />
                            </div>
                            <div className="flex  items-center mt-4 justify-center">
                                <button className="relative w-[200px] inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#c59d5f] rounded hover:bg-[#c59d5f] group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#222222] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative text-center w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white italic">Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-8 space-y-4">
                        {
                            reviews.map(review => <div key={review._id} className=" bg-[#1B1616] p-5 rounded-lg">
                                <div className="flex flex-col space-y-4 md:space-y-0">
                                    <div className="flex items-center mb-3 gap-3">
                                        <img src={review.image} alt="" className="self-center flex-shrink-0 w-12 h-12 border-[#C39C5D] border-2 rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                                        <div className="font-bold ">
                                            <h4 className="text-lg font-semibold text-center md:text-left">{review.name}</h4>
                                            <p className="flex gap-1 items-center">{review.rating}<FaStar className="text-[#C39C5D]" /></p>
                                        </div>
                                    </div>
                                    <p className="dark:text-gray-600"><span className="text-[#C39C5D]">Review:</span> {review.review}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ViewBookedSessionDetails;