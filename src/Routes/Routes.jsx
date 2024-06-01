import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import SassionCardDetails from "../Components/SassionCardDetails";
import AllTutors from "../Pages/Home/AllTutors";


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
]);

export default router;