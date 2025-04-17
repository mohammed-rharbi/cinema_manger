import './App.css'
import { RouterProvider } from 'react-router-dom'
import Toast from './components/UI/toast'
import Router from './router/main'
import TabScreen from './components/admin/users/TabScreen'
import Tabs from './components/admin/users/Tabs'




function App() {

  return (
    <>
    <Tabs>
      <TabScreen  options={{title: "Test 1", tabIcon:({focused, color})=> <div className='min-w-24 min-h-24' style={{backgroundColor: focused ?  "#FEFE99" : "#FF0000"}}></div>}}/>
      <TabScreen  options={{title: "Test 2", tabIcon:({focused, color})=> <div className='min-w-24 min-h-24' style={{backgroundColor: focused ?  "#FEFE99" : "#FF0000"}}></div>}}/>
      <TabScreen  options={{title: "Test 3", tabIcon:({focused, color})=> <div className='min-w-24 min-h-24' style={{backgroundColor: focused ?  "#FEFE99" : "#FF0000"}}></div>}}/>
    </Tabs>
    </>
  ) 
}

export default App
