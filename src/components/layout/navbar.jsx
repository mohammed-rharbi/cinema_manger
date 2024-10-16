import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { toast } from 'react-toastify'
import Profile from '../home/profile'

export default function navbar() {

  const [isAuth, setIsAuth] = useState(false);



  useEffect(() => {

    localStorage.getItem('authToken') ? setIsAuth(true) : setIsAuth(false);


  } , []);

  
const Logout = () => {

  
  localStorage.removeItem('authToken')

  toast.success('Logout successfully')
  setIsAuth(false)
  window.location.href = '/login'
  
}

  return (
    
<nav id='navbar' class=" shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		<div class="text-indigo-500 md:order-1">
      <Link to={'/'}  ><img src="./images/logo.png" alt=""  className='h-32' /></Link>
		</div>
		<div class="text-gray-900 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">
      <Link to={'/home'}><li class="md:px-4 md:py-2 hover:text-yellow-400">Home</li></Link>
      <Link to={'/Allmovies'}><li class="md:px-4 md:py-2 hover:text-yellow-400">Movies</li></Link>
      <Link to={'/showtimes'}><li class="md:px-4 md:py-2 hover:text-yellow-400">Show Times</li></Link>
      <Link to={'/rooms'}><li class="md:px-4 md:py-2 hover:text-yellow-400">Rooms</li></Link>
      <Link to={'/about'}><li class="md:px-4 md:py-2 hover:text-yellow-400">About Us</li></Link>

			</ul> 
		</div>


{ isAuth ? (

<div className='flex gap-4 order-2 md:order-3'>
<button onClick={()=>Logout()} className='px-4 py-2 bg-red-600 hover:bg-red-700  text-gray-900 rounded-xl flex items-center gap-2'>logout</button>

<Link to={'/user_profile'}>
<span >
<svg  className='hover:scale-125 cursor-pointer'  xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#fffff"><path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.81-195q-57.81 0-97.31-39.69-39.5-39.68-39.5-97.5 0-57.81 39.69-97.31 39.68-39.5 97.5-39.5 57.81 0 97.31 39.69 39.5 39.68 39.5 97.5 0 57.81-39.69 97.31-39.68 39.5-97.5 39.5Zm.66 370Q398-80 325-111.5t-127.5-86q-54.5-54.5-86-127.27Q80-397.53 80-480.27 80-563 111.5-635.5q31.5-72.5 86-127t127.27-86q72.76-31.5 155.5-31.5 82.73 0 155.23 31.5 72.5 31.5 127 86t86 127.03q31.5 72.53 31.5 155T848.5-325q-31.5 73-86 127.5t-127.03 86Q562.94-80 480.47-80Zm-.47-60q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/></svg>
</span>
</Link>

{/* <select name="" id="select" className='rounded-lg w-50 px-3 py-2 text-sm w-full outline-none'>
  <option value="">my name</option>
  <option value="">Edite Profile</option>
  <option value="">Setting</option>
  <option value="" className='border-t'>Logout</option>
</select> */}

</div>

) : (

  

<div class="flex gap-4 order-2 md:order-3">
<Link to={'/login'}>
<button class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-xl flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Login</span>
</button>
</Link>

<Link to={'/register'}>
<button class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-xl flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>Sign Up</span>
</button>
</Link>     
</div>

)}

	</div>
</nav>

   
  );
}
