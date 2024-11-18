
import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
            {
                path: "/login",
                element: <Login />,
                // loader: eventLoader,
            },
            {
                path: "/register",
                element: <Register />,
                // loader: eventLoader,
            },
        ],
    },
]);

export default router