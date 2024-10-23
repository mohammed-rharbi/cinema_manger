import React from 'react'
import AxiosInstance from '../../services/axios'
import { useState , useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom';





export default function RelatedMovies({movieId}) {

    const [relateds , setRelateds] = useState([]);

    const navigate = useNavigate()


    useEffect(()=>{

        const getRelateds = async ()=>{

            try{
        
                const res = await AxiosInstance.get(`/movie/getRealtedMovies/${movieId}`);
                
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

            <Link to={`/movieDetails/${movie._id}`}>
            <div onClick={()=> navigate(`/movieDetails/${movie._id}`)} key={movie._id} className='mt-4 rounded'>
                        <img
                        src={movie.image}
                        alt={movie.title} 
                        className='w-32 h-52 rounded-2xl hover:scale-105' />
            </div>
            </Link>
        


        ))

    }

    </div>
  )
}
