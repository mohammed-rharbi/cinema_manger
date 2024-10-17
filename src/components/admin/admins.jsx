import React from 'react'
import AxiosInstance from '../../services/axios'
import { useState , useEffect } from 'react'
import Loading from '../UI/loading';
import AdminNav from '../UI/adminNav';
import UsersCard from '../UI/usersCard';



export default function Admins() {


    const [admins , setAdmins] = useState(null);
    const [loading , setLoading] = useState(true);



    useEffect(()=>{


        const getAdmins = async ()=>{


            try{

                const res = await AxiosInstance.get('admin/getUserAdmins');
                
                setAdmins(res.data.admins);

                // console.log(res.data.admins)
            }catch(err){

                console.log(err)

            }finally{
                setLoading(false)
            }
        }

        getAdmins();

    } , []);


    if(!admins || admins.length === 0){

        return <p>admins not found</p>
    }

    if(loading){

        return <Loading/>
    }


  return (



<>
    

    <div className=' h-full w-full bg-gray-900'>


<AdminNav/>
 
    <div className='flex justify-center text-white p-8 text-4xl'>
        <h1 className='font-bold'>admins</h1> 
    </div>
        

    <div className=' flex justify-content-center flex-wrap gap-8 mt-8  '>
         
        { Array.isArray(admins) && admins.map((admin) => (

<UsersCard  id={admin._id} name={admin.name} email={admin.email} role={admin.role} date={admin.createdAt} 

isAdmin={true}/>
    
    ))}
    </div>

    </div>

</>


  )
}
