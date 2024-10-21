import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/checkAuth';  

const GuardRoute = ({ children }) => {
  const isAuth = useAuth(); 
  const navigate = useNavigate(); 



  if (!isAuth) {
    navigate('/login')
  }


  return children;
};

export default GuardRoute;
