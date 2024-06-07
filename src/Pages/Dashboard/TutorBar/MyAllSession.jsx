import SectionTitle from "../../../Shared/SectionTitle";
import CommonBtn from "../../../Shared/CommonBtn";
import { useQuery } from '@tanstack/react-query'
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ViewReasion from "./Modals/ViewReasion";
import { useState } from "react";
import toast from "react-hot-toast";

const MyAllSession = () => {
    const [sessionId, setSessionId] = useState('')
    const [reason, setReason] = useState('')
    const [feedback, setFeedback] = useState('')
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: allSessions = [], refetch } = useQuery({
        queryKey: ['allSessions', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/sessions/${user?.email}`)
            return data
        }
    })

    const handleRejectModal = (id, reason, feedback) => {
        setFeedback(feedback)
        setReason(reason)
        setSessionId(id)
        document.getElementById('my_modal_3').showModal()
    }

    const handleNewRequest = () => {
        const id = sessionId
        const NewRequest = {
            status: 'Pending',
            registration_fee: '0'
        }
        axiosSecure.put(`/session/${id}`,NewRequest )
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('New Request has been successfully!🤩')
                }
            })
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
                            {session.status === "Rejected" ? <button onClick={() => handleRejectModal(session._id, session.reason, session.feedback)}><CommonBtn title="View Rejected" /></button> :
                                <button><CommonBtn title={session.status === 'Pending' ? 'Pending...' : 'Approved'} /></button>}

                            <ViewReasion reason={reason} feedback={feedback} handleNewRequest={handleNewRequest} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyAllSession;