import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Tutors = ({tutor}) => {
    const {image, name, email} = tutor || {}
    return (
        <div className="max-w-md p-4 text-white">
            <div className="card rounded-none">
                <div className=" dropdown relative dropdown-hover rounded-md">
                    <div tabIndex={0} role="button" ><img className=' w-[350px] border-[#C59D5F] border h-[300px] rounded-sm' src={image} alt="Shoes" /></div>
                    <ul tabIndex={0} className=" dropdown-content z-[1] lg:text-center absolute top-0 menu p-2 shadow bg-black  bg-opacity-70 h-full rounded- w-full">
                        <div className='absolute space-y-2 pb-10 pl-5 bottom-5'>
                            <div className='flex text-[#C59D5F] text-lg gap-5 justify-center items-center'>
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaInstagram /></a>
                            </div>
                            <p className='text-white pl-3 text-2xl'>{name}</p>
                            <p className='text-white pl-3'>{email}</p>
                        </div>
                    </ul>
                </div>
                <div className="card-body flex items-center ">
                    <h2 className="text-xl text-center italic">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Tutors;