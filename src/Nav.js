import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContex'

const Nav = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <nav className='nav-container'>
       <form className="searchform" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='searchpost'>Search Posts</label>
            <input type="text"
            name="searchpost"
            placeholder="Search Posts!!"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />  
       </form>
       <ul className='topNavigation'>
         
       <li className='topNavigationList'><Link to="/">Home</Link></li>
       <li className='topNavigationList'><Link to="post">Add Tasks</Link></li>
       <li className='topNavigationList'><Link to="about">About Us</Link></li>

        </ul>
    </nav>
  )
}

export default Nav