import React from 'react'
import AxiosInstance from '../../../services/axios'
import { useState , useEffect } from 'react'
import { data } from 'autoprefixer'





export default function Favorites() {


    const [movies , setMovies] = useState(null)

    const userId = localStorage.getItem("userId");



    useEffect(()=>{

        const getFavorites = async ()=>{

            try{

                const res = await AxiosInstance.get(`/favorite/myFavorites?userId=${userId}`);


            
                setMovies(res.data.favorites[0].movies);
                

                
            }catch(err){
                console.log(err)
            }
        }

        getFavorites()

    }, [])


    if(!movies){

        return <h1 className='text-white text-center mt-24'>no favorite movies found</h1>
    }

  return (





 
    <div className=' flex justify-content-center flex-wrap gap-8  '>
        
        {movies.map((movie) => (




        <div key={movie._id} className='bg-gray-700 text-white rounded-xl w-60 h-120 border border-red-500 box-shadow-2xl hover:scale-105'>

<svg className='' xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="40px" fill="red"><path d="M480-388q51-47 82.5-77.5T611-518q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q17 22 48 52.5t84 78.5ZM200-120v-656.67q0-27 19.83-46.83 19.84-19.83 46.84-19.83h426.66q27 0 46.84 19.83Q760-803.67 760-776.67V-120L480-240 200-120Zm66.67-101.33L480-312l213.33 90.67v-555.34H266.67v555.34Zm0-555.34h426.66-426.66Z"/></svg>

            <div className='p-6'>
                <img src={movie.image}
                className='w-80 h-72 mx-auto hover:scale-110 border-2 border-gray-900 '
                alt={movie.title} />

                <h1 className='text-white text-center text-xl mt-5'>{movie.title}</h1>

  
            </div>

        </div>
              
    ))}
    </div>
    

  )
}
