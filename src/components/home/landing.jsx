import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/button'

export default function Landing() {
  return (
    
    
<section id='home' className='w-full h-screen bg-gray-900'>

<div className="flex  justify-center flex-col text-center ">
    <div>
    <h1 id='text' className="text-5xl mt-24 md:text-7xl font-bold text-white tracking-wide leading-snug font-playfair">
    Where Every Seat Tells a Story
  </h1>
    </div>
    <div className='mt-8 flex mt-8 justify-center'>
    <Link to={'/login'} >
    <button className='px-4 py-3 bg-yellow-500 hover:bg-yellow-600  text-gray-900 rounded-xl flex items-center gap-2'>Book Your Seat Now</button>
    </Link>
    </div>
</div>

</section>


)}
