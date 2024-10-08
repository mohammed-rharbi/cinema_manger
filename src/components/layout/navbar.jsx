import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { toast } from 'react-toastify'

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
