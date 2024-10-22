import React from 'react';
import { Link } from 'react-router-dom';

export default function Slider({ items }) {
  return (
    <div className="flex space-x-4 overflow-x-auto  overflow-y-hide  scrollbar-hide">
      {items.map((movie) => (
        <div key={movie._id} className="relative p-3 w-64 h-full flex-shrink-0 hover:scale-105 transition-transform duration-300">
          <img 
            src={movie.image} 
            alt={movie.title} 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
            <Link to={`/movieDetails/${movie._id}`}>
            <button  className="p-2 bg-red-500 rounded-[6px] text-white  hover:bg-red-600">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
