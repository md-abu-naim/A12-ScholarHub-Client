import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SassionCardDetails = () => {
    const [sassionsDetails, setSassionsDetails] = useState([])
    const {sassion_title} = useParams()
    const sassions = sassionsDetails.find(sassion => sassion.sassion_title === sassion_title)
    const {sassion_title : title, tutor_name, rating, description,
         registration_start_date, registration_end_date, class_start_time,
         class_end_time, session_duration, registration_fee} = sassions || {}

    useEffect(() => {
        axios('/SassionCard.json')
            .then(res => setSassionsDetails(res.data))
    }, [])
    return (
        <div className="pt-24 ">
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
                            <p className='mt-6 text-sm font-bold text-white '>
                                Tutor Name: {tutor_name}
                            </p>
                            <div className='flex items-center gap-5'>
                                <div className="md:flex md:flex-row lg:flex-col md:justify-around md:gap-10 lg:gap-0">
                                    <p className='mt-2 text-sm  text-white '>Class start: {class_start_time}</p>
                                    <p className='mt-2 text-sm  text-white '>Class end: {class_end_time}</p>
                                    <p className='mt-2 text-sm  text-white '>Class duration: {session_duration}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className='mt-6 text-lg font-bold text-white '>
                                    Registration Fee: ${registration_fee}
                                </p>
                                <p className='mt-6 text-lg font-bold text-white '>
                                    Average rating: {rating}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Place A Bid Form */}
                <div className="w-full">
                    <section className='p-6 border-[#C39C5D] border text-white rounded-md shadow-md flex-1 '>
                        <h2 className='text-lg font-semibold capitalize '>
                            Students Review*
                        </h2>
                        <div className="mt-8 space-y-4">
                            <div className=" bg-[#1B1616] p-5 rounded-lg">
                                <div className="flex flex-col space-y-4 md:space-y-0">
                                    <div className="flex items-center mb-3 gap-3">
                                        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-12 h-12 border-[#C39C5D] border-2 rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                                        <div className="font-bold ">
                                            <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                                            <p className="flex gap-1 items-center">2.4<FaStar className="text-[#C39C5D]" /></p>
                                        </div>
                                    </div>
                                    <p className="dark:text-gray-600"><span className="text-[#C39C5D]">Review:</span> Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                                </div>
                            </div>
                            <div className=" bg-[#1B1616] p-5 rounded-lg">
                                <div className="flex flex-col space-y-4 md:space-y-0">
                                    <div className="flex items-center mb-3 gap-3">
                                        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-12 h-12 border-[#C39C5D] border-2 rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                                        <div className="font-bold ">
                                            <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                                            <p className="flex gap-1 items-center">2.4<FaStar className="text-[#C39C5D]" /></p>
                                        </div>
                                    </div>
                                    <p className="dark:text-gray-600"><span className="text-[#C39C5D]">Review:</span> Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default SassionCardDetails;