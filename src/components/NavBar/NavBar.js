import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


function NavBar() {

  return (
      <div>
    <ul className='nav-list'>
        <NavLink className='nav-item' to='/' activeclassname='active'>Characters</NavLink>
        <NavLink className='nav-item' to='/location' activeclassname='active'>Location</NavLink>
        <NavLink className='nav-item' to='/episodes' activeclassname='active'>Episodes</NavLink>
        
    </ul>
    <h1 className='Title'>The Rick and Morty API</h1>
    </div>
  )
}

export default NavBar