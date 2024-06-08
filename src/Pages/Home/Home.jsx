import { Link } from "react-router-dom";
import CommonBtn from "../../Shared/CommonBtn";
import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./Banner";
import SassionCard from "./SassionCard";
import Tutors from "./Tutors";
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../../Hooks/useAxiosCommon';

const Home = () => {
    const axiosCommon = useAxiosCommon()

    const {data: tutors = [], isLoading} = useQuery({
        queryKey: ['tutors'],
        queryFn: async() => {
            const {data} = await axiosCommon.get('/tutors')
            const tutorsData = data.filter(tutor => tutor.role === 'Tutor')
            return tutorsData
        }
    })

    return (
        <div>
            <div className="mt-10">
                <Banner />
            </div>
            <div id="sessions"  className="my-14">
                <SectionTitle heading='Study session section' subHeading='This is our Study Sassion' ></SectionTitle>
                <SassionCard />
            </div>
            <div className="my-14">
                <SectionTitle heading='Tutor Section' subHeading='Our Tutor team' ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                    {isLoading ? 'loading' : tutors.slice(0,8).map(tutor => <Tutors key={tutor._id} tutor={tutor}/>)}
                </div>
                <div className="flex justify-center items-center">
                   {tutors.length > 8 &&  <Link to='/allTutors'><CommonBtn title='See All Tutors' /></Link>}
                </div>
            </div>
        </div>
    );
};

export default Home;