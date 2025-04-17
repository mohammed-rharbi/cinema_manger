import React from 'react'
import { useState , useEffect } from 'react'
import AxiosInstance from '../../../services/axios'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom'
import FileButton from '../../UI/fileButton'


const UploadVideo = async (formData , id) => {

    try{

        const res = await AxiosInstance.post(`movie/${id}/addVideo` , formData ,{

            headers:{
                'Content-Type': 'multipart/form-data',
            }
        });

        if(res.status === 201){
            toast.success('movie ben added successfully')
            return res.data ;

        }else{
            throw new Error('movie not added')
        }
        
    }catch(err){
        console.log(err)
        
    }
}


export default function AddVideo() {


    const [video , setVideo] = useState(null)
    const [movie , setMovie] = useState(null)
    const [loading , setLoading] = useState(true)
    const {id} = useParams();
    const Navigate = useNavigate()



    useEffect(()=>{

        const getMovie = async () => {

            try {
            const response = await AxiosInstance.get(`/movie/getMovie/${id}`);
            setMovie(response.data.movie);
            // console.log(response.data.movie)

        }catch(err){

              console.log(err);
              
              }finally{
                setLoading(false)        
              }
            };
    
        getMovie();
    }, [id])
    
        
    const handleCreate = async (e) => {

        e.preventDefault();
    
        if (validate()) {
            try {


                const formData = new FormData();
                formData.append('video',video);

                await UploadVideo( formData , id);
                Navigate("/Manage_movies");

            } catch (err) {
                console.log(err);
                toast.error("There was an error while adding the movie.");
            }
        }
    };

    
    const validate = () => {
        let result = true;
    
        if (!video || video === null) {
            result = false;
            toast.warning('Please Enter The Movie ');
            return false;
        }

        return result;
    }
    

    if( loading ||!movie){

        return <p>loading</p>
    }

  return (

    <section className="text-gray-700 body-font overflow-hidden bg-gray-900">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap justify-center">
  
  
    
       <div className='w-full text-center mb-6'>
        <h1 className="sm:text-4xl text-red-500  font-manrope mb-4"><span className='text-white'>Add Movie Video To </span> {movie.title}</h1>
       </div>
        <div>


        <form action="" className="flex flex-col gap-4" onSubmit={handleCreate}>

        <FileButton name={"video"} onChange={(e) => setVideo(e.target.files[0])}/>

            <button className="flex justify-center inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Add Movie</button>
        </form>

        </div>
            
     
      </div>
    </div>
    </section>

  )
}
