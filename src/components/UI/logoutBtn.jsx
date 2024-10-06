import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function LogoutBtn() {

    const navigate = useNavigate();

    const Logout = () => {
        
        localStorage.removeItem('token')

        toast.success('Logout successfully')
        navigate('/login')
    }
   

  return (


    <button
    type="button"
    onClick={Logout}
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >Logout</button>
  )
}
