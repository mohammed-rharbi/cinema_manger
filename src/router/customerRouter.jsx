import React from 'react'
import Landing from "../components/home/landing";
import Home from "../components/home/home";
import ShowTimes from "../components/home/showTimes";
import AllMovies from "../components/home/movies";
import Rooms from "../components/home/rooms";
import About from "../components/home/about";
import MovieDetails from "../components/home/movieDetails";
import ShowTimeDetials from "../components/home/showTimeDetials";
import WatchMovie from "../components/home/watchMovie";
import Profile from "../components/home/user/profile";




const CustomerRouter = [


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

    {
        path: "/user_profile",
        element: <Profile/>
    }


]

export default CustomerRouter;
