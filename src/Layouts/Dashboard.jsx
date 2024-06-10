import { Outlet } from "react-router-dom";
import Sideber from "../Pages/Dashboard/SideBar/Sideber";

const Dashboard = () => {

    return (
        <div className="bg-black font-serif">
            <div className='relative min-h-screen lg:flex'>
                <Sideber />

                <div className='flex-1 md:ml-64'>
                    <div className='p-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;