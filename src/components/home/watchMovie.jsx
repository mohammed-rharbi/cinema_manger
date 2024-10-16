import React from 'react'
import { Link , useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../services/axios'
import Loading from '../UI/loading'
import ReactPlayer from 'react-player'

export default function WatchMovie() {



    const [loading , setLoading] = useState(true); 
    const { id } = useParams();
    const [movie , setMovie] = useState(null);



    useEffect(()=>{

        const getMovie = async () => {

            try {
            const response = await AxiosInstance.get(`/movie/getMovie/${id}`);
            setMovie(response.data.movie);

        }catch(err){

              console.log(err);
              
              }finally{

                setLoading(false)        
              }
};
        
        getMovie();
    }, [])

    if(loading){

      return <Loading />
    }

    if(!movie){

      return <p>movie Not found</p>

    }
   
  return (
    

<section class="text-gray-700 body-font overflow-hidden bg-gray-900">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">


     

     <div className='w-full text-center mb-6'>
      <h1 class="sm:text-4xl text-red-500  font-manrope mb-4">{movie.title}</h1>
     </div>

    <div className='w-full flex justify-center'>


      <ReactPlayer
      
      url={movie.video}
      controls={true}
       width={800}
       height={400}
      />
            {/* <video width="800"  class="w-200 h-200 object-cover object-center h-96  rounded border border-gray-200" controls>
            <source src={movie.video} type="video/mp4" />
            Your browser does not support the video tag.
            </video> */}
    </div>
    
    </div>
  </div>
</section>

)}
