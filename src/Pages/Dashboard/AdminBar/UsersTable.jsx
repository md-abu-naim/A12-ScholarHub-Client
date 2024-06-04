
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
                <button onClick={() => document.getElementById('my_modal_3').showModal()}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-[#c59d5f] hover:bg-[#f7ce8c] opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Update</span>
                </button>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-[#222222] text-white">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="flex items-center flex-col justify-center">
                            <h3 className="font-bold text-lg">Update User Role*</h3>
                            <form className="flex items-center mt-6 gap-1 justify-center">
                                <select className="select  select-bordered w-full border-[#c59d5f] bg-[#222222] text-white max-w-md">
                                    <option disabled selected>Select Role</option>
                                    <option>Student</option>
                                    <option>Tutor</option>
                                    <option>Admin</option>
                                </select>
                                <button className="btn bg-[#c59d5f] hover:bg-[#f7ce8c]  border-none text-black font-bold">Update</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </td>
        </tr>
    );
};

export default UsersTable;