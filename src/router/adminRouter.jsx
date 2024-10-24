import React from 'react'
import Dashboard from "../components/admin/dashboard";
import Manage_rooms from "../components/admin/rooms/manage_rooms";
import Manage_movies from "../components/admin/movie/manage_movies";
import Manage_users from "../components/admin/customers";
import Manage_showTimes from "../components/admin/showTimes/showTime_mangment";
import Manage_reservation from "../components/admin/manage_reservation";
import Admins from "../components/admin/admins";
import AddVideo from "../components/admin/movie/addVideo";


const AdminRouter = [

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


]

export default AdminRouter;