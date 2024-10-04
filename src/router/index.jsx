import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/layout/AdminLayout';
import Regester from "../components/auth/regester";
import Login from "../components/auth/login";
import Forgot from "../components/auth/forgot";
import Home from "../components/home/home";
import CusLayout from "../components/layout/CustomerLayout";
import Dashboard from "../components/admin/dashboard";

const router = createBrowserRouter([
    
    {
        element: <Layout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
          
            {
                path: "/movies",
                element: <h1>movies</h1>
            },
            
        ]},
        

        {
            element: <CusLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
          
            {
                path: "/movies",
                element: <h1>movies</h1>
            },

            {
                path: "/movies",
                element: <h1>movies</h1>
            },
            
        ]},



        {
            path: "/register",
            element: <Regester />
        },
            
        {
            path: "/login",
            element: <Login/>
        },


        {
            path: "/forgot",
            element: <Forgot/>
        },
         

        {
            path: "*",
            element: <h1>404</h1>
        }
            
              
        ])

export default router