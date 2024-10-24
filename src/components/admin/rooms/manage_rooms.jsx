import React, { useState, useEffect } from 'react';
import AxiosInstance from '../../../services/axios';
import Loading from '../../UI/loading';
import CreateRoom from './createRooms';
import DeleteRoom from './deleteRoom';


export default function Manage_rooms() {


  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);


  const [showCreate, setShowCreate] = useState(false);


  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res  = await AxiosInstance.get('/room/getRooms');
        setRooms(res.data.rooms);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <Loading />;



  const hideIt = () => {
    setShowCreate(false);
};

  return (

    <>


{showCreate && <CreateRoom hideIt={hideIt} />}


<div className="min-h-screen bg-gray-900 py-10 px-5">
<div className="flex justify-center gap-8 mt-8">
        <div onClick={()=> setShowCreate(true)} className="bg-blue-700 h-24 w-80 rounded-3xl text-center hover:scale-105 text-white hover:bg-blue-800"> add show Room </div>
        <div className="bg-blue-700 h-24 w-80 rounded-3xl text-center hover:scale-105 text-white hover:bg-blue-800"></div>
        <div className="bg-blue-700 h-24 w-80 rounded-3xl text-center hover:scale-105 text-white hover:bg-blue-800"></div>
      </div>

      <div className="text-center mb-10 mt-16">
        <h1 className="text-4xl font-bold text-white">Manage Show Rooms</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-white">
              <h2 className="text-2xl font-semibold mb-3">{room.name}</h2>
              <p className="text-sm text-gray-400">{room.capacity}</p>

              <div className="flex justify-between items-center mt-5">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded transition">
                  Edit
                </button>
              </div>
              <DeleteRoom id={room._id}/>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}
