import React from 'react'
import AxiosInstance from '../../services/axios'
import { useState , useEffect } from 'react'





export default function RelatedMovies({movieId}) {

    const [relateds , setRelateds] = useState([]);



    useEffect(()=>{

        console.log(movieId)
        const getRelateds = async ()=>{

            try{
        
                const res = await AxiosInstance.get(`/movie/getRealtedMovies/${movieId}`);
                
                console.log(res.data.realted)

                setRelateds(res.data.realted);
        
            }catch(err){
                console.log(err)
            }
        
        }
        
        getRelateds()
    },[movieId])



    if(!relateds){
        return <p>no relateds for this moveie</p>
    }

  return (




    <div className=''>
        
    {
        relateds.map((movie)=> (

        <div className='mt-4'>
            <div key={movie._id}>
                        <img
                        src={movie.image}
                        alt={movie.title} 
                        className='w-32 h-52' />
            </div>
        </div>
      


        ))

    }

    </div>
  )
}
