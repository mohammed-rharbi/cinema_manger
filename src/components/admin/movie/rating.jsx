import React, { useState } from 'react'
import AxiosInstance from '../../../services/axios';


export default function Rating({movieId}) {

    const [rate , setRate] = useState(0);
    const userId = localStorage.getItem('userId');

    const handleRating = async (value)=>{

        setRate(value);

        try{

          console.log()
            const res = await AxiosInstance.post(`/rating/rateMovie`, {userId , movieId , rate: value});
            if(res.status === 200){
                console.log('reating is done');
            }else{
              console.log('Failed')
            }

        }catch(err){

            console.log('Error occurred while sending rating',err);
        }



    }

  return (



    <div className='flex justify-center item-center '>


    {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          onClick={() => handleRating(num)}
          style={{ fontSize:30 , cursor: 'pointer', color: num <= rate ? 'gold' : 'gray' }}
        >
          ★
        </span>
    ))}

    </div>
  )
}
