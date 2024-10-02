import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/layout/layout';
import Regester from "../components/auth/regester";
import Login from "../components/auth/login";

const router = createBrowserRouter([
    {
        
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <h1>home</h1>
            },
          
            {
                path: "/movies",
                element: <h1>movies</h1>
            }
        ]},
            
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/regester",
            element: <Regester />
        },     

        {
            path: "*",
            element: <h1>404</h1>
        }
            
              
        ])

export default router