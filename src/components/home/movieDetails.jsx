import React from 'react'
import Button from '../UI/button'
import Slider from '../UI/slider'
import { Link , useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../services/axios'
import Loading from '../UI/loading'
import FavoriteButton from '../home/favorite/favoriteButton'
import Rating from '../admin/movie/rating'
import Rate from '../admin/movie/rate'
import Comments from './user/comments'
import AddComment from './user/addComment'
import RelatedMovies from './relatedMovies'


export default function MovieDetails() {

    const [loading , setLoading] = useState(true); 
    const { id } = useParams();
    const [movie , setMovie] = useState(null);
    const [ShowTimes , setShowTimes] = useState([]);



    useEffect(()=>{

        const getMovie = async () => {

            try {
            const response = await AxiosInstance.get(`/movie/getMovie/${id}`);
            setMovie(response.data.movie);
            setShowTimes(response.data.showtimes);
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
    

<section className="text-gray-700 body-font overflow-hidden bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">

<RelatedMovies movieId={movie._id}/>

      <div>

      <img alt="ecommerce" className=" w-84 h-105 ml-32  object-center h-96  rounded border border-gray-200" src={movie.image}/>

      </div>
 

      <div className="lg:w-1/2 ml-2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-red-500 text-4xl  title-font font-semibold mb-1">{movie.title}</h1>
        <div className="flex mb-4">
          <span className='text-gray-300 mt-4'>Release Date : { new Date(movie.relseDate).toDateString()}</span>
        </div>
        <div className="flex mb-4">
          <span className='text-gray-300 mt-2'>Deroctor : {movie.deroctor}</span>
        </div>
        <div className="flex mb-4">
          <span className='text-gray-300 mt-2'>Duration : {movie.duration} Min</span>
        </div>

        <div className="flex mb-4">
          <span className='text-gray-300 mt-2'>Gen : {movie.gen} Min</span>
        </div>

        <p className="leading-relaxed"></p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

            <p className='text-gray-300'>{movie.description}</p>

        </div>

        
        {/* <Rate movieId={movie._id}/> */}

        <div className="flex justify-center gap-32">

    
          <FavoriteButton movieId={movie._id}/>

          <Rating movieId={movie._id}/>


          <Link className='flex justify-end' to={`/watch_now/${movie._id}`}>
            <button className="flex  ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Watch Now
            </button>
          </Link>
        
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

                <div className="flex justify-center items-center flex-row space-y-12 py-12 w-full h-auto mb-24  mx-auto">
                <div key={ShowTime._id}  className="py-3 sm:max-w-xl sm:mx-auto">
                    <div className="bg-gray-800 shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                      <div className="h-48 overflow-visible w-1/2">
                          <img className="rounded-3xl shadow-lg" src={movie.image}/>
                      </div>
                      <div className="flex flex-col w-1/2 space-y-4">
                        <div className="flex justify-between items-start">
                          <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
                          <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{ new Date(ShowTime.time).toDateString()}</div>
                          <div className="text-lg text-gray-400">{ShowTime.room.name}</div>
                        </div>
                        <div className="flex text-2xl font-bold text-gray-300">${ShowTime.price}</div>
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

<div className=''>
<AddComment movieId={movie._id}/>
<Comments movieId={movie._id}/>
</div>

</section>

)}
