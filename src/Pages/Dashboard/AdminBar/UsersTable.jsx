
const UsersTable = ({ user }) => {
    const { name, image, email, role } = user || {}
    return (
        <tr>
            <td className='px-5 py-5 border-b border-[#c59d5f] bg-[#222222] text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-white whitespace-no-wrap'>{name}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-[#c59d5f] bg-[#222222] text-sm'>
                <p className='text-white whitespace-no-wrap'>{email}</p>
            </td>
            <td className='px-5 py-5 border-b border-[#c59d5f] bg-[#222222] text-sm'>
                <p className='text-white whitespace-no-wrap'>{role}</p>
            </td>
            <td className='px-5 py-5 border-b border-[#c59d5f] bg-[#222222] text-sm'>
                <button
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-[#c59d5f] hover:bg-[#f7ce8c] opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Update</span>
                </button>
                
            </td>
        </tr>
    );
};

export default UsersTable;