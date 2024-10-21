import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosInstance from '../../services/axios';

export default function ShowTimes() {

  const [ShowTimes, setShowTime] = useState([]);

  useEffect(() => {
    const getShowTimes = async () => {
      try {
        const response = await AxiosInstance.get('/showTime/allShowtimes');

        setShowTime(response.data.showTimes);
      } catch (error) { 
        console.log(error);
      }
    };

    getShowTimes();
  }, []);

  if (!ShowTimes) {
    return <p>No ShowTimes available</p>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-900 py-10">
    <div className="mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Available ShowTime</h2>
      
        {ShowTimes.length === 0 ? (
          <p className="text-white text-center col-span-full">No ShowTimes found</p>
        ) : (

          ShowTimes.map((ShowTime) => (

                <div key={ShowTime._id} className="flex justify-center items-center flex-col space-y-12 py-12 w-full mx-auto">
                <div key={ShowTime._id}  className="py-3 sm:max-w-xl sm:mx-auto">
                    <div className="bg-gray-800 shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                      <div className="h-48 overflow-visible w-1/2">
                          <img className="rounded-3xl shadow-lg" src={ShowTime.movie.image} alt={ShowTime.movie.title}/>
                      </div>
                      <div className="flex flex-col w-1/2 space-y-4">
                        <div className="flex justify-between items-start">
                          <h2 className="text-3xl font-bold text-white">{ShowTime.movie.title}</h2>
                          <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{ new Date(ShowTime.time).toDateString()}</div>
                          <div className="text-lg text-gray-400">{ShowTime.room.name}</div>
                        </div>
                          <p className=" text-gray-400 max-h-40 overflow-y-hidden">{ShowTime.movie.description}</p>
                        <div className="flex text-2xl font-bold text-gray-300">${ShowTime.price}</div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-6 w-full ">
                      <Link to={`/showTimeDetails/${ShowTime._id}`}>
                      <button className="bg-red-500 mr-4 hover:bg-red-600 text-white font-bold py-2 px-24 rounded" >Book Now</button>
                      </Link>
                    </div>

                  </div>
                </div>
          ))
        )}


    </div>
  </section>
  
  );
}
