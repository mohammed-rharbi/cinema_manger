import React from 'react'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../../services/axios'
import { toast } from 'react-toastify';

const createShowTime = async (data) => {


    try{

        const res = await AxiosInstance.post('/showTime/createShowtime' , data );

        if(res.status === 201){
            return toast.success('ShowTime created successfully')

        }else{
            throw new Error('there is an error')
        }
        

    }catch(err){
        console.log(err)
        toast.error('there is an error')
    }
}

export default function CreateShowTime({hideIt}) {


    const [movies , setMovies ] = useState([]);
    const [rooms , setRooms ] = useState([]);

    const [movie , setMovie] = useState(null)
    const [room , setRoom] = useState(null)
    const [time , setTime] = useState('')
    const [price , setPrice] = useState('')
   



    useEffect(()=>{


        const getMovies = async ()=>{


            try{

                const res = await AxiosInstance.get('/movie/allMovies');

                setMovies(res.data.movies);
    

            }catch(err){

                console.log(err)
            }

        }

        const getRooms = async ()=>{


            try{

                const res = await AxiosInstance.get('/room/getRooms');

                setRooms(res.data.rooms);
    

            }catch(err){

                console.log(err)
            }

        }
        
        getMovies()
        getRooms()
    },[])



    
    const handleCreate = async (e) => {

        e.preventDefault();
    
        if (validate()) {
            try {
                await createShowTime({ movie : movie , time : time , movie : movie , room : room });
                toast.success("ShowTime Created Successfully");
                hide();
            } catch (err) {
                toast.error("There was an error while creating the ShowTime.");
            }
        }
    };
    

    const validate = () => {
        let result = true;
    
        if (movie === null) {
            result = false;
            toast.warning('Please Enter The Movie');
        }
    
        if (room === null) {
            result = false;
            toast.warning('Please Enter ShowTime Room event');
        }
    
        if (time === "" || time === null) {
            result = false;
            toast.warning('Please Enter Time');
        }
    
        if (price === "" || price === null) {
            result = false;
            toast.warning('Please Enter Price');
        }
     
        return result;
    }



  return (

<div aria-hidden="true" className='fixed top-0 left-0 z-30 flex justify-center items-center w-full h-full max-h-full-1'>
 <div className='absolute top-0 left-0 bg-black bg-opacity-60  h-full w-full z-40' ></div> 

        <div className="relative  flex p-4 z-50 p-4  max-w-md max-h-full">

            <div  className="w-full bg-white rounded-lg shadow dark:bg-gray-700">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Create ShowTime
                    </h3>
                    <button onClick={ hideIt  } type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <form action="" onSubmit={(e) => handleCreate(e)}  className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">


                    <div className='col-span-2 sm:col-span-1'>
                            
                            <select value={room} onChange={(e) => setRoom(e.target.value)} name="rooms" className="mt-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">

                                {
                                    rooms.map((room)=> 
                                        
                                        (   <option value={room._id}>{room.name}</option> )
                                    )
                                }
                            </select>
                        </div>


                        <div className='col-span-2 sm:col-span-1'>
                            
                            <select  value={movie} onChange={(e) => setMovie(e.target.value)} name="movie" className="mt-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">

                                {
                                    movies.map((movie)=> 
                                        
                                        (   <option value={movie._id}>{movie.title}</option> )
                                    )
                                }
                            </select>
                        </div>


                        <div className="col-span-2">
                            <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
                            <input type="text" name="time" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie Name" required="" value={time} onChange={(e) => setTime(e.target.value)}/>
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={price} onChange={(e) => setPrice(e.target.value)} required=""/>
                        </div>

                       
                    
                    </div>



                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        Add New ShowTime
                    </button>


                </form>
            </div>
        </div>
    </div> 

  )
}
