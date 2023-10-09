import React, { useContext } from 'react'
import DataContext from './context/DataContex'

const NewPost = () => {
  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody,postStatus,setPostStatus}=useContext(DataContext);
  return (
    <main className='NewPost'>
      <form id='newpost' className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title: </label>
        <input 
        type="text" 
        required 
        value={postTitle}
        id="postTitle" 
        onChange={(e)=>setPostTitle(e.target.value)}
        /><br/><br/>
        <label htmlFor='postBody'>Post: </label>
        <textarea 
        id='postBody'
        required
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
        /><br/><br/>
        <label htmlFor='postStatus'>Status: </label>
        <input 
        type="text" 
        required 
        value={postStatus}
        id="postStatus" 
        onChange={(e)=>setPostStatus(e.target.value)}
        /><br/><br/>
        <button
        type='submit' className='buttonPostSubmit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost