import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";

const SeeMaterilas = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { id } = useParams()

    const { data: materials = [], } = useQuery({
        queryKey: ['materials', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/materials/${user?.email}`)
            return data
        }
    })
    const material = materials.find(material => material.session_id === id)

    return (
        <div>
            <SectionTitle heading='See specific Materilas' subHeading='All session specific materials can be viewed' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {material && <div className="card  bg-[#1B1616] text-white shadow-xl">
                    <figure><img src={material?.img} alt="Shoes" /></figure>
                    <div className="card-body px-3">
                        <h2 className="card-title">{material?.title}</h2>
                        <p className="flex gap-2">Link: <a href={material?.link} className="text-blue-500 underline">https://drive.google.com/file</a></p>
                        <p className="flex gap-2">Email: <span>{material?.tutor_email}</span></p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default SeeMaterilas;