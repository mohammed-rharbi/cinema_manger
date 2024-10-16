import React from 'react'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../../services/axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const deleteMovie = async (id) => {

  try{

      const res = await AxiosInstance.delete(`/movie/deleteMovie/${id}`);
      if(res.status === 200){

        toast.success('movie was deleted successfully')
        return true ;
      }else{

        throw new Error('failed to delete the movie');
        // console.log('somthing wrong happend');
      }
  }catch(err){
    console.log(err);
    return false;
  }

}



export default function DeleteMovie({id}) {

const [movieId , setMovieId] = useState(null);
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

    const secc = await deleteMovie(id);
    if(secc){
      Swal.fire('Deleted!', '', 'success');
      navigate('/Manage_movies')
    }
  }

}

  return (

    <button onClick={()=> handleDelete()} className='bg-red-500 text-white px-3 py-1 mt-4 rounded-xl hover:scale-110 hover:bg-red-600 hover:box-shadow-2xl'>
    <span className="material-symbols-outlined">delete</span>
    </button>
  )
}
