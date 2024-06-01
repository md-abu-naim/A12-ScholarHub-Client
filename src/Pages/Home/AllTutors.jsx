import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle";

const AllTutors = () => {
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        axios('/Tutors.json')
            .then(res => {
                setTutors(res.data)
            })
    })
    return (
        <div className="pt-24">
            <SectionTitle heading='All Tutors' subHeading='Our Tutors team' ></SectionTitle>
            <div className=" text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    tutors.slice(0, 8).map((tutor, i) => <div key={i} className="max-w-md p-4 text-white">
                        <div key={tutor.id} className="card rounded-none">
                            <div className=" dropdown relative dropdown-hover rounded-md">
                                <div tabIndex={0} role="button" ><img className=' rounded-sm' src={tutor.image} alt="Shoes" /></div>
                                <ul tabIndex={0} className=" dropdown-content z-[1] lg:text-center absolute top-0 menu p-2 shadow bg-black  bg-opacity-70 h-full rounded- w-full">
                                    <div className='absolute space-y-2 pb-10 bottom-5'>
                                        <div className='flex text-[#C59D5F] text-lg gap-5 justify-center items-center'>
                                            <a href=""><FaFacebookF /></a>
                                            <a href=""><FaTwitter /></a>
                                            <a href=""><FaInstagram /></a>
                                        </div>
                                        <p className='text-white pl-3 text-2xl'>{tutor.name}</p>
                                        <p className='text-white pl-3'>{tutor.email}</p>
                                    </div>
                                </ul>
                            </div>
                            <div className="card-body flex items-center ">
                                <h2 className="text-xl text-center italic">{tutor.name}</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTutors;