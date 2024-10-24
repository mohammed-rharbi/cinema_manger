import { createBrowserRouter, Outlet } from "react-router-dom";
import AdminRouter from "./adminRouter";
import CustomerRouter from "./customerRouter";
import AuthRouter from "./guestRouter";

import Layout from "../components/layout/AdminLayout";
import CusLayout from "../components/layout/CustomerLayout";
import AuthLayout from "../components/layout/AuthLayout";
import GuardRoute from "../services/guard";
import PopUp from "../components/UI/PopUp";





const Router = createBrowserRouter([


    {
        element: <Layout/>,
        children: AdminRouter
    },

    {
        element: <CusLayout/>,
        children: CustomerRouter
    },

    {
        element: <AuthLayout/>,
        children: AuthRouter
    },
    {
        element: <Outlet />,
        children : [{
            path: "/test",
            element: <PopUp/>
        }]
    }


])

export default Router