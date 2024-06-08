import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import CommonBtn from "../../../Shared/CommonBtn";
import { MdDeleteForever, MdOutlineBrowserUpdated } from "react-icons/md";

const MyAllMaterials = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const { data: materials = [], } = useQuery({
        queryKey: ['materials', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/materials/${user?.email}`)
            return data
        }
    })
    return (
        <div>
            <SectionTitle heading='My all materials' subHeading='Here are all my edited materials' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                { materials.map(material => <div key={material._id} className="card w-96 bg-[#1B1616] text-white shadow-xl">
                    <figure><img src={material?.img} alt="Shoes" className="border-[10px] rounded-xl border-[#1B1616] h-[250px]" /></figure>
                    <div className="card-body px-3">
                        <h2 className="card-title text-xl">{material?.title}</h2>
                        <p className="flex gap-2">Link: <a href={material?.link} className="text-blue-500 underline">https://drive.google.com/file</a></p>
                        <p className="flex gap-2">Email: <span>{material?.tutor_email}</span></p>
                        <div className="card-actions flex justify-between items-center pt-3">
                            <button><CommonBtn title={<MdOutlineBrowserUpdated className="text-xl" />} /></button>
                            <button><CommonBtn title={<MdDeleteForever className="text-xl" />} /></button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyAllMaterials;