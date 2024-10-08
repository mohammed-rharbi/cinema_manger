import { useState } from 'react'
import Regester from './components/auth/regester'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Toast from './components/UI/toast'
import router from './router/index'




function App() {

  return (
    <>
<RouterProvider router={router} />
<Toast/>
    </>
  ) 
}

export default App
