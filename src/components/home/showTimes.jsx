import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ShowTimes() {

  const [ShowTimes, setShowTime] = useState([]);

  useEffect(() => {
    const getShowTimes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/showTime/allShowtimes');

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

                <div class="flex justify-center items-center flex-col space-y-12 py-12 w-full mx-auto">
                <div key={ShowTime._id}  class="py-3 sm:max-w-xl sm:mx-auto">
                    <div class="bg-gray-800 shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                      <div class="h-48 overflow-visible w-1/2">
                          <img class="rounded-3xl shadow-lg" src={ShowTime.movie.image} alt={ShowTime.movie.title}/>
                      </div>
                      <div class="flex flex-col w-1/2 space-y-4">
                        <div class="flex justify-between items-start">
                          <h2 class="text-3xl font-bold text-white">{ShowTime.movie.title}</h2>
                          <div class="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
                        </div>
                        <div>
                          <div class="text-sm text-gray-400">{ new Date(ShowTime.time).toDateString()}</div>
                          <div class="text-lg text-gray-400">{ShowTime.room.name}</div>
                        </div>
                          <p class=" text-gray-400 max-h-40 overflow-y-hidden">{ShowTime.movie.description}</p>
                        <div class="flex text-2xl font-bold text-gray-300">${ShowTime.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
          ))
        )}


    </div>
  </section>
  
  );
}
