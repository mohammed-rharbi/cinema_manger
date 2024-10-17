import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../../services/axios';

export default function Rate({movieId}) {

    const [rate , setRate] = useState(null);




    useEffect(() => {
        const getRate = async (id) => {
          try {
            const res = await AxiosInstance.post(`/rating/getMovieRate/${id}`);
            

            
            if (res.status === 200) {

                if (res.data && typeof res.data.avgRate === 'number') {
                setRate(res.data.avgRate);
              } else {
                console.log('Invalid avg value:', res.data.avgRate); 
              }
            } else {
              console.log('Issue with response status:', res.status);
            }
          } catch (err) {
            console.log('Error fetching rate:', err);
          }
        };
      
        getRate(movieId);
      }, [movieId]);
      

  return (



    <div className='bg-gray-400 p-6 rounded w-20'>
    <span className='text-black'>
      <h1>{typeof rate === 'number' ? rate : 'No rating'}</h1>
    </span>
  </div>
    
  )
}
