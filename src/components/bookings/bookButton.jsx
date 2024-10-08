import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';


export default function BookButton({ showTimeId, seatId }) {

  console.log(showTimeId , seatId);

    const handleReservation = async () => {

    const token = localStorage.getItem('authToken');

    const config = {
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        },
    };

    try {
      const res = await axios.post('http://localhost:5000/api/reservation/createReservation' ,{
        showTimeId: showTimeId,
        seateId: seatId,
      }, config);


      if (res.status === 201) {
        toast.success("Reservation Successful");
        window.location.href = '/home';
      } else {
        toast.error("Reservation Failed"); 
      }
    } catch (error) {
      console.error(error);
      toast.error("Reservation Failed");
    }
  };

  return (
    <button
      onClick={handleReservation}
      className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
    >
      Book Now
    </button>
  );
}
