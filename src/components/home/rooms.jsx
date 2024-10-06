import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/room/getRooms');

        setRooms(response.data.rooms);
      } catch (error) { 
        console.log(error);
      }
    };

    getRooms();
  }, []);

  if (!rooms) {
    return <p>No rooms available</p>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-900 py-10">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Our rooms</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rooms.length === 0 ? (
          <p className="text-white text-center col-span-full">No rooms found</p>
        ) : (
            rooms.map((room) => (
            <div key={room._id} className="bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-white">{room.name}</h3>
              <p className="text-gray-300 mb-4">Room Capacity : {room.capacity}</p>
              <p className="text-gray-300 mb-4">Room Type : {room.type}</p>
              <p className="text-gray-300 mb-4">Seats : {room.seats.join(', ')}</p>
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
