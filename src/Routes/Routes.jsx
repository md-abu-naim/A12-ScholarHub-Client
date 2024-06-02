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
import CreateNote from "../Pages/Dashboard/StudentBar/CreateNote";
import ErrorPage from "../Shared/ErrorPage";
import ViewBookedSessionDetails from "../Pages/Dashboard/StudentBar/ViewBookedSessionDetails";
import PrivateRoutes from "./PrivateRoutes";
import ManagePersonalNotes from "../Pages/Dashboard/StudentBar/ManagePersonalNotes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        errorElement: <ErrorPage />,
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
                element: <PrivateRoutes><SassionCardDetails /></PrivateRoutes>
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
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
            {
                path:'view-booked-session',
                element: <PrivateRoutes><ViewBookedSession /></PrivateRoutes>
            },
            {
                path:'booked-session/:session_title',
                element: <PrivateRoutes><ViewBookedSessionDetails /></PrivateRoutes>
            },
            {
                path:'create-note',
                element: <PrivateRoutes><CreateNote /></PrivateRoutes>
            },
            {
                path:'personal-notes',
                element: <PrivateRoutes><ManagePersonalNotes /></PrivateRoutes>
            },
        ]
    },
]);

export default router;