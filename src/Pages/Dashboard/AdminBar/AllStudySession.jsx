import SectionTitle from "../../../Shared/SectionTitle";
import CommonBtn from "../../../Shared/CommonBtn";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import { useState } from "react";
import Approve from "./Modals/Approve";
import toast from "react-hot-toast";
import Reject from "./Modals/Reject";
import { MdDeleteForever, MdOutlineBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllStudySession = () => {
    const [approveId, setApproveId] = useState('')
    const [title, setTitle] = useState('')
    const axiosSecure = useAxiosSecure()

    const handleApproveModal = (id, title) => {
        setTitle(title);
        setApproveId(id)
        console.log(id, title);
        document.getElementById('my_modal_3').showModal()
    }

    const handleRejectModal = (id, title) => {
        setTitle(title);
        setApproveId(id)
        document.getElementById('my_modal_2').showModal()
    }

    const { data: allSessions = [], refetch } = useQuery({
        queryKey: ['allSessions'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/allSessions`)
            return data
        }
    })
    const sessions = allSessions.filter(session => session.status !== "Rejected")

    const handleApprove = (e) => {
        e.preventDefault()
        const registration_fee = e.target.registration_fee.value
        const status = 'Approved'
        const id = approveId
        const updateInfo = {
            registration_fee: registration_fee,
            status: status
        }

        e.target.reset()

        console.log(id, updateInfo);
        axiosSecure.put(`/session/${id}`, updateInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('Session has been Approve!🤩')
                }
            })
    }

    const handleReject = e => {
        e.preventDefault()
        const id = approveId
        const form = e.target
        const reason = form.reason.value
        const feedback = form.feedback.value
        const rejectReason = {
            status: 'Rejected',
            reason: reason,
            feedback: feedback
        }

        e.target.reset()
        axiosSecure.put(`/session/${id}`, rejectReason)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('Session has been Rejected!☺')
                }
            })
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            background: "black",
            color: "white"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/session/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Session has been deleted.",
                                icon: "success",
                                background: "black",
                                color: 'white'
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle heading='view all study session' subHeading='This is our all study session page' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    sessions.map((session, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
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
                        <div className="flex items-center justify-between mt-4">
                            {session.status === "Approved" ? <><Link to={`/dashboard/update-session/${session._id}`} title="Update Session"><CommonBtn title={<MdOutlineBrowserUpdated className="text-2xl " />} /></Link>
                                <button onClick={() => handleDelete(session._id)} title="Delete Session"><CommonBtn title={<MdDeleteForever className="text-xl" />} /></button></> :
                                <><button onClick={() => handleApproveModal(session._id, session.session_title)} title="Approve Session"><CommonBtn title={<FcApprove className="text-2xl " />} /></button>
                                    <button onClick={() => handleRejectModal(session._id, session.session_title)} title="Reject Session"><CommonBtn title={<FcDisapprove className="text-xl" />} /></button></>}
                        </div>
                        <Approve handleApprove={handleApprove} title={title} />
                        <Reject handleReject={handleReject} title={title} />
                    </div>)
                }
            </div>

            
        </div>
    );
};

export default AllStudySession;