import React from 'react'
import NavBar from './navbar'
import Fotter from './fotter'
import { Outlet } from 'react-router-dom'


export default function CusLayout() {
  return (

    <>

<NavBar/>
<main>
<Outlet/>
</main>
<Fotter/>

    </>

  )
}
