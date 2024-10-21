import React from 'react'
import AxiosInstance from '../../services/axios'
import { useState , useEffect } from 'react'





export default function RelatedMovies() {

    const [relateds , setRelateds] = useState(null);



    useEffect(()=>{

        const getRelateds = async (id)=>{

            try{
        
                const res = await AxiosInstance.get(`/movie/getRealtedMovies/${id}`);
                
                console.log(res.data.movies);
                setRelateds(res.data.movies);
        
            }catch(err){
                console.log(err)
            }
        
        }
        
        getRelateds()
    },[])




  return (




    <div>
        
    {

        relateds.map((movie)=> (


        <div key={movie._id}>
            <img
             src={movie.img}
             alt={movie.title} 
             className='w-24 h-24' />
        </div>


        ))

    }

    </div>
  )
}
