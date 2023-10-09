import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
      <div className='task-sections'>
      <div className='task-container'>
        <p><b>To Do List</b></p>
         {posts.map(post =>(
            <div >
                    {post.status=='ToDo' &&
                     <Post key={post.id} post={post}/>
                     }
                     
            </div>
         ))};
         </div>
         <div className='task-container'>
         <p><b>In Progress</b></p>
         {posts.map(post =>(
            <div >                   
                     {post.status=='InProgress' &&
                     <Post key={post.id} post={post}/>
                    }
                    
            </div>
         ))};
         </div>
         <div className='task-container'>
         <p><b>Done</b></p>
         {posts.map(post =>(
            <div >                  
                    {post.status=='Done' &&
                    <Post key={post.id} post={post}/>
                  }
            </div>
         ))};
         </div>

    </div>
    </>
  )
}

export default Feed