import React from 'react'
import { Link } from 'react-router-dom'

export default function sideBar() {
  return (
    
    <div class="fixed h-screen  bg-gray-800">  
    <aside id='sidebar' class="flex flex-col items-center text-gray-700 shadow h-full">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />



    <div class="h-16 mt-4 flex items-center w-full">
    <Link to={'/dashboard'} className="h-24 w-24 mx-auto">
    <img src="./images/logo.png" alt="" />
    </Link>
    </div>

<ul>

<li class="hover:text-gray-100">     
<Link to="/dashboard"  class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-400">
<span class="material-symbols-outlined">dashboard</span>
</Link>  
</li>

<li class="hover:text-gray-100">     
<Link to="/Manage_users"  class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-400">
<span class="material-symbols-outlined">group</span>
</Link>  
</li>
    

<li class="hover:text-gray-100">     
<Link to="/Manage_movies"  class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-400">
<span class="material-symbols-outlined">slideshow</span>
</Link>  
</li>
  
<li class="hover:text-gray-100">     
<Link to="/Manage_showes"  class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-400">
<span class="material-symbols-outlined">movie_info</span>
</Link>  
</li>

<li class="hover:text-gray-100">     
<Link to="/Manage_rooms"  class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-400">
<span class="material-symbols-outlined">tv_gen</span>
</Link>  
</li>

<li class="hover:text-gray-100">     
<Link to="/manage_reservations"  class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-400">
<span class="material-symbols-outlined">local_activity</span>
</Link>  
</li>

</ul>
      <div class="mt-auto h-16 flex items-center w-full">
        <button class="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">
         <span class="material-symbols-outlined">logout</span>
        </button>
      </div>
  
    </aside>
  </div>
  )
}
