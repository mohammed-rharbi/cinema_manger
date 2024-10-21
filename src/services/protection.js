import { toast } from 'react-toastify';


const Protection = ({children , allowedRole}) => {

    const role = localStorage.getItem('userRole');

    if(!allowedRole.includes(role)){

        toast.error('you are not authorized');
        return  window.location.href = '/login';
        
    }

    return children;
}

export default Protection