import { createBrowserRouter , Navigate } from "react-router-dom";
import Layout from '../components/layout/AdminLayout';
import Regester from "../components/auth/regester";
import Login from "../components/auth/login";
import Forgot from "../components/auth/forgot";
import Landing from "../components/home/landing";
import CusLayout from "../components/layout/CustomerLayout";
import Dashboard from "../components/admin/dashboard";
import Home from "../components/home/home";
import ShowTimes from "../components/home/showTimes";
import Protection from "../services/protection";
import Movie from "../components/home/movies";
import ResetPassword from "../components/auth/resetPassword";
import AllMovies from "../components/home/movies";
import Rooms from "../components/home/rooms";
import NotFound from "../components/UI/404";
import About from "../components/home/about";

const router = createBrowserRouter([
    
    {
        element: <Protection allowedRole={['admin']} element={<Layout />} />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
          
            {
                path: "/movies",
                element: <Movie/>
            },
            
        ]},
        

        {
            element: <CusLayout />,
        children: [
            {
                path: "/",
                element: <Landing/>
            },
          
            {
                path: "/Allmovies",
                element: <AllMovies/>
            },

            {
                path: "/home",  
                element: <Home/>
            },

            {
                path: "/showTimes",
                element: <ShowTimes/>
            },

            {
                path: "/rooms",
                element: <Rooms/>
            },

            {
                path: "/about",
                element: <About/>
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
            path: "/reset-password/:token",
            element: <ResetPassword/>
        },
         

        {
            path: "*",
            element: <NotFound/>
        }
            
              
        ])

export default router