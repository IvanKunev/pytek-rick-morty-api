import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Filters from './components/Filters/Filters'
import CharacterCard from './components/CharacterCard/CharacterCard'

function App() {
  const [page, setPage] = useState('1')
  const [characterData, setCharacterData] = useState([])
  const { info , results} = characterData

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`
  
  useEffect(() => {
    (async function() {
      const data = await fetch(api)
      .then(res => res.json())
      setCharacterData(data)
    })()
  },[api])

  return (
    <div className='App'>
      <h1 className='text-center'>The Rick and Morty API</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-2'><Filters/></div>
          <div className='col-10'>
            <div className='row card-section'>
            <CharacterCard results={results}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
