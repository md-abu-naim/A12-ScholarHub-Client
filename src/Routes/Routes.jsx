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
import UpdateSession from "../Pages/Dashboard/AdminBar/UpdateSession";
import Payment from "../Components/Payment/Payment";
import AdminRoute from "./AdminRoute";
import TutorRoute from "./TutorRoute";
import Upload from "../Pages/Dashboard/TutorBar/Upload";
import UpdateMaterials from "../Pages/Dashboard/TutorBar/UpdateMaterials";
import UpdateMaterial from "../Pages/Dashboard/AdminBar/UpdateMaterial";
import Materials from "../Pages/Dashboard/StudentBar/Materials";


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
            {
                path: '/payment/:id',
                element: <PrivateRoutes><Payment /></PrivateRoutes>
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
            {
                path:'study-materials/:id',
                element: <PrivateRoutes><Materials /></PrivateRoutes>
            },

            // Tutor Routes
            {
                path:'create-session',
                element: <TutorRoute><PrivateRoutes><CreateSession /></PrivateRoutes></TutorRoute>
            },
            {
                path:'my-all-sessions',
                element: <TutorRoute><PrivateRoutes><MyAllSession /></PrivateRoutes></TutorRoute>
            },
            {
                path:'upload-materials',
                element: <TutorRoute><PrivateRoutes><UploadMaterials /></PrivateRoutes></TutorRoute>
            },
            {
                path:'upload-materials/:id',
                element: <TutorRoute><PrivateRoutes><Upload /></PrivateRoutes></TutorRoute>
            },
            {
                path:'my-all-materials',
                element: <TutorRoute><PrivateRoutes><MyAllMaterials /></PrivateRoutes></TutorRoute>
            },
            {
                path:'update-materials/:id',
                element: <TutorRoute><PrivateRoutes><UpdateMaterials /></PrivateRoutes></TutorRoute>
            },

            // Admin Routes
            {
                path:'all-users',
                element: <AdminRoute><PrivateRoutes><AllUsers /></PrivateRoutes></AdminRoute>
            },
            {
                path:'all-study-session',
                element: <AdminRoute><PrivateRoutes><AllStudySession /></PrivateRoutes></AdminRoute>
            },
            {
                path:'update-session/:id',
                element: <AdminRoute><PrivateRoutes><UpdateSession /></PrivateRoutes></AdminRoute>
            },
            {
                path:'all-materials',
                element: <AdminRoute><PrivateRoutes><AllMaterials /></PrivateRoutes></AdminRoute>
            },
            {
                path:'materials/:id',
                element:<AdminRoute> <PrivateRoutes><UpdateMaterial /></PrivateRoutes></AdminRoute>
            },
            {
                path:'update-role/:id',
                element: <AdminRoute><PrivateRoutes><UpdateRole /></PrivateRoutes></AdminRoute>
            },
        ]
    },
]);

export default router;