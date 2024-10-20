import { createBrowserRouter } from "react-router-dom";
import AdminRouter from "./adminRouter";
import CustomerRouter from "./customerRouter";
import AuthRouter from "./guestRouter";

import Layout from "../components/layout/AdminLayout";
import CusLayout from "../components/layout/CustomerLayout";
import AuthLayout from "../components/layout/AuthLayout";





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
    }


  
        

])

export default Router