import React from 'react'
import Input from '../UI/input'
import Button from '../UI/button'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams , useNavigate } from 'react-router-dom'



export default function ResetPassword() {

const {token} = useParams();    
const [UserPassword, SetPassword] = useState("");
const [confirmPassword, SetConfirmPassword] = useState("");
const navigate = useNavigate();


const handleReset = (e) => {
  e.preventDefault();
  

  if(UserPassword !== confirmPassword ){
    toast.error("Password Not Matched");
    return;
  }

  try{

    const response =  axios.post(`http://localhost:5000/api/auth/resetPassword/` , {token , UserPassword});
    toast.success("Password Reset Successfully");
    window.location.href = '/login';
  }catch(err){

    if(err.response && err.response.data) {
      console.log(err.response.data);
    }else{
      console.log(err.message);
    }
  } 
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
          >Now set a new password for your account
        </span>
      </div>

      <div className="w-full flex flex-col gap-2">
      <Input type={"password"} label={"new password"} placeholder={'example@'} name={"password"} value={UserPassword} onChange={(e) => SetPassword(e.target.value)}/>
      </div>

      <div className="w-full flex flex-col gap-2">
      <Input type={"password"} label={"confirm password"} placeholder={'example@'} name={"Confirm Password"} value={confirmPassword} onChange={(e) => SetConfirmPassword(e.target.value)}/>
      </div>

      </div>

    <div className="w-full flex justify-center mt-8 items-center">
      <Button type={"submit"} label={"Confirm"}/>
    </div>
  </div>
  </form>
</div>
</article>

  )
}
