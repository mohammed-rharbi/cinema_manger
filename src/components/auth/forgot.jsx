import React from 'react'
import Input from '../UI/input'
import Button from '../UI/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'



const reset = async (email) => {

  try {

    const response = await axios.post('http://localhost:5000/api/auth/forget', { email });
    const data = response.data;
    toast.success("Check Your Email For Reset Link");

  } catch (err) {

    if (err.response && err.response.data) {
      console.log(err.response.data);

    } else {

      console.log(err.message);

    }
  }
}



export default function Forgot() {

const [UserEmail, UpdateEmail] = useState("");


const handleReset = (e) => {
  e.preventDefault();
  
  if(validate()) {
    reset(UserEmail)
    .then(() => toast.success("Check Your Email For Reset Link"))
    .catch((err) => toast.error(err.message))
  }
}

const validate = () => {
  let result = true;

  if(UserEmail === "" || UserEmail === null) {
    result = false;
    toast.error("Please Enter Email");
  }

  return result;
}

return (
  
<article id='cover'>
<div className="relative py-3 sm:max-w-xs sm:mx-auto">
<form action="" onSubmit={handleReset}>
  <div className="min-h-96 px-8 py-6 mt-32 text-left bg-white dark:bg-gray-800 rounded-xl shadow-lg">
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <img src="./images/logo.svg" alt="" />
        <p className="m-0 text-[16px] font-semibold dark:text-white">
          Reset your Password
        </p>
        <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]"
          >Enter Your Email and we will send you a link to reset your password
        </span>
      </div>

      <div className="w-full flex flex-col gap-2">
      <Input type={"email"} label={"Email"} placeholder={'example@'} name={"email"} value={UserEmail} onChange={(e) => UpdateEmail(e.target.value)}/>
      </div>
    </div>

    <div className="w-full flex justify-center mt-8 items-center">
      <Button type={"submit"} label={"Reset"}/>
    </div>

      
    <div className='w-full flex justify-center items-center text-[#8B8E98] mt-8  hover:text-white'>
    <Link to='/login'>Return To Login</Link>
    </div>
  </div>
  </form>
</div>
</article>

  )
}
