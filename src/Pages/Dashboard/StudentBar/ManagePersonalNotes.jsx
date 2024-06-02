import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CommonBtn from "../../../Shared/CommonBtn";
import SectionTitle from "../../../Shared/SectionTitle";
// import { useQuery } from '@tanstack/react-query'
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";


const ManagePersonalNotes = () => {
    const [sassions, setSassions] = useState([])

    useEffect(() => {
        axios('/SassionCard.json')
            .then(res => setSassions(res.data))
    }, [])
    return (
        <>
        <SectionTitle heading='manage personal notes' subHeading='This is personal notes' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    sassions.slice(0, 6).map((sassion, i) => <div key={i} className='w-full  flex-grow-0  max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all'>
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
                        <div className="flex  bottom-0 flex-grow  items-center justify-between mt-4">
                            <button ><CommonBtn title={<MdDeleteForever className="text-xl" />} /></button>
                            <Link to={`/${sassion.sassion_title}`} ><CommonBtn title={<MdOutlineBrowserUpdated className="text-xl" />} /></Link>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default ManagePersonalNotes;