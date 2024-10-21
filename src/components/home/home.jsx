import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../UI/slider';  
import AxiosInstance from '../../services/axios';

export default function Home() {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        const response = await AxiosInstance.get('/movie/getLatestMovies');
        setLatestMovies(response.data.latestMovies);
      } catch (error) {
        console.log('Error fetching latest movies:', error);
      }
    };

    fetchLatestMovies();
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-900 flex flex-col">

      <div
        id='jojo'
        className="bg-cover bg-center p-28 flex items-center justify-center box-shadow-4"
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-extrabold text-white mb-6">Discover Latest Blockbusters</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the best movies in theaters and on streaming platforms now.
          </p>
          <Link to="/allMovies">
            <button className="text-xl bg-blue-500 hover:bg-blue-600 py-3 px-8 rounded-lg">
              Browse Movies
            </button>
          </Link>
        </div>
      </div>

      <div className="">
        <h1 className='text-white text-center text-4xl font-extrabold mb-4 mt-[-35px]'> latest movies</h1>
        {latestMovies.length > 0 ? (
          <Slider items={latestMovies} /> 
        ) : (
          <p className="text-white text-center">No latest movies available.</p>
        )}
      </div>
    </section>
  );
}
