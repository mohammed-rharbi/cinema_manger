import React from 'react'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../../services/axios'
import { toast } from 'react-toastify';



const createNewRoom = async (data) => {

    try{

        const res = await AxiosInstance.post('/room/createRoom' , data ,{

            headers:{
                'Content-Type': 'multipart/form-data',
            }
        });

        if(res.status === 201){
            return toast.success('ShowTime created successfully')
        }

    }catch(err){
        console.log(err)
        toast.error('there is an error')
    }
}

export default function CreateRoom({hideIt}) {


    const [name , setName] = useState('')
    const [capacity , setCapacity] = useState(0)
    const [type , setType] = useState('')
    const [description , setDescription] = useState('')
    const [image , setImage] = useState(null)
   

    
    const handleCreate = async (e) => {

        e.preventDefault();
    
        if (validate()) {
            try {
                await createNewRoom({ name : name , capacity : capacity , type : type , description : description , image , image });
                toast.success("Room Created Successfully");
                hideIt
            } catch (err) {
                toast.error("There was an error while creating the Show room.");
            }
        }
    };
    

    const validate = () => {
        let result = true;


        if (name === '' || name === null) {
            result = false;
            toast.warning('Please Enter room name');
        }
    
        if (type === null) {
            result = false;
            toast.warning('Please Enter The room image');
        }
    
        if (capacity === null) {
            result = false;
            toast.warning('Please Enter room capacity');
        }
    
        if (description === "" || description === null) {
            result = false;
            toast.warning('Please Enter room description');
        }
    
        if (image === null) {
            result = false;
            toast.warning('Please Enter room image');
        }
     
        return result;
    }



  return (

<div aria-hidden="true" className='fixed top-0 left-0 z-30 flex justify-center items-center w-full h-full max-h-full-1'>
 <div className='absolute top-0 left-0 bg-black bg-opacity-60  h-full w-full z-40' ></div> 

        <div className="relative  flex p-4 z-50 p-4  max-w-md max-h-full">

            <div  className="w-full bg-white rounded-lg shadow dark:bg-gray-700">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Create Show Room
                    </h3>
                    <button onClick={ hideIt  } type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <form action="" onSubmit={(e) => handleCreate(e)}  className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">



                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Mo" required="" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="capacity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capacity</label>
                            <input type="number" name="capacity" id="capacity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" value={capacity} onChange={(e) => setCapacity(e.target.value)}/>
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                            <input type="file" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  onChange={(e) => setImage(e.target.files[0])} />
                        </div>

                        
                        <div className='col-span-2 sm:col-span-1'>
                            
                            <select value={type} onChange={(e) => setType(e.target.value)} name="roomType" className="mt-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            
                            <option value='3D'>3D</option> 
                            <option value='normal'>Noraml</option> 
                            <option value='Vip'>VIP</option> 

                            </select>
                        </div>

                        
                        <div className="col-span-2">
                            <label htmlFor="description"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Description</label>
                            <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Room description here" defaultValue={description} onChange={(e) => setDescription(e.target.value)}></textarea>                    
                        </div>


                    </div>



                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        Add New Show Room
                    </button>


                </form>
            </div>
        </div>
    </div> 

  )
}
