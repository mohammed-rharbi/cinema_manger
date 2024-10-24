import React, { useState, useEffect } from 'react';
import AxiosInstance from '../../../services/axios';
import Loading from '../../UI/loading';
import DeleteShowTime from './deleteShowTime';
import CreateShowTime from './createShowTime';

export default function ManageShowTimes() {
  const [showTimes, setShowTimes] = useState([]);
  const [loading, setLoading] = useState(true);


  const [showCreate, setShowCreate] = useState(false);


  useEffect(() => {
    const fetchShowTimes = async () => {
      try {
        const { data } = await AxiosInstance.get('showTime/allShowtimes');
        setShowTimes(data.showTimes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShowTimes();
  }, []);

  if (loading) return <Loading />;

  if (!showTimes.length) return <div className="text-white text-center p-4">No showtimes available</div>;



  const hideIt = () => {
    setShowCreate(false);
};

  return (

    <>


{showCreate && <CreateShowTime hideIt={hideIt} />}


<div className="min-h-screen bg-gray-900 py-10 px-5">
<div className="flex justify-center gap-8 mt-8">
        <div onClick={()=> setShowCreate(true)} className="bg-blue-700 h-24 w-80 rounded-3xl text-center hover:scale-105 text-white hover:bg-blue-800"> add showTime </div>
        <div className="bg-blue-700 h-24 w-80 rounded-3xl text-center hover:scale-105 text-white hover:bg-blue-800"></div>
        <div className="bg-blue-700 h-24 w-80 rounded-3xl text-center hover:scale-105 text-white hover:bg-blue-800"></div>
      </div>

      <div className="text-center mb-10 mt-16">
        <h1 className="text-4xl font-bold text-white">Manage ShowTimes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showTimes.map((showTime) => (
          <div key={showTime._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              src={showTime.movie.image}
              alt={showTime.movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-white">
              <h2 className="text-2xl font-semibold mb-3">{showTime.movie.title}</h2>
              <p className="text-sm text-gray-400">{showTime.room.name}</p>
              <p className="text-sm text-gray-400">Price: ${showTime.price}</p>
              <p className="text-sm text-gray-400">Date: {new Date(showTime.time).toLocaleDateString()}</p>
              <p className="text-xs text-gray-500">{new Date(showTime.time).toLocaleTimeString()}</p>

              <div className="flex justify-between items-center mt-5">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded transition">
                  Edit
                </button>
                <DeleteShowTime id={showTime._id}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}
