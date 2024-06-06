import SectionTitle from "../../../Shared/SectionTitle";
import CommonBtn from "../../../Shared/CommonBtn";
import { useQuery } from '@tanstack/react-query'
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ViewReasion from "./Modals/ViewReasion";
import { useState } from "react";
import NewReques from "./Modals/NewReques";

const MyAllSession = () => {
    const [sessionId, setSessionId] = useState('')
    const [reason, setReason] = useState('')
    const [feedback, setFeedback] = useState('')
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: allSessions = [] } = useQuery({
        queryKey: ['allSessions', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/sessions/${user?.email}`)
            return data
        }
    })
console.log(sessionId);
console.log(reason, feedback);
    const handleRejectModal = (id, reason, feedback) => {
        setFeedback(feedback)
        setReason(reason)
        setSessionId(id)
        document.getElementById('my_modal_3').showModal()
    }

    const handleApproveModal = (id) => {
        setSessionId(id)
        document.getElementById('my_modal_2').showModal()
    }

    return (
        <div>
            <SectionTitle heading='My all study sessions' subHeading='This is all study sessions page' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    allSessions.map((session, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
                        <div className="flex-grow">
                            <div className='flex items-center justify-between'>
                                <span className='text-xs font-light text-white '>
                                    Registration end: {session.registration_end_date}
                                </span>
                                <span className='text-xs font-light bg-[#C39C5D] rounded-full px-2 text-black '>
                                    {session.status}{session.status === "Pending" && '...'}
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
                            { session.status === "Rejected" ? <button onClick={() => handleRejectModal(session._id, session.reason, session.feedback)}><CommonBtn title= "View Rejected" /></button> :
                             <button onClick={() => handleApproveModal(session._id)}><CommonBtn title= 'New Request' /></button>}

                            <ViewReasion />
                            <NewReques />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyAllSession;