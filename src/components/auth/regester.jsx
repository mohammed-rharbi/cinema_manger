import React from 'react'
import Input from '../UI/input'
import Button from '../UI/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'






const registerUser = async (data) => {

  try{

    const response = await axios.post('http://localhost:5000/api/auth/register', data);

    const dataa = response.data;

    localStorage.setItem('authToken', dataa.token);

    window.location.href = '/login';

  }catch(err){

    if(err.response && err.response.data) {
      console.log(err.response.data);
      throw new Error(err.response.data);

    }else{
      console.log(err.message);
      throw new Error(err.message);
    }
  }
} 




export default function Regester() {

  const [UserName, UpdateName] = useState("")
  const [UserEmail, UpdateEmail] = useState("")
  const [UserPassword, UpdatePassword] = useState("")

  const handleRegester = (e) => {
    e.preventDefault();

    if(validate()) {
      registerUser({name : UserName,email : UserEmail,password : UserPassword})
      .then(() => toast.success("Regester Successful"))
      .catch((err) => toast.error(err.message))
    }
  }


  const validate = () => {

    let result = true;

    if(UserName === "" || UserName === null) {
      result = false;
      toast.error("Please Enter Name");
    }

    if(UserEmail === "" || UserEmail === null) {
      result = false;
      toast.error("Please Enter Email");
    }

    if(UserPassword === "" || UserPassword === null) {
      result = false;
      toast.error("Please Enter Password");
    }
    return result;
  }

  return (

<article id='cover'>
<div className="relative py-3 sm:max-w-xs sm:mx-auto">
  <div
    className="min-h-96 px-8 py-6 mt-24 text-left bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <form action="" onSubmit={handleRegester}>
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <img src="./public/images/Ellipse 28.png" alt="regester image" className='w-20  ' />
        <p className="m-0 text-[16px] font-semibold dark:text-white">
          Get Sign Up
        </p>
        <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]"
          >Get started with our app, just start section and enjoy experience.
        </span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Input value={UserName} onChange={(e) => UpdateName(e.target.value)} type={"text"} label={"Name"} placeholder={'example'}/>
      </div>  
      <div className="w-full flex flex-col gap-2">
      <Input value={UserEmail} onChange={(e) => UpdateEmail(e.target.value)} type={"email"} label={"Email"} placeholder={'example@'}/>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Input value={UserPassword} onChange={(e) => UpdatePassword(e.target.value)} type={"password"} label={"Password"} placeholder={'••••••••'}/>
      </div>
    </div>

    <div className="w-full flex justify-center items-center">
      <Button type={"submit"} label={"Login"}/>
    </div>

    <div className='w-full flex justify-center items-center text-[#8B8E98] mt-4 hover:text-white'>
    <Link to='/login'>already have an account ?</Link>
    </div>
    </form>
  </div>
</div>
</article>    

  )
}
