import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const UpdateRole = () => {
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: updateUser = [], refetch } = useQuery({
        queryKey: ['updateUser',],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/${id}`)
            return data
        }
    })

    console.log(updateUser.role);

    const handleUpdateRole = (e) => {
        e.preventDefault()
        const roleText = e.target.role.value
        const name = e.target.name.value;

        if(updateUser.role === roleText){
            return toast.success(`${name} Already is there as a ${updateUser.role}`)
        }

        const updateInfo = {
            role: roleText
        }
        axiosSecure.put(`/user/${id}`, updateInfo)
            .then(res => {
                if(res.data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Congrats ${name} has become an ${roleText}!🤩`)
                    navigate('/dashboard/all-users')
                }
            })
    }
    return (
        <div>
            <SectionTitle heading='update user role' subHeading='You can update if you want ' />
            <form onSubmit={handleUpdateRole} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Name*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={updateUser.name} name="name" placeholder="User Name" className=" text-white input input-bordered bg-[#222222] w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Email*</span>
                        </label>
                        <label className="input-group">
                            <input type="email" value={updateUser.email} name="email" placeholder="User email" className="input text-white  input-bordered font-sans bg-[#222222] w-full" />
                        </label>
                    </div>
                </div>
                <div className="my-4">
                    <select name="role" className="select bg-[#222222] text-white select-bordered w-full">
                        <option disabled selected>Select your Role</option>
                        <option>Admin</option>
                        <option>Tutor</option>
                        <option>Student</option>
                    </select>
                </div>

                <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                    {/* <!-- Top glass gradient --> */}
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    {/* <!-- Bottom gradient --> */}
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    {/* <!-- Left gradient --> */}
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    {/* <!-- Right gradient --> */}
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative">Update Role</span>
                </button>
            </form>
        </div >
    );
};

export default UpdateRole;