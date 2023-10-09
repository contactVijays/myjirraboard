import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Footer from './Footer';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContex';

function App() {
  
  return (
    <div className="App">
      <DataProvider>
     <Header title={'My Jirra Sprint Board'} />
     <Nav />
     <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="post"> 
                <Route index element={<NewPost/>}/>
                  <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path='editpost/:id' element={<EditPost/>} />
            {/* <PostPage/> */}
           <Route path="*" element={ <Missing/>} />
     </Routes>
     <Footer/>
     </DataProvider>
    </div>
  );
}

export default App;
