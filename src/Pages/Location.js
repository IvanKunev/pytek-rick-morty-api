
import React, { useState, useEffect } from 'react'
import CharacterCard from '../components/CharacterCard/CharacterCard'
import Dropdown from '../components/common/Dropdown'
import './Episodes.css'

function Location() {
  const [id, setId] = useState(1)
  const [locationData, setLocationData] = useState([])
  const [results, setResults] = useState([])

  const {name, type, dimension} = locationData

  const api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function() {
      const data = await fetch(api)
        .then(res => res.json())
        setLocationData(data)

      const resultsLc = await Promise.all(
        data.residents.map((lc) => {
        return fetch(lc)
          .then(res => res.json())
      }))
    
      setResults(resultsLc)
    })()
  },[api])

  return (
    <div className='container'>
      <div className='row mb-4'>
        <div className='ep'>
          <span className='text'>Location:</span>
          <span className='ep-span'>{name}</span>
        </div>
        <div className='ep'>
          <span className='text'>Dimension:</span>
          <span className='ep-span'>{dimension}</span>
        </div>
        <div className='ep'>
          <span className='text'>Type:</span>
          <span className='ep-span'>{type}</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-2'>
          <span className='episodes'>Location</span>
            <Dropdown pageName='Location' count={126} setId={setId}/>
        </div>
        <div className='col-10'>
          <div className='row'>
              <CharacterCard results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location