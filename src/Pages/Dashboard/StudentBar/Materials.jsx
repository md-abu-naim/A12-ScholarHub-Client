import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaDownload } from "react-icons/fa";

const Materials = () => {
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const { user } = useAuth()

    const { data: sessions = [] } = useQuery({
        queryKey: ['allSessions', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/booked-session/${user?.email}`)
            return data
        }
    })
    const session = sessions?.find(session => session._id == id)

    const { data: allmaterials = [], } = useQuery({
        queryKey: ['materials'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/materials`)
            return data
        }
    })
    const materials = allmaterials.filter(material => material.session_id === session?.session_id)

    const handleDownload = async (url, forceDownload) => {
        if (!forceDownload) {
            const link = document.createElement('a');
            link.href = url;
            link.download = 'downloaded_image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        const imageBlob = await fetch(url)
            .then(res => res.arrayBuffer())
            .then(buffer => new Blob([buffer], { type: "image/png" }))

        const link = document.createElement('a');
        link.href = imageBlob;
        link.download = 'downloaded_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>
            <SectionTitle heading='specific Materials' subHeading='This is specific materials' />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {materials.map(material => <div key={material._id} className="card w-96 bg-[#1B1616] text-white shadow-xl">
                    <figure><img src={material?.img} alt="Shoes" className="border-[10px] rounded-xl border-[#1B1616] h-[250px]" /></figure>
                    <div className="card-body px-3">
                        <h2 className="card-title text-xl">{material?.title}</h2>
                        <p className="flex gap-2">Link: <a href={material?.link} target="_blank" className="text-blue-500 underline">https://drive.google.com/file</a></p>
                        <p className="flex gap-2">Email: <span>{material?.tutor_email}</span></p>
                    </div>
                    <div className="card-actions  pb-4 px-4">
                        <button onClick={() => handleDownload(material?.img, material?.title)} className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative flex gap-2"><FaDownload />Download</span>
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Materials;