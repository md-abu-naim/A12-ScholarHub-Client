import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import CommonBtn from "../../../Shared/CommonBtn";
import { MdDeleteForever, MdOutlineBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAllMaterials = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const { data: materials = [],refetch } = useQuery({
        queryKey: ['materials', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/materials/${user?.email}`)
            return data
        }
    })

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            background: "black",
            color: "white"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                axiosSecure.delete(`/delete-materials/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Materilas has been deleted.",
                                icon: "success",
                                background: "black",
                                color: 'white'
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle heading='My all materials' subHeading='Here are all my edited materials' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                { materials.map(material => <div key={material._id} className="card md:w-96 bg-[#1B1616] text-white shadow-xl">
                    <figure><img src={material?.img} alt="Shoes" className="border-[10px] rounded-xl border-[#1B1616] h-[250px]" /></figure>
                    <div className="card-body px-3">
                        <h2 className="card-title text-xl">{material?.title}</h2>
                        <p className="flex gap-2">Link: <a href={material?.link} target="_blank" className="text-blue-500 underline">{material.link.slice(0,30)}</a></p>
                        <p className="flex gap-2">Email: <span>{material?.tutor_email}</span></p>
                        <div className="card-actions flex justify-between items-center pt-3">
                            <Link to={`/dashboard/update-materials/${material._id}`}><CommonBtn title={<MdOutlineBrowserUpdated className="text-xl" />} /></Link>
                            <button onClick={() => handleDelete(material._id)}><CommonBtn title={<MdDeleteForever className="text-xl" />} /></button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyAllMaterials;