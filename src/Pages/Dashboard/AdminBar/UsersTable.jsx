import { Link } from "react-router-dom";

const UsersTable = ({ user,  }) => {
    const {_id, name, image, email, role } = user || {}

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
                <Link to={`/dashboard/update-role/${_id}`} 
                    className='relative bg-[#c59d5f] hover:bg-[#f7ce8c] rounded-full cursor-pointer inline-block px-3 py-1 font-semibold text-black leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Update</span>
                </Link>
            </td>
        </tr>
    );
};

export default UsersTable;