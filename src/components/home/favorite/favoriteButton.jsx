import React, { useState } from 'react'
import AxiosInstance from '../../../services/axios'





const addToFavorite = async (data)=>{

    try{
    
        const res = await AxiosInstance.post('/favorite/addToFavorite', data);
        
        
        if(res.status === 200){
            return true ;
        }

    }catch(err){
        
        console.log('there is an error ', err);
        
    }
    
}
    

export default function FavoriteButton({movieId}) {

const [fav , setfav] = useState(false);


const userId = localStorage.getItem('userId');


const handleFav = async ()=>{

    if(!userId){
        alert('plase login to add this movie to favorie movies');
        return ;
    }

    const data = {userId , movieId};
    const sec = await addToFavorite(data);

    if(sec){
        setfav(true);
    }

}

  return (

    <button onClick={()=> handleFav()} className={`rounded-full w-10 h-10 ${fav ? 'bg-red-500' : 'bg-gray-200' } p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4`}>
    <svg fill={fav ? 'white' : 'gray' } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
    </svg>
  </button>

  )
}
