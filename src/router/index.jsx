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
import MovieDetails from "../components/home/movieDetails";
import ShowTimeDetials from "../components/home/showTimeDetials";
import Manage_rooms from "../components/admin/manage_rooms";
import Manage_movies from "../components/admin/manage_movies";
import Manage_users from "../components/admin/customers";
import Manage_showTimes from "../components/admin/showTime_mangment";
import Manage_reservation from "../components/admin/manage_reservation";
import Admins from "../components/admin/admins";
import WatchMovie from "../components/home/watchMovie";
import AddVideo from "../components/admin/movie/addVideo";

const router = createBrowserRouter([
    
    {
        element: <Layout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
          
            {
                path: "/Manage_movies",
                element: <Manage_movies/>
            },

            {
                path: "/Manage_rooms",
                element: <Manage_rooms/>
            },
            {
                path: "/Manage_users",
                element: <Manage_users/>
            },
            {
                path: "/Manage_showes",
                element: <Manage_showTimes/>
            },

            {
                path: "/manage_reservations",
                element: <Manage_reservation/>

            },

            {
                path: "/admins",
                element: <Admins/>

            },

            {
                path: "/add_video/:id",
                element: <AddVideo/>

            }
            
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

            {
                path: "/movieDetails/:id",
                element: <MovieDetails/>
            },

            {
                path: "/showTimeDetails/:id",
                element: <ShowTimeDetials/>
            },
            
            {
                path: "/watch_now/:id",
                element: <WatchMovie/>
            
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