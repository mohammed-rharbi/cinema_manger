import React from 'react'
import AxiosInstance from '../../../services/axios'
import { useState , useEffect } from 'react'




export default function Comments({movieId}) {


    const [comments , setComments ] = useState([]);


    useEffect(()=>{

        const getComments = async (id)=>{


            try{

                const res = await AxiosInstance.get(`/comments/getComments/${id}`);
        
                if(res.status === 200){
        
                    // console.log('comments are here',res.data.comments[0]);

                    setComments(res.data.comments);
                }
        
        
            }catch(err){
        
                console.log(err)

            }

        }

        getComments(movieId)

    },[movieId])

  return (




    <div className='bg-gray-500'>

        {
            comments?.map((comment)=> (

                <div className='bg-gray-700 p-12 rounded text-white'>
                    <p>{comment.content}</p>
                </div>
            ))
        }

    </div>

    
  )
}
