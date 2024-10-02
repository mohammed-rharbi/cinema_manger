import React from 'react'
import NavBar from '../layout/navbar'
import Fotter from '../layout/fotter'
import SideBar from '../layout/sideBar'
import { Outlet } from 'react-router-dom'


export default function layout() {
  return (

    <>

<NavBar/>
<SideBar/>

<main>

<Outlet/>

</main>

<Fotter/>

    
    
    </>

  )
}
