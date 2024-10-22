import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookButton from '../bookings/bookButton'
import AxiosInstance from '../../services/axios'
import Loading from '../UI/loading'

export default function ShowTimeDetials() {

    const {id} = useParams();
    const [loading , setLoading] = useState(true);
    const [showTime , setShowTime] = useState(null);
    const [selectedSeat , setSelectedSeat] = useState(null);

    useEffect(() => {

        const getShowTimes = async () => {

            try {
            const response = await AxiosInstance.get(`/showTime/getShowTime/${id}`);
            setShowTime(response.data.showtimes);

            }
            catch (error) {
                console.log(error);
            }
            finally{
                setLoading(false)
            }
        }

        getShowTimes();
    } , []);


    if(loading){

        return <Loading/>
    }

    if(!showTime) {

        return <p>No ShowTime available</p>
    }

    const handleSeat = (seat) => {
        setSelectedSeat(seat);
    }

  return (

    <section className='w-full h-screen bg-gray-900 text-white flex justify-center items-center flex-col'>
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">

    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

        
        <div className='grid grid-cols-7 gap-4 mt-6 lg:mt-0 text-white text-center'>
            
        {showTime.seats.map((seat) => 
        
        (
            <div
             key={seat.id} 
             onClick={() => handleSeat(seat)}
             className={`bg-yellow-500 py-2 px-2 rounded hover:bg-yellow-600 ${selectedSeat === seat ? 'bg-yellow-700' : ''} `}>
            <img alt="seat" className=" object-cover object-center h-14 w-14  rounded border border-gray-200" 
          src='/images/seat.webp'/>
          <span className='text-gray-900 text-center font-bold'>{seat.index}</span>
            </div>
        )
        
        )}
        </div>

    </div>
    
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      
        <h1 className="text-red-500 text-4xl title-font font-semibold mb-3">{showTime.movie.title}</h1>
        <div className="flex mb-4">
          <span className='text-gray-300 mt-4'><span className='text-red-500 font-bold'>Time :</span> { new Date(showTime.time).toDateString()}</span>
        </div>
        <div className="flex mb-4">
          <span className='text-gray-300 mt-4'><span className='text-red-500 font-bold'>Movie Duration :</span> { new Date(showTime.movie.duration).toDateString()}</span>
        </div>
        <div className="flex mb-4">
          <span className='text-gray-300 mt-2'><span className='text-red-500 font-bold'>ShowTime Room :</span>    {showTime.room.name}</span>
        </div>
        <p className="leading-relaxed"></p>
        <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-200 mb-5">
        <span className='text-gray-300 mt-2'><span className='text-red-500 font-bold'>Room Type :</span>   {showTime.room.type}</span>

        
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-300">{showTime.price} $</span>
          <BookButton showTimeId={showTime._id} seatId={selectedSeat} />
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}
