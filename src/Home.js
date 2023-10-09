import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContex';

const Home = () => {
  const {searchresults}= useContext(DataContext);
  console.log('home',searchresults);
  return (
    <main className='Home'>
        { searchresults.length ? (
            <Feed posts={searchresults}/>
        ) : (<p>No Tasks to Display!!!</p>)
        }
    </main>
  )
}

export default Home