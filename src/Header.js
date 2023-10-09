import React, { useContext } from 'react'
import DataContext from './context/DataContex'

const Header = ({title}) => {

  const {width} = useContext(DataContext)
  return (
    <div className='header'><h1>{title}</h1>
    </div>
  )
}

export default Header