import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'


export default function Comments() {
  

      const [comments,setComments]=useState([]);
      const [title,setTitle]=useState('All Comments');
     
      const search = useLocation().search;
      const postId = new URLSearchParams(search).get('postId');
      


useEffect(() => {
   
   if(postId)
    {
    axios.get("https://jsonplaceholder.typicode.com/comments?postId="+postId)
    .then(response=>{
        setComments(response.data);
    });
    }
    else{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response=>{
            setComments(response.data);
        });
    }
})


  
  
    return (
        <div className="container">
                <h2>{title}</h2>

              
                <table class="table table-hover table-striped">
                         <thead>
                           <tr>
                           <th>Post Id</th>
                           <th>Comment Id</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Body</th>
                           
                           
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                          {
  comments.map(c=>{

        return <tr  key={c.id}>  
                <td>{c.postId}</td>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.body}</td>
                </tr>

            })
              }

             </tbody>
               </table>
      

                
            </div>
        )


}



