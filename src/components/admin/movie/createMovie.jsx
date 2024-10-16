import React from 'react'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../../services/axios'
import { toast } from 'react-toastify';
import { set } from 'react-hook-form';


const createMovie = async (data) => {


    try{

        const res = await AxiosInstance.post('/movie/createMovie' , data ,{

            headers:{
                'Content-Type': 'multipart/form-data',
            }
        });

        if(res.status === 201){
            return toast.success('movie created successfully')

        }else{
            throw new Error('there is an error')
        }
        

    }catch(err){
        console.log(err)
        toast.error('there is an error')
    }
}

export default function CreateMovie({toggle}) {

    const [name , setName] = useState('')
    const [description , setDescription] = useState('')
    const [deroctor , setDirector] = useState('')
    const [duration , setDuration] = useState('')
    const [relseDate , setRelseDate] = useState('')
    const [image , setImage] = useState(null)
    const [genre , setGenre] = useState(null)

    const [hide , setHide] = useState(false);


    

    const handleCreate = async (e) => {

        e.preventDefault();
    
        if (validate()) {
            try {
                await createMovie({ title : name , description : description , deroctor : deroctor , duration : duration , relseDate : relseDate , image: image , gen : genre});
                toast.success("Movie Created Successfully");
                hide();
            } catch (err) {
                toast.error("There was an error while creating the movie.");
            }
        }
    };
    

    const validate = () => {
        let result = true;
    
        if (name === "" || name === null) {
            result = false;
            toast.warning('Please Enter Movie Name');
        }
    
        if (description === "" || description === null) {
            result = false;
            toast.warning('Please Enter Movie Description');
        }
    
        if (deroctor === "" || deroctor === null) {
            result = false;
            toast.warning('Please Enter Movie Director');
        }
    
        if (duration === "" || duration === null) {
            result = false;
            toast.warning('Please Enter Movie Duration');
        }
    
        if (relseDate === "" || relseDate === null) {
            result = false;
            toast.warning('Please Enter Movie Release Date');
        }
    
        if (image === null) {
            result = false;
            toast.warning('Please Enter Movie Image');
        }
        if (genre === null) {
            result = false;
            toast.warning('Please Enter Movie Genre');
        }
    
        return result;
    }

  

  return (

    <div id='crud-modal'  tabIndex="-1" aria-hidden="true" className={`${toggle ? 'block': 'hidden'}  bg-black bg-opacity-60 fixed overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-md max-h-full">

            <div id="crud" className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Create Movie
                    </h3>
                    <button onClick={()=> setHide(true) } type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <form action="" onSubmit={(e) => handleCreate(e)} encType="multipart/form-data" className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie Name" required="" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>


                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">relese Date</label>
                            <input type="date" name="relseDate" id="relseDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={relseDate} onChange={(e) => setRelseDate(e.target.value)} required=""/>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deroctor</label>
                            <input type="text" name="deroctor" id="deroctor" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' value={deroctor} onChange={(e) => setDirector(e.target.value)} placeholder='deroctor' required="" />
                        </div>


                        <div className="col-span-2">
                            <label htmlFor="description"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Description</label>
                            <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Movie description here" onChange={(e) => setDescription(e.target.value)}>{description}</textarea>                    
                        </div>


         
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                            <input type="file" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  onChange={(e) => setImage(e.target.files[0])}/>
                        </div>

                        
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="Duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                            <input type="text" name="Duration" id="Duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="120 min" required=""/>
                        </div>

                        <div className='col-span-2 sm:col-span-1'>
                            
                            <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} name="genres" className="mt-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="drama">Drama</option>
                                <option value="horror">Horror</option>
                                <option value="science_fiction">Science Fiction</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="romance">Romance</option>
                                <option value="thriller">Thriller</option>
                                <option value="mystery">Mystery</option>
                                <option value="documentary">Documentary</option>
                                <option value="animation">Animation</option>
                                <option value="biography">Biography</option>
                                <option value="musical">Musical</option>
                                <option value="historical">Historical</option>
                            </select>
                        </div>
                        
                    
                    </div>



                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        Add new movie
                    </button>


                </form>
            </div>
        </div>
    </div> 

  )
}
