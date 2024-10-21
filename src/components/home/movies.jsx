import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AxiosInstance from '../../services/axios';

export default function AllMovies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await AxiosInstance.get('movie/allMovies');

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
              <div key={movie._id} className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300">
               
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3">{movie.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{new Date(movie.relseDate).toLocaleDateString('en-US')}</p>
                  <p className="text-gray-300 mb-4 px-4">{movie.description}</p>
                  
                  <Link to={`/movieDetails/${movie._id}`}>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
