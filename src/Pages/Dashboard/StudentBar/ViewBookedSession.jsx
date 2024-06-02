
// import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CommonBtn from "../../../Shared/CommonBtn";
import SectionTitle from "../../../Shared/SectionTitle";
// import { useQuery } from '@tanstack/react-query'

const ViewBookedSession = () => {
    const [sassions, setSassions] = useState([])

    // const axiosCommon = useAxiosCommon()
    // const {data: study = []} = useQuery({
    //     queryKey: ['study'],
    //     queryFn: async() => {
    //         const {data} = axios()
    //         console.log(data);
    //     }
    // })

    useEffect(() => {
        axios('/SassionCard.json')
            .then(res => setSassions(res.data))
    }, [])
    return (
        <>
            <SectionTitle heading='View booked sessaion' subHeading='This is my booked session' />
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
                {
                    sassions.slice(0, 6).map((sassion, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
                        <div className="flex-grow">
                            <div className='flex items-center justify-between'>
                                <span className='text-xs font-light text-white '>
                                    Registration start: {sassion.registration_start_date}
                                </span>
                                <span className='text-xs font-light text-white '>
                                    End: {sassion.registration_end_date}
                                </span>
                            </div>

                            <div>
                                <h1 className='mt-2 text-lg font-semibold text-white '>
                                    {sassion.sassion_title}
                                </h1>

                                <p className='mt-2 text-sm text-white '>
                                    {sassion.description}
                                </p>

                            </div>
                        </div>
                        <div className="flex bottom-0 flex-grow items-end justify-end mt-4">
                            <Link to={`/dashboard/booked-session/${sassion.sassion_title}`} ><CommonBtn title=' Details' /></Link>
                        </div>
                    </div>)
                }
            </div></>
    );
};

export default ViewBookedSession;