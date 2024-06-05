// import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CommonBtn from "../../Shared/CommonBtn";
// import { useQuery } from '@tanstack/react-query'

const SassionCard = () => {
    const [sessions, setSassions] = useState([])
    // const newDate = new Date().toLocaleDateString()
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
            {
                sessions.slice(0, 6).map((session, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
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
                        <Link to={`/${session.sassion_title}`} ><CommonBtn title={session.registration_end_date > new Date().toISOString() ? ' closed' : 'Ongoing' } /></Link>
                    </div>
                </div>)
            }
        </>
    );
};
// 'Ongoing'
export default SassionCard;