import React, { useState } from 'react';
import { genders } from '../../../services/gender'

export default function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  const onSearch = () => {
    handleSearch(query, genre);
  };


  const handleQuery = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(newQuery, genre);
  };

  const handleGen = (e) => {
    const newGenre = e.target.value;
    setGenre(newGenre);
    handleSearch(query, newGenre);
  };

  return (
    <div className="w-full px-44">
      <div className="flex items-center bg-gray-700 rounded-lg px-2 py-1 border-2 border-gray-500 shadow-3xl">
        <input
          className="text-base bg-gray-700 text-gray-300 flex-grow outline-none px-2"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleQuery}
        />
        <div className="flex items-center px-2 rounded-lg space-x-4">
          <select
            className="text-base bg-gray-500 text-gray-200 border-2 border-gray-400 px-4 py-2 rounded-lg"
            value={genre}
            onChange={handleGen}
          >
            <option value="all">All</option>
            {
            genders.map((gender)=> 
                (
                    <option value={gender.key}>{gender.value}</option>
                ))
            }
          </select>
          <button
            onClick={onSearch}
            className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
