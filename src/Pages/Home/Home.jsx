import { Link } from "react-router-dom";
import CommonBtn from "../../Shared/CommonBtn";
import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./Banner";
import SassionCard from "./SassionCard";
import Tutors from "./Tutors";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [CountTutors, setCountTutors] = useState([])

    useEffect(() => {
        axios('/Tutors.json')
            .then(res => {
                setCountTutors(res.data)
            })
    })
    return (
        <div>
            <div className="mt-10">
                <Banner />
            </div>
            <div className="my-14">
                <SectionTitle heading='Study session section' subHeading='This is our Study Sassion' ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
                    <SassionCard />
                </div>
            </div>
            <div className="my-14">
                <SectionTitle heading='Tutor Section' subHeading='Our Tutor team' ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                    <Tutors />
                </div>
                <div className="flex justify-center items-center">
                   {CountTutors.length > 8 &&  <Link to='/allTutors'><CommonBtn title='See All Tutors' /></Link>}
                </div>
            </div>
        </div>
    );
};

export default Home;