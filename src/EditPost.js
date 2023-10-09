import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContex';

const EditPost = () => {
    const {posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody,editStatus,setEditStatus}=useContext(DataContext)    
    const{id} = useParams();
    const post = posts.find((post)=> (post.id).toString() === id);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
            setEditStatus(post.status)
        }
    },[post,setEditBody,setEditTitle]
    )

  return (
    <main>
        <h2>Edit Post</h2>
        <form id="editpost" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='postname'>Title: </label>
            <input
                type="text"
                required
                value={editTitle}
                onChange={(e)=>setEditTitle(e.target.value)}
                id="editTitle"
            /><br/><br/>
            <label htmlFor='postBody'>Post: </label>
            <textarea
                id="editBody"
                required
                value={editBody}
                onChange={(e)=>setEditBody(e.target.value)}
            /><br/><br/>
            <label htmlFor='editStatus'>Status: </label>
                <input 
                type="text" 
                required 
                value={editStatus}
                id="postStatus" 
                onChange={(e)=>setEditStatus(e.target.value)}
                /><br/><br/>
            <button
            type='submit' className='buttonPostSubmit'
            onClick={()=>handleEdit(post.id)}
            >Submit</button>
        </form>

    </main>
  )
}

export default EditPost