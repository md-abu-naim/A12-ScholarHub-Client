import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import Footer from "../Shared/Footers";


const Root = () => {
    return (
        <div className="font-serif bg-black">
            <div className="w-full fixed top-0 z-10">
                <Navber />
            </div>
            <div className="lg:px-10 min-h-[calc(100vh-257px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;