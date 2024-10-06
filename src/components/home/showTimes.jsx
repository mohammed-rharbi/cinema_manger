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
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Available ShowTime</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ShowTimes.length === 0 ? (
          <p className="text-white text-center col-span-full">No ShowTimes found</p>
        ) : (
          ShowTimes.map((ShowTime) => (
            <div key={ShowTime._id} className="bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">

              <h3 className="text-xl font-semibold text-white">Movie: {ShowTime.movie}</h3>
              <p className="text-sm text-gray-400 mb-2">Time: {new Date(ShowTime.time).toDateString()}</p>
              <p className="text-gray-300 mb-4">Room: {ShowTime.room}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  </section>
  
  );
}
