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
        
                    setComments(res.data.comments);
                }
        
        
            }catch(err){
        
                console.log(err)

            }

        }

        getComments(movieId)

    },[movieId])


    if(comments.length === 0){

        return <p className='text-white text-1xl text-center '>no comments found for this movie !</p>
    }

  return (

<>
        {
            comments?.map((comment)=> (

                <div key={comment._id} className="max-w-lg mx-auto border px-6 py-4 rounded-lg mb-6">
                <div className="flex items-center mb-6 ">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <div className="text-lg font-medium text-gray-200">{comment.user.name}</div>
                        <div className="text-gray-400 text-sm">{new Date(comment.createdAt).toDateString() }</div>
                    </div>
                </div>

                <p className="text-lg text-gray-200 leading-relaxed mb-6">{comment.content}</p>

                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-comment-alt"></i> Reply</a>
                    </div>
                </div>
            </div>

            ))
        }

</>
    
  )
}
