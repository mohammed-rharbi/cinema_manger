import React from 'react'
import AxiosInstance from '../../services/axios'
import { useState , useEffect } from 'react'
import Loading from '../UI/loading';
import { Link } from 'react-router-dom';
import CreateMovie from './movie/createMovie'
import DeleteMovie from './movie/deleteMovie';


export default function Mange_movies() {


    const [movies , setMovies] = useState(null);
    const [loading , setLoading] = useState(true);
    const [hide , setHide] = useState(false);



    useEffect(()=>{


        const getMovies = async ()=>{


            try{

                const res = await AxiosInstance.get('movie/allMovies');
                
                setMovies(res.data.movies);

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

<CreateMovie toggle={hide} hideIt={() => setHide(false)}/>




    
    <div className=' h-full w-full bg-gray-900'>
    <div className='flex justify-center gap-8 mt-8 '>

<div onClick={()=> setHide(true)} id='navv' className='flex justify-center justify-items-center bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center hover:scale-105 text-white hover:bg-blue-800 hover:box-shadow-2xl'>
<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.27 200q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
</div>

<div  id='navv'className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center hover:scale-105 text-white hover:bg-blue-800 hover:box-shadow-2xl'></div>

<div id='navv' className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center hover:scale-105 text-white hover:bg-blue-800 hover:box-shadow-2xl'>     
</div>
       
                
    </div>

    <div className='flex justify-center text-white p-8 text-4xl'>
        <h1 className='font-bold'>movies</h1> 
    </div>
        

    <div className=' flex justify-content-center flex-wrap gap-8  '>
        
        { Array.isArray(movies) && movies.map((movie) => (

        <div key={movie._id} className='p-7 bg-gray-700 text-white rounded-xl w-60 h-120 border border-red-500 box-shadow-2xl hover:scale-105'>

            <div>
                <img src={movie.image}
                className='w-80 h-72 mx-auto hover:scale-110 border-2 border-gray-900 '
                alt={movie.title} />

                <div className='h-16 text-center'>
                    <h1 className=' font-semibold text-lg mt-4'>{movie.title}</h1>
                    {/* <p className='text-sm mt-2'>{movie.email}</p>
                    <p className='text-sm mt-2'>{movie.role}</p>
                    <p className='text-sm mt-2'>joind on <span className='font-bold text-red-400'>{new Date(movie.relesDate).toDateString()}</span></p> */}
                </div>

            <div className='flex justify-center  gap-3 text-center mt-14 border-t'>

                <DeleteMovie id={movie._id}/>

                <button className='bg-blue-500 text-white px-3 py-1 mt-4 rounded-xl hover:scale-110 hover:bg-blue-600 hover:box-shadow-2xl'>
                <span className="material-symbols-outlined">edit</span>
                </button>


                <Link to={`/add_video/${movie._id}`}>
                <button className='bg-green-500 text-white px-3 py-1 mt-4 rounded-xl hover:scale-110 hover:bg-green-600 hover:box-shadow-2xl'>
                <span className="material-symbols-outlined">video_camera_back_add</span>
                </button>
                </Link>        
               
            </div>

            </div>

        </div>
              
    ))}
    </div>

    </div>

</>


  )
}
