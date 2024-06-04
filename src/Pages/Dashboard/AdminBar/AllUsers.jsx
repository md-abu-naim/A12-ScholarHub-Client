import { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import UsersTable from "./UsersTable";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { PropagateLoader} from 'react-spinners'

const AllUsers = () => {
    const [search, setSearch] = useState('')
    const axiosSecure = useAxiosSecure()


    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch(text)
        refetch()
        e.target.reset()
    }

    const { data: allUsers = [], refetch, isLoading  } = useQuery({
        queryKey: ['allUsers', search],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-users?search=${search}`)
            return data
        }
    })
    return (
        <div>
            <SectionTitle heading='view all users' subHeading='This is our all users page' />
            <form onSubmit={handleSearch}>
                <label className="input bg-[#222222] input-bordered flex items-center max-w-sm mx-auto  gap-2">
                    <input type="text" name="search" className="grow text-white" placeholder="Search" />
                    <button className="btn bg-[#c59d5f] hover:bg-[#f7ce8c]  border-none text-black font-bold">Search</button>
                </label>
            </form>
            <div className='container lg:mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal border border-[#c59d5f]'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#222222]  border-b border-[#c59d5f] text-white  text-left text-sm uppercase font-normal'
                                        >
                                            User Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#222222]  border-b border-[#c59d5f] text-white  text-left text-sm uppercase font-normal'
                                        >
                                            User Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#222222]  border-b border-[#c59d5f] text-white  text-left text-sm uppercase font-normal'
                                        >
                                            User Role
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-[#222222]  border-b border-[#c59d5f] text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Update Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                      isLoading ? <PropagateLoader color="#36d7b7" />  :  allUsers?.map(user => <UsersTable key={user._id} refetch={refetch} user={user} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;