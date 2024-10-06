import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/button'

export default function NotFound() {
  return (


    <section className='w-full h-screen bg-gray-900 text-white flex justify-center items-center flex-col'>

    <h1 className='text-8xl font-bold text-center mb-8 font-playfair text-red-500'>404</h1>

    <Link to={'/'}><Button  label={'Go Back Home'}></Button></Link>

    </section>


  )
}
