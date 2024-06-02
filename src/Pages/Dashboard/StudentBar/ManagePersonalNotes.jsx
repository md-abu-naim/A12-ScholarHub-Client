
import { Link } from "react-router-dom";
import CommonBtn from "../../../Shared/CommonBtn";
import SectionTitle from "../../../Shared/SectionTitle";
import { useQuery } from '@tanstack/react-query'
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const ManagePersonalNotes = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: notes = [], } = useQuery({
        queryKey: ['tutors', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/notes/${user?.email}`)
            console.log(data);
            return data
        }
    })
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
                            <Link ><CommonBtn title={<MdOutlineBrowserUpdated className="text-xl" />} /></Link>
                            <button ><CommonBtn title={<MdDeleteForever className="text-xl" />} /></button>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default ManagePersonalNotes;