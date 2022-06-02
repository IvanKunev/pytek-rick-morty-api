import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


function NavBar() {

  return (
      <div>
    <ul className='nav-list'>
        <NavLink className='nav-item' to='/' activeClassName='active'>Characters</NavLink>
        <NavLink className='nav-item' to='/location' activeClassName='active'>Location</NavLink>
        <NavLink className='nav-item' to='/episodes' activeClassName='active'>Episodes</NavLink>
        
    </ul>
    <h1 className='Title'>The Rick and Morty API</h1>
    </div>
  )
}

export default NavBar