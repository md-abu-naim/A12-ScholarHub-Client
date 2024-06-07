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
import UpdatePersonalNote from "../Pages/Dashboard/StudentBar/UpdatePersonalNote";
import AllStudyMaterials from "../Pages/Dashboard/StudentBar/AllStudyMaterials";
import AllUsers from "../Pages/Dashboard/AdminBar/AllUsers";
import AllStudySession from "../Pages/Dashboard/AdminBar/AllStudySession";
import AllMaterials from "../Pages/Dashboard/AdminBar/AllMaterials";
import UpdateRole from "../Pages/Dashboard/AdminBar/UpdateRole";
import CreateSession from "../Pages/Dashboard/TutorBar/CreateSession";
import MyAllSession from "../Pages/Dashboard/TutorBar/MyAllSession";
import UploadMaterials from "../Pages/Dashboard/TutorBar/UploadMaterials";
import MyAllMaterials from "../Pages/Dashboard/TutorBar/MyAllMaterials";
import Profile from "../Pages/Dashboard/Profile/Profile";


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
                path: '/:id',
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
                path: 'profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            
            // Student Routes
            {
                path:'view-booked-session',
                element: <PrivateRoutes><ViewBookedSession /></PrivateRoutes>
            },
            {
                path:'booked-session/:id',
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
            {
                path:'manage-note/:id',
                element: <PrivateRoutes><UpdatePersonalNote /></PrivateRoutes>
            },
            {
                path:'all-study-materials',
                element: <PrivateRoutes><AllStudyMaterials /></PrivateRoutes>
            },

            // Tutor Routes
            {
                path:'create-session',
                element: <PrivateRoutes><CreateSession /></PrivateRoutes>
            },
            {
                path:'my-all-sessions',
                element: <PrivateRoutes><MyAllSession /></PrivateRoutes>
            },
            {
                path:'upload-materials',
                element: <PrivateRoutes><UploadMaterials /></PrivateRoutes>
            },
            {
                path:'my-all-materials',
                element: <PrivateRoutes><MyAllMaterials /></PrivateRoutes>
            },

            // Admin Routes
            {
                path:'all-users',
                element: <PrivateRoutes><AllUsers /></PrivateRoutes>
            },
            {
                path:'all-study-session',
                element: <PrivateRoutes><AllStudySession /></PrivateRoutes>
            },
            {
                path:'all-materials',
                element: <PrivateRoutes><AllMaterials /></PrivateRoutes>
            },
            {
                path:'update-role/:id',
                element: <PrivateRoutes><UpdateRole /></PrivateRoutes>
            },
        ]
    },
]);

export default router;