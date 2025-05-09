import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../UI/slider';  
import AxiosInstance from '../../services/axios';
import SearchBar from '../admin/movie/search';
import BrowseButton from '../UI/browseButton';

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
        className="bg-cover bg-center pt-12 pb-24 flex gap-4 flex-wrap justify-center shadow-2xl"
      >
      <div className='w-full'>
      <SearchBar /> 
      </div>
      
        <div id='lay' className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-extrabold text-white mb-6">Discover Latest Blockbusters</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the best movies in theaters and on streaming platforms now.
          </p>
         <div className='w-full flex justify-center'>
         <BrowseButton/> 
         </div>
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
