import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContex';

const PostPage = () => {
  const { posts, handledelete }=useContext(DataContext);
  const {id}= useParams();
  console.log("Post Page",posts);
  const post = posts.find(post => (post.id).toString()=== id);
  return (
    <main className='postPage'>
      <article className='post'>
        {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postDateTime'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <Link to={`/editpost/${post.id}`}>
              <button> Edit Post</button>
              </Link>
              <button onClick={() => 
                handledelete(post.id)}>
                  Delete Post
              </button>
            </>
        }
        {!post &&
          <>
            <h2>Post Not Found!!!</h2>
            <p>Well that's Disappointing</p>
          </>

        }

      </article>
    </main>
  )
}

export default PostPage