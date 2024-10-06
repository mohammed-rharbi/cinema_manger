import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movie/allMovies');

        setMovies(response.data.movies);
      } catch (error) { 
        console.log(error);
      }
    };

    getMovies();
  }, []);

  if (!movies) {
    return <p>No movies available</p>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-900 py-10">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Available Movies</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.length === 0 ? (
          <p className="text-white text-center col-span-full">No movies found</p>
        ) : (
          movies.map((movie) => (
            <div key={movie._id} className="bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-60 object-cover rounded-md mb-4" 
              />
              <h3 className="text-xl font-semibold text-white">{movie.title}</h3>
              <p className="text-sm text-gray-400 mb-2">Release Date: {new Date(movie.relseDate).toDateString()}</p>
              <p className="text-gray-300 mb-4">{movie.description}</p>
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
