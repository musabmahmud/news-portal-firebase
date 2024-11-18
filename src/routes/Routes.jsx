
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // loader: rootLoader,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader: eventLoader,
            },
        ],
    },
]);

export default router