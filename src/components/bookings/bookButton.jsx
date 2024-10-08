import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { toast } from 'react-toastify'


export default function BookButton({ showTimeId , seatId , customerId }) {

    const handleReservation = () => {


        try{

            const res = axios.post('http://localhost:5000/api/booking/book', {
               
                showTimeId ,
                seatId ,
                customerId ,
              
            });

            if(res.status === 200){

                toast.success("Reservation Successful");
            }

        }catch(error){
            console.log(error);
            toast.error("Reservation Failed");
        }
    };

  return (

    <div className="flex justify-end mt-8 w-full ">
    <button
    
    onClick={handleReservation}
    className="bg-red-500 mr-4 hover:bg-red-600 text-white font-bold py-2 px-24 rounded" label={'Book Now'}>
    Book Now
    </button>
    </div>
  )
}
