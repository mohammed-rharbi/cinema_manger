import { Navigate  } from "react-router-dom";
import useAuth from "../hooks/checkAuth";


const GurdRoute = ({children}) =>{

    const isAuth = useAuth();

    return isAuth ? children : window.location.href = '/login'
}

export default GurdRoute;