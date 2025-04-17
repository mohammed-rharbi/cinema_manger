import React from 'react';
import { useState , useEffect } from 'react';
import AxiosInstance from '../../services/axios';

export default function Dashboard() {

  const [customersCount , setCustomersCount ] = useState(0);
  const [movieCount , setMoviesCount] = useState(0);
  const [showTimeCount , setShowTimeCount] = useState(0);
  const [reservationCount , setReservationCount] = useState(0)



  useEffect(()=>{


    const getStatics = async ()=>{


      try{


        const res = await AxiosInstance.get('admin/getStatistics');

        const data = res.data.Statistics;
        setCustomersCount(data.customersCount);
        setMoviesCount(data.movieCount);
        setShowTimeCount(data.showTimeCount);
        setReservationCount(data.reservationCount);


      }catch(err){


        console.log(err)
      }

    }


getStatics()

  },[])

  
  return (
    <>
      <div className="flex flex-col h-full">
        

        <header className="bg-gray-800 rounded-2xl  shadow p-5">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-gray-400">Overview of system performance</p>
        </header>

        <main className="flex-1 p-6 space-y-6">
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-700 p-5 rounded-lg shadow-md">
              <h2 className="text-gray-400">Total Customers</h2>
              <p className="text-3xl font-bold text-blue-400">{customersCount}</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-md">
              <h2 className="text-gray-400">Total Movies</h2>
              <p className="text-3xl font-bold text-green-400">{movieCount}</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-md">
              <h2 className="text-gray-400">Total ShowTimes</h2>
              <p className="text-3xl font-bold text-red-400">{showTimeCount}</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-md">
              <h2 className="text-gray-400">Total Reservation</h2>
              <p className="text-3xl font-bold text-yellow-400">{reservationCount}</p>
            </div>
          </div>


          <div className="bg-gray-700 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-300 mb-3">Performance Analytics</h2>

            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart Component Here</p>
            </div>
          </div>


          <div className="bg-gray-700 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-300 mb-3">Recent Activities</h2>
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="text-gray-400">
                  <th className="px-4 py-2 border-b border-gray-600">User</th>
                  <th className="px-4 py-2 border-b border-gray-600">Action</th>
                  <th className="px-4 py-2 border-b border-gray-600">Date</th>
                  <th className="px-4 py-2 border-b border-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">John Doe</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">Created an order</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">2023-10-25</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-green-400">Completed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">Jane Smith</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">Updated profile</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">2023-10-24</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-yellow-400">Pending</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">Alice Brown</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">Submitted ticket</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-gray-300">2023-10-23</td>
                  <td className="px-4 py-2 border-b border-gray-600 text-red-400">In Progress</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
