import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import SassionCardDetails from "../Components/SassionCardDetails";


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
                path: '/:sassion_title',
                element: <SassionCardDetails />
            },

        ]
    },
]);

export default router;