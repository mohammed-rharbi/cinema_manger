import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <section className="w-full min-h-screen bg-gray-900 py-10 px-12">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Available Movies</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.length === 0 ? (
          <p className="text-white text-center col-span-full">No movies found</p>
        ) : (
          movies.map((movie) => (
            <div key={movie._id} className="bg-gray-800 rounded-lg shadow-lg flex flex-col p-4 hover:shadow-2xl transition-shadow duration-300">
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="w-full h-100 object-cover rounded-md mb-4 overflow-visible hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold text-white text-center mb-3">{movie.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{new Date(movie.relseDate).toLocaleDateString('en-US')}</p>
            <p className="text-gray-300 mb-4 flex-grow">{movie.description}</p>

            <Link to={`/movieDetails/${movie._id}`}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-colors">
              View Details
            </button>
            </Link>
        
          </div>
          
          ))
        )}
      </div>
    </div>
  </section>
  
  );
}
