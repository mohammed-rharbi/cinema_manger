import React from 'react'

export default function PopUp() {
  return (


<div className={`fixed top-0 left-0 z-30 flex justify-center items-center w-full h-full max-h-full-1`}>
 <div className='absolute top-0 left-0 bg-black bg-opacity-60  h-full w-full z-40' ></div> 
 <div className="relative bg-white   flex p-4 z-50">Form</div>
</div>

    
  )
}
