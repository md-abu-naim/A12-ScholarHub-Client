import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { Link } from "react-router-dom";
import CommonBtn from "../../Shared/CommonBtn";
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";

const SassionCard = () => {
    const [allSessions, setAllSessions] = useState(true)
    const axiosCommon = useAxiosCommon()

    const { data: sessions = [] } = useQuery({
        queryKey: ['allSessions'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/allSessions`)
            const sessions = data.filter(session => session.status === 'Approved')
            return sessions
        }
    })

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
                { 
                    allSessions ? sessions.slice(0, 6).map((session, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
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
                            <Link to={`/${session._id}`} ><CommonBtn title={new Date() >= new Date(session.registration_start_date) && new Date() <= new Date(session.registration_end_date) ? 'Ongoing' : 'Closed'} /></Link>
                        </div>
                    </div>) :
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
                                <Link to={`/${session._id}`} ><CommonBtn title={new Date() >= new Date(session.registration_start_date) && new Date() <= new Date(session.registration_end_date) ? 'Ongoing' : 'Closed'} /></Link>
                            </div>
                        </div>)
                }
            </div>

            {  sessions.length <= 6 ? '' : <div className="flex items-center justify-center mt-8">
                     <button onClick={() => setAllSessions(false)}><CommonBtn title={allSessions ? 'See All Sessions': 'All sessions are shown'}></CommonBtn></button>
                </div>
            }
        </div>
    );
};

export default SassionCard;