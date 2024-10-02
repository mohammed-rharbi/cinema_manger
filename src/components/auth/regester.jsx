import React from 'react'
import Input from '../UI/input'
import Button from '../UI/button'
export default function Regester() {


  return (

<article id='cover'>
<div class="relative py-3 sm:max-w-xs sm:mx-auto">
  <div
    class="min-h-96 px-8 py-6 mt-24 text-left bg-white dark:bg-gray-800 rounded-xl shadow-lg"
  >
    <div class="flex flex-col justify-center items-center h-full select-none">
      <div class="flex flex-col items-center justify-center gap-2 mb-8">
        <img src="./public/images/Ellipse 28.png" alt="regester image" className='w-20  ' />
        <p class="m-0 text-[16px] font-semibold dark:text-white">
          Get Sign Up
        </p>
        <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]"
          >Get started with our app, just start section and enjoy experience.
        </span>
      </div>
      <div class="w-full flex flex-col gap-2">
        <Input type={"text"} label={"Name"} placeholder={'example'}/>
      </div>  
      <div class="w-full flex flex-col gap-2">
      <Input type={"email"} label={"Email"} placeholder={'example@'}/>
      </div>
      <div class="w-full flex flex-col gap-2">
        <Input type={"password"} label={"Password"} placeholder={'••••••••'}/>
      </div>
    </div>

    <div class="w-full flex justify-center items-center">
      <Button type={"submit"} label={"Login"}/>
    </div>
  </div>
</div>
</article>    

  )
}
