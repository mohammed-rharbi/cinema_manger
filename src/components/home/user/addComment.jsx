import React, { useState } from 'react'
import AxiosInstance from '../../../services/axios';
import { toast } from 'react-toastify';


export default function AddComment({movieId}) {

    const [comment , setComment] = useState('');

    const userId = localStorage.getItem('userId');


    const addComment = async (data)=>{


        try{

            console.log(data);
            

            const res = await AxiosInstance.post('/comments/addComment' , data , {

                
            });

            
            if(res.status === 200){

                console.log('comment was added')
                toast.success('comment was added')
                setComment('')
            }

        }catch(err){

            console.log(err)
        }
    }


    const handleComment = async (e)=>{

        e.preventDefault();
        
        if(!comment){

            console.log('please add comment');
        }

        addComment({userId , movieId , content: comment});

    }


  return (


    <form  onSubmit={handleComment} className="max-w-2xl bg-gray-800 rounded-lg border p-2 mx-auto mt-20 mb-6">
    <div className="px-3 mb-2 mt-2">
        <textarea
         value={comment}
         onChange={(e)=> setComment(e.target.value) }
         placeholder="comment..." name='content' className="w-full text-white bg-gray-500 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-gray-500"></textarea>
    </div>
    <div className="flex justify-end px-4">
        
        <button type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Comment">Add comment</button>
    </div>
</form>
  )
}
