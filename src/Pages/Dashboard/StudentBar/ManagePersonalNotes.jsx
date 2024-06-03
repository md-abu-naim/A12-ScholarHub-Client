
import { Link } from "react-router-dom";
import CommonBtn from "../../../Shared/CommonBtn";
import SectionTitle from "../../../Shared/SectionTitle";
import { useQuery } from '@tanstack/react-query'
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const ManagePersonalNotes = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: notes = [], refetch } = useQuery({
        queryKey: ['tutors', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/notes/${user?.email}`)
            return data
        }
    })

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

                axiosSecure.delete(`/note/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Note has been deleted.",
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
        <>
            <SectionTitle heading='manage personal notes' subHeading='This is personal notes' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    notes.map((note, i) => <div key={i} className='w-full   max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col'>
                        <div className="flex-grow">
                            <h3 className="text-white">Email: {note.email}</h3>
                            <div>
                                <h1 className='mt-2 text-lg font-semibold text-white '>
                                    {note.title}
                                </h1>

                                <p className='mt-2 text-sm text-white '>
                                    {note.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <Link to={`/dashboard/manage-note/${note._id}`}><CommonBtn title={<MdOutlineBrowserUpdated className="text-xl" />} /></Link>
                            <button onClick={() => handleDelete(note._id)} ><CommonBtn title={<MdDeleteForever className="text-xl" />} /></button>
                        </div>
                    </div>)
                }
            </div >
        </>
    );
};

export default ManagePersonalNotes;