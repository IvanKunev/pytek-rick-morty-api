import React from 'react'
import './SearchBar.css'

function SearchBar({ setSearch, setPage }) { 
  return (
    <form className='form-search '>
      <input onChange={(search) => {
         setPage(1)
         setSearch(search.target.value)}} 
         type='text'
         placeholder='Search Characters' 
         className='input-search' 
         />
      <button onClick={(click) => {click.preventDefault()}} className='btn-search'>Search</button>
    </form>
  )
}

export default SearchBar
