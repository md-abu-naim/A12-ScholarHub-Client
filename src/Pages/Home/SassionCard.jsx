// import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useEffect, useState } from "react";
import CommonBtn from "../../Shared/CommonBtn";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useQuery } from '@tanstack/react-query'

const SassionCard = () => {
    const [sassions, setSassions] = useState([])

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
                sassions.slice(0,6).map((sassion, i) => <div key={i} className='w-full rel max-h-[300px] max-w-md  px-4 py-3 bg-[#1B1616] rounded-md shadow-md hover:scale-[1.05] transition-all'>
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
                    <div className="flex bottom-0 flex-grow items-end justify-end mt-4">
                        <Link to={`/${sassion.sassion_title}`} ><CommonBtn title='Ongoing' /></Link>
                    </div>
                </div>)
            }
        </>
    );
};

export default SassionCard;