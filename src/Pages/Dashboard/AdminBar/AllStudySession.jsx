import SectionTitle from "../../../Shared/SectionTitle";
import CommonBtn from "../../../Shared/CommonBtn";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import { useState } from "react";
import Approve from "./Modals/Approve";
import toast from "react-hot-toast";
// import Approve from "./Modals/Approve";

const AllStudySession = () => {
    const [approveId, setApproveId] = useState('')
    const axiosSecure = useAxiosSecure()

    const handleModal = (id) => {
        setApproveId(id)
        document.getElementById('my_modal_3').showModal()
    }

    const { data: allSessions = [], refetch } = useQuery({
        queryKey: ['allSessions'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/allSessions`)
            return data
        }
    })

    const handleClick = (e) => {
        e.preventDefault()
        const registration_fee = e.target.registration_fee.value
        const status = 'Approve'
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
    return (
        <div>
            <SectionTitle heading='view all study session' subHeading='This is our all study session page' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    allSessions.map((session, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
                        <div className="flex-grow">
                            <div className='flex items-center justify-between'>
                                <span className='text-xs font-light text-white '>
                                    Registration end: {session.registration_end_date}
                                </span>
                                <span className='text-xs font-light bg-[#C39C5D] rounded-full px-2 text-black '>
                                    {session.status}...
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
                            <button onClick={() => handleModal(session._id)} title="Approve Session"><CommonBtn title={<FcApprove className="text-2xl " />} /></button>
                            <button title="Reject Session"><CommonBtn title={<FcDisapprove className="text-xl" />} /></button>
                        </div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn">open modal</button> */}
                        {/* <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                <button onClick={ handleClick}>onClick</button>
                            </div>
                        </dialog> */}
                        <Approve handleClick={handleClick} title={session.session_title} />
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllStudySession;