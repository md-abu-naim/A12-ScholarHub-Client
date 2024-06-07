import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../Hooks/useAdmin";
import useTutor from "../Hooks/useTutor";
import useAxiosCommon from "../Hooks/useAxiosCommon";

const SassionCardDetails = () => {
    const [isTutor] = useTutor()
    const [isAdmin] = useAdmin()
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate()

    const { data: sessions = [] } = useQuery({
        queryKey: ['session'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/allSessions`)
            return data
        }
    })

    const session = sessions.find(session => session._id === id)
    const { _id, session_title: title, tutor_name, description,
        registration_start_date, registration_end_date, class_start_time,
        class_end_time, session_duration, registration_fee, category } = session || {}
        
    const { data: reviews = [], } = useQuery({
        queryKey: ['tutors'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/reviews')
            const filterData = data.filter(review => review.session_id === _id)
            return filterData
        }
    })
    const totalRating = reviews.reduce((total, item) => total + item.rating, 0)

    const handleBook = () => {
        if(!registration_fee == 0){
            navigate('/payment')
        }
    }


    return (
        <div className="pt-24 ">
            <div className='flex flex-col lg:flex-row justify-around gap-5  min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
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
                                    Average rating: {totalRating}
                                </p>
                            </div>
                        </div>
                        <button onClick={handleBook} disabled={ isAdmin || isTutor} className="relative mt-8 w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative">{registration_end_date >= new Date().toISOString() ? 'Registration Closed' : 'Book Now'}</span>
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <section className='p-6 border-[#C39C5D] border text-white rounded-md shadow-md flex-1 '>
                        <h2 className='text-lg font-semibold capitalize '>
                            Students Review*
                        </h2>
                        <div className="mt-8 space-y-4">
                            {
                                reviews.length <= 0 ? <div className=" bg-[#1B1616] p-5 rounded-lg">
                                    <div className="flex items-center justify-center">
                                        <h4 className="text-lg font-semibold text-center md:text-left">No Review</h4>
                                    </div>
                                </div> :
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

        </div>
    );
};

export default SassionCardDetails;