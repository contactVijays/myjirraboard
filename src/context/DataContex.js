import { createContext,useState,useEffect } from "react";
import api from "../api/posts"
import { useNavigate } from 'react-router-dom';

import { format } from 'date-fns';

const DataContext = createContext({});

export const DataProvider =({children})=>{

  const [posts,setPosts]= useState([])
  const [search,setSearch] = useState('');
  const [searchresults,setSearchResults]= useState([]);
  const [postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody] = useState('');
  const [postStatus,setPostStatus] = useState('');  
  const [editTitle,setEditTitle]=useState('');
  const [editBody,setEditBody] = useState('');
  const [editStatus,setEditStatus] = useState('');
  const navigate = useNavigate();
  
  
  useEffect(()=>{
    const fetchPosts = async ()=>{
      try{
        const response = await api.get('/posts');
        setPosts(response.data);
      }catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else{
          console.log(`Error:${err.message}`);
        }
      }      
     
    }
    fetchPosts();
  },[])
  useEffect(()=>{
    const filteredResults= posts.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase()) 
    || ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  },[posts,search]);

  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log('submitted');
      const id = posts.length ? posts[posts.length - 1].id + 1 :1;
      const datetime= format(new Date(),'MMMM dd, yyyy pp');
      const newPost = {id,title:postTitle,date: datetime,body: postBody,status: postStatus};
    try {
      const response = await api.post('/posts',newPost)
      //const allpost =[...posts, newPost];
      const allpost =[...posts,response.data];
      setPosts(allpost);
      setPostTitle('');
      setPostBody('');
      setPostStatus('');
      navigate('/');      
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
      
  }
  const handledelete= async(id)=>{
    ///e.preventDefault();
    try {
      console.log("handledelete",id);
      await api.delete(`posts/${id}`);
      const postList= posts.filter( post => post.id !== id);
      setSearchResults(postList);
      navigate('/');
    } catch (err) {
      console.log(`Error:${err.message}`);
    }
    
  }
  const handleEdit = async(id)=>{
    const datetime= format(new Date(),'MMMM dd, yyyy pp');
    const updatedPost = {id,title:editTitle,date: datetime,body: editBody,status: editStatus};
    try {
       const response = await api.put(`/posts/${id}`,updatedPost);
        setPosts(posts.map(post=> post.id===id ?{...response.data}: post));
        setEditTitle('');
        setEditBody('');
        setEditStatus('');
        navigate('/');   
    } catch (err) {
      console.log(`Error:${err.message}`);
    }

  }

    return (
        <DataContext.Provider value={{

            search,setSearch,
            searchresults,
            handleSubmit,
            postTitle,
            setPostTitle,
            postBody,
            setPostBody,
            postStatus,
            setPostStatus,
            posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody,editStatus,setEditStatus,
            handledelete
            
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext