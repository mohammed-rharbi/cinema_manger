import React from 'react'
import Button from '../UI/button'
import Slider from '../UI/slider'
import { Link , useParams } from 'react-router-dom'
import axios from 'axios'
import { useState , useEffect } from 'react'

export default function MovieDetails() {



      
    const { id } = useParams();
    const [movie , setMovie] = useState(null);
    const [ShowTimes , setShowTimes] = useState([]);



    useEffect(()=>{

        const getMovie = async () => {

            try {
            const response = await axios.get(`http://localhost:5000/api/movie/getMovie/${id}`);
            setMovie(response.data.movie);
            setShowTimes(response.data.showtimes);        
            }catch(err){

        console.log(err);
    }
};
        
        getMovie();
    }, [])


    if(!movie){

        return <p>No movie found</p>
    }

  return (
    

<section class="text-gray-700 body-font overflow-hidden bg-gray-900">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2  w-full object-cover object-center h-96  rounded border border-gray-200" src={movie.image}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 class="text-red-500 text-4xl  title-font font-semibold mb-1">{movie.title}</h1>
        <div class="flex mb-4">
          <span className='text-gray-300 mt-4'>Release Date : { new Date(movie.relseDate).toDateString()}</span>
        </div>
        <div class="flex mb-4">
          <span className='text-gray-300 mt-2'>Deroctor : {movie.deroctor}</span>
        </div>
        <div class="flex mb-4">
          <span className='text-gray-300 mt-2'>Duration : {movie.duration} Min</span>
        </div>
        <p class="leading-relaxed"></p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

            <p className='text-gray-300'>{movie.description}</p>

        </div>
        <div class="flex">
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto">
      <h3 className="text-3xl font-bold text-white text-center mb-8">Available ShowTimes For : <span className="text-red-500">{movie.title}</span>
      </h3>
      
        {ShowTimes.length === 0 ? (
          <p className="text-white text-center col-span-full">No ShowTimes found</p>
        ) : (

          ShowTimes.map((ShowTime) => (

                <div class="flex justify-center items-center flex-row space-y-12 py-12 w-full h-auto mb-24  mx-auto">
                <div key={ShowTime._id}  class="py-3 sm:max-w-xl sm:mx-auto">
                    <div class="bg-gray-800 shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                      <div class="h-48 overflow-visible w-1/2">
                          <img class="rounded-3xl shadow-lg" src={movie.image}/>
                      </div>
                      <div class="flex flex-col w-1/2 space-y-4">
                        <div class="flex justify-between items-start">
                          <h2 class="text-3xl font-bold text-white">{movie.title}</h2>
                          <div class="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
                        </div>
                        <div>
                          <div class="text-sm text-gray-400">{ new Date(ShowTime.time).toDateString()}</div>
                          <div class="text-lg text-gray-400">{ShowTime.room.name}</div>
                        </div>
                        <div class="flex text-2xl font-bold text-gray-300">${ShowTime.price}</div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-8 w-full ">
                    <Link to={`/showTimeDetails/${ShowTime._id}`}>
                    <button className="bg-red-500 mr-4 hover:bg-red-600 text-white font-bold py-2 px-24 rounded" label={'Book Now'}>Book Now</button>
                    </Link>
                    
                    </div>

                  </div>
                </div>
          ))
        )}


    </div>
</section>

)}
