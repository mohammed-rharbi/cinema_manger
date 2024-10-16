import React from 'react'
import { Link } from 'react-router-dom'



export default function AdminNav() {
  return (



<div className='flex justify-center gap-8 mt-8 '>


<Link to={'/admins'}>
<div id='navv' className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center hover:scale-105 text-white hover:bg-blue-800 hover:box-shadow-2xl'>
<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M690.88-270q25.88 0 44-19T753-333.88q0-25.88-18.12-44t-44-18.12Q665-396 646-377.88q-19 18.12-19 44T646-289q19 19 44.88 19Zm-1.38 125q33.5 0 60.5-14t46-40q-26-14-51.96-21t-54-7q-28.04 0-54.54 7T584-199q19 26 45.5 40t60 14ZM480-80q-138-32-229-156.5T160-522v-239l320-120 320 120v270q-14-7-30-12.5t-30-7.5v-208l-260-96-260 96v197q0 76 24.5 140T307-269.5q38 48.5 84 80.5t89 46q6 12 18 27t20 23q-9 5-19 7.5T480-80Zm212.5 0Q615-80 560-135.5T505-267q0-78.43 54.99-133.72Q614.98-456 693-456q77 0 132.5 55.28Q881-345.43 881-267q0 76-55.5 131.5T692.5-80ZM480-479Z"/></svg>
</div>
</Link>

<Link>
<div  id='navv'className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center hover:scale-105 text-white hover:bg-blue-800 hover:box-shadow-2xl'></div>
</Link>

<Link to={'/Manage_users'}>
<div id='navv' className='bg-blue-700 h-24 w-80 rounded-3xl box-shadow-2xl text-center hover:scale-105 text-white hover:bg-blue-800 hover:box-shadow-2xl'>
<span class="material-symbols-outlined">person</span>
     
</div>
</Link>
       
        
</div>

  )
}