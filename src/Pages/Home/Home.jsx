import SectionTitle from "../../Shared/SectionTitle";
import Banner from "./Banner";
import SassionCard from "./SassionCard";

const Home = () => {
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
        </div>
    );
};

export default Home;