import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout children={undefined}/>
    },
    {
        path: "/home",
        element: <Home/>
    }
])

export default router;