import React from 'react'
import AxiosInstance from '../../services/axios'
import { useState , useEffect } from 'react'
import Loading from '../UI/loading';

export default function Mange_movies() {


    const [movies , setMovies] = useState(null);
    const [loading , setLoading] = useState(true);



    useEffect(()=>{


        const getMovies = async ()=>{


            try{

                const res = await AxiosInstance.get('movie/allMovies');
                
                setMovies(res.data.movies);

                // console.log(res.data.admins)
            }catch(err){

                console.log(err)

            }finally{
                setLoading(false)
            }
        }

        getMovies();

    } , []);


    if(!movies || movies.length === 0){

        return <Loading/>
    }

    if(loading){

        return <Loading/>
    }


  return (



<>
    

    <div className=' h-full w-full bg-gray-900'>


    <div className='flex justify-center gap-8 mt-8 '>

        <div className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center'>{movies.length}</div>
        <div className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center'></div>
        <div className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center'></div>
        
    </div>

    <div className='flex justify-center text-white p-8 text-4xl'>
        <h1 className='font-bold'>movies</h1> 
    </div>
        

    <div className=' flex justify-content-center flex-wrap gap-8  '>
        
        { Array.isArray(movies) && movies.map((movie) => (

        <div key={movie._id} className='p-7 bg-gray-700 text-white rounded-xl w-60 h-80 border border-red-500 box-shadow-2xl hover:scale-105'>

            <div>
                <img src={movie.image}
                className='w-20 h-20 mx-auto hover:scale-110 border-2 rounded-full border-gray-900 '
                alt={movie.title} />

                <div className='text-center'>
                    <h1 className=' font-semibold text-lg mt-4'>{movie.title}</h1>
                    {/* <p className='text-sm mt-2'>{customers.email}</p>
                    <p className='text-sm mt-2'>{customers.role}</p>
                    <p className='text-sm mt-2'>joind on <span className='font-bold text-red-400'>{new Date(customers.createdAt).toDateString()}</span></p> */}
                </div>

                <div className='text-center mt-4 '>
                    <button className='bg-red-500 text-white px-5 py-1.5 mr-6 mt-4 rounded-xl'>delete</button>
                    <button className='bg-blue-500 text-white px-5 py-1.5 mt-4 rounded-xl'>edit</button>
                </div>

            </div>
      
        </div>
    
    ))}
    </div>

    </div>

</>


  )
}
