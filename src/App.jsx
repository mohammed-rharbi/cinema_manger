import './App.css'
import { RouterProvider } from 'react-router-dom'
import Toast from './components/UI/toast'
import Router from './router/main'




function App() {

  return (
    <>
<RouterProvider router={Router} />
<Toast/>
    </>
  ) 
}

export default App
