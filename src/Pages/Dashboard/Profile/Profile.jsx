import useAuth from "../../../Hooks/useAuth"

const Profile = () => {
    const { user } = useAuth()

    return (
        <div className='flex justify-center items-center  h-screen'>
            <div className='bg-[#1B1616] text-white shadow-lg border border-[#c59d5f] rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src={user.photoURL}
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-[#c59d5f] '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-black bg-[#c59d5f] rounded-full'>
                        Admin
                    </p>
                    <p className='mt-2 text-2xl font-medium text-white '>
                        {user.displayName}
                    </p>
                    <p className=''>
                        <span className="font-bold">Email: </span><span className=''>{user.email}</span>
                    </p>
                    <p>ID: {user?.uid}</p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-around text-sm text-white  '>
                            <button className='bg-[#c59d5f] px-10 py-1 rounded-lg text-black cursor-pointer hover:bg-[#c7a675] block mb-1'>
                                Update Profile
                            </button>
                            <button className='bg-[#c59d5f] px-7 py-1 rounded-lg text-black cursor-pointer hover:bg-[#bc9c6c]'>
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile