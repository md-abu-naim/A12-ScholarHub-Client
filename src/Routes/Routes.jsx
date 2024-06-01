import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import SassionCardDetails from "../Components/SassionCardDetails";
import AllTutors from "../Pages/Home/AllTutors";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Dashboard from "../Layouts/Dashboard";
import ViewBookedSession from "../Pages/Dashboard/StudentBar/ViewBookedSession";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/allTutors',
                element: <AllTutors />
            },
            {
                path: '/:sassion_title',
                element: <SassionCardDetails />
            },

        ]
    },
    {
        path: '/signIn',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path:'view-booked-session',
                element: <ViewBookedSession />
            }
        ]
    },
]);

export default router;