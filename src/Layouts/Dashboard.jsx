import { Outlet } from "react-router-dom";
import Sideber from "../Pages/Dashboard/SideBar/Sideber";

const Dashboard = () => {


    return (
        <div className="bg-black">
            <div className='relative min-h-screen md:flex'>
                {/* Sidebar */}
                <Sideber />

                {/* Outlet --> Dynamic content */}
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