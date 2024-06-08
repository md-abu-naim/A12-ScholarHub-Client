import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";
import CommonBtn from "../../../Shared/CommonBtn";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'

const UploadMaterials = () => {
    const axiosSecure = useAxiosSecure()

    const { data: sessions = [] } = useQuery({
        queryKey: ['allSessions'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/allSessions`)
            const sessions = data.filter(session => session.status === 'Approved' )
            return sessions
        }
    })
    
    return (
        <div>
            <SectionTitle heading='Upload materials' subHeading='This page is for uploading materials' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
                            <Link to={`/${session._id}`} ><CommonBtn title='Upload' /></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UploadMaterials;