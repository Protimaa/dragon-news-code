import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "/category/:id",
                element: <h2>This is Category</h2>,
            }
        ]
    },
    {
        path:"/news",
        element:<h1>News Layout</h1>,
    },
    {
        path: "auth",
        element: <h1>Login</h1>,
    },
    {
        path:"*",
        element: <h1>Error</h1>,
    },

]);

export default router;