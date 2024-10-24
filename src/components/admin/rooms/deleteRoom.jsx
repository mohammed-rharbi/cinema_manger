import React from 'react'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../../services/axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const deleteRoom = async (id) => {

    try{
  
        const res = await AxiosInstance.delete(`/room/deleteRoom/${id}`);
        if(res.status === 200){
  
          toast.success('Room was deleted successfully')
          return true ;
        }else{
  
          throw new Error('failed to delete this Room');

        }
    }catch(err){
      console.log(err);
      return false;
    }
  
  }
  

export default function DeleteRoom({id}) {


const navigate = useNavigate()


const handleDelete = async ()=>{

    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });
  
    if(result.isConfirmed){
  
      const secc = await deleteRoom(id);
      if(secc){
        Swal.fire('Deleted!', '', 'success');
        navigate('/Manage_rooms')
      }
    }
  
  }
  


  return (

    <button onClick={()=> handleDelete()} className='bg-red-500 text-white px-3 py-1 mt-4 rounded-xl hover:scale-110 hover:bg-red-600 hover:box-shadow-2xl'>
    <span className="material-symbols-outlined">delete</span>
    </button>
  )
}
