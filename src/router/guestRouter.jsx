import Regester from "../components/auth/regester";
import Login from "../components/auth/login";
import Forgot from "../components/auth/forgot";
import ResetPassword from "../components/auth/resetPassword";
import NotFound from "../components/UI/404";    




const AuthRouter = [


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

]

export default AuthRouter;