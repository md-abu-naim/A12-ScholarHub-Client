import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateMaterials = () => {
    const [image_url, setImage_url] = useState('')
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {id} = useParams()

    const { data: materials = [], refetch } = useQuery({
        queryKey: ['materials', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/materials/${user?.email}`)
            return data
        }
    })
    const material = materials.find(material => material._id === id)
    const {title, session_id, tutor_email, link}= material || {}

    const handleUpdateMaterials = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const session_id = form.session_id.value
         tutor_email
        const link = form.link.value
        const image = form.image.files[0]
        const img = image_url
    
        const formData = new FormData()
        formData.append('image', image)
        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`, formData)
        .then(res => {
            // console.log(res.data);
            setImage_url(res.data.data.display_url)
        })

        const materialsData = {title, img,  session_id, tutor_email, link, }

        axiosSecure.put(`/materials/${id}`, materialsData)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0) {
                refetch()
                toast.success('Materilas updated succesfully')
            }
        })
    }


    return (
        <div>
            <SectionTitle heading='Update materials' subHeading='This page is for uploading material' />
            <form onSubmit={handleUpdateMaterials} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={title} placeholder="Title" className="input input-bordered bg-[#1B1616] text-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Session ID </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="session_id"  value={session_id} placeholder="Registration Fee" className="input input-bordered font-sans bg-[#1B1616] text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Tutor Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" value={tutor_email} name="tutor_email" placeholder="Tutor Email" className="input bg-[#1B1616] text-white input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Link*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="link" defaultValue={link} placeholder="Your Material Link" className="input bg-[#1B1616] input-bordered text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-white">Select Image</span>
                        </label>
                        <label className="input-group">
                            <input type="file" name="image"  className=" bg-[#1B1616] text-white w-full rounded-lg" />
                        </label>
                    </div>
                </div>

                <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative">Upload</span>
                </button>
            </form>
        </div>
    );
};

export default UpdateMaterials;