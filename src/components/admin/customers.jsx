import React from 'react'
import AxiosInstance from '../../services/axios'
import { useState , useEffect } from 'react'
import Loading from '../UI/loading';
import { Link } from 'react-router-dom'
import AdminNav from '../UI/adminNav';
import UsersCard from '../UI/usersCard';


export default function Users() {


    const [customer , setCustomer] = useState(null);
    const [loading , setLoading] = useState(true);



    useEffect(()=>{


        const getCustomers = async ()=>{


            try{

                const res = await AxiosInstance.get('admin/getUserCustomers');
                
                setCustomer(res.data.Customers);

                // console.log(res.data.admins)
            }catch(err){

                console.log(err)

            }finally{
                setLoading(false)
            }
        }

        getCustomers();

    } , []);


    if(!customer || customer.length === 0){

        return <p>customers not found</p>
    }

    if(loading){

        return <Loading/>
    }


  return (



<>
    

    <div className=' h-full w-full bg-gray-900'>


    <div className='flex justify-center gap-8 mt-8 '>

<AdminNav/>
        
    </div>

    <div className='flex justify-center text-white p-8 text-4xl'>
        <h1 className='font-bold'>customers</h1> 
    </div>
        

    <div className=' flex justify-content-center flex-wrap gap-8  '>
        
        { Array.isArray(customer) && customer.map((customers) => (


   <UsersCard  id={customers._id} name={customers.name} email={customers.email} role={customers.role} date={customers.createdAt} />
    
   
    ))}
    </div>

    </div>

</>


  )
}
