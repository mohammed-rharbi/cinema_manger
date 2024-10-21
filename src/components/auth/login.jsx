import React from 'react'
import Input from '../UI/input'
import Button from '../UI/button'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AxiosInstance from '../../services/axios'




const loginUser = async (userData) => {
  try {

      console.log(userData);
      const response = await AxiosInstance.post('/auth/login', userData);

      const data =  response.data;

      if(data.token) {

        localStorage.setItem('authToken', data.token);

        const userRole = data.user.role;
        const userId = data.user._id;
        localStorage.setItem('userId', userId);
        localStorage.setItem('userRole', userRole);

        return userRole ;

      }else{
        toast.error("login failed");
      }

  } catch (err) {

      if(err.response && err.response.data) {

          console.log(err.response.data);
          throw new Error(err.response.data);

      }else{

          console.log(err.message);
          throw new Error(err.message);
      }
}
}



export default function Login() {

  const [UserEmail, UpdateEmail] = useState("");
  const [UserPassword, UpdatePassword] = useState("");

  const navigate = useNavigate()
  

  const handleLogin = async (e) => {
    e.preventDefault();

    if(validate()){

      try{

        const userRole = await loginUser({email : UserEmail,password : UserPassword});
        toast.success("Login Successful");

        if(userRole === 'admin'){
          navigate('/dashboard');
        }else if(userRole === 'customer'){
          navigate('/home');
        }else{
          navigate('/login');
        }

      }catch(err){

        toast.error('login failde');
      }
    }
  };

  const validate = ()=>{

    let result = true;

    if(UserEmail === "" || UserEmail === null){
      result = false;
      toast.warning("Please Enter Email");
    }

    if(UserPassword === "" || UserPassword === null){
      result = false;
      toast.warning("Please Enter Password");
    }

    return result;
  }

return (
  
<article id='cover'>
<div className="relative py-3 sm:max-w-xs sm:mx-auto">
  <form action="" onSubmit={handleLogin}>
  <div className="min-h-96 px-8 py-6 mt-32 text-left bg-white dark:bg-gray-800 rounded-xl shadow-lg">
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <img src="./images/logo.svg" alt="" />
        <p className="m-0 text-[16px] font-semibold dark:text-white">
          Login to your Account
        </p>
        <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]"
          >Get started with our app, just start section and enjoy experience.
        </span>
      </div>

      <div className="w-full flex flex-col gap-2">
      <Input value={UserEmail} type={"email"} onChange={(e) => UpdateEmail(e.target.value)} label={"Email"} placeholder={'example@'} />
      </div>
      <div className="w-full flex flex-col gap-2">
      <Input  value={UserPassword} type={"password"} onChange={(e) => UpdatePassword(e.target.value)} label={"Password"} placeholder={'••••••••'} />
      </div>
    </div>

    <div className="w-full flex justify-center items-center">
      <Button type={"submit"}  label={"Login"}/>
    </div>
    
    
    <div className='w-full flex justify-center items-center text-[#8B8E98] mt-4 hover:text-white'>
    <Link to='/forgot'>forgot password ?</Link>
    </div>

    <div className='w-full flex justify-center items-center text-[#8B8E98] mt-4 hover:text-white'>
    <Link to='/register'> don't have an account ?</Link>
    </div>
  </div>
  </form>
</div>
</article>

  )
}
