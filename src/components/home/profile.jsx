import React from 'react'

export default function Profileoo() {
  return (


    <>
    
    <div className='p-7 bg-gray-700 mt-8 text-white rounded w-60 h-80 border border-red-500 box-shadow-2xl hover:scale-105'>

    <img id='pic' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        className='mt-[-70px] w-24 h-24  mx-auto hover:scale-110 border-8 rounded-full border-gray-700  '
         />

         <div className='text-center mt-8 text-2xl'>
            <h1>my name</h1>
            <p>my email</p>
         </div>

         <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
         </div>

    </div>

    </>
  )
}
