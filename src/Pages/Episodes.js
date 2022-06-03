import React, { useState, useEffect } from 'react'
import CharacterCard from '../components/CharacterCard/CharacterCard'
import Dropdown from '../components/common/Dropdown'
import './Episodes.css'

function Episodes() {
  const [id, setId] = useState(1)
  const [episodeData, setEpisodeData] = useState([])
  const [results, setResults] = useState([])

  const {air_date, name, episode} = episodeData

  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function() {
      const data = await fetch(api)
        .then(res => res.json())
        setEpisodeData(data)

      const resultsEp = await Promise.all(
        data.characters.map((ep) => {
        return fetch(ep)
          .then(res => res.json())
      }))
    
      setResults(resultsEp)
    })()
  },[api])

  return (
    <div className='container'>
      <div className='row mb-4'>
        <div className='ep'>
          <span className='text'>Episode Name:</span>
          <span className='ep-span'>{name} , {episode}</span>
        </div>
        <div className='ep'>
          <span className='text'>Release Date:</span>
          <span className='ep-span'>{air_date}</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-2'>
          <span className='episodes'>Episodes</span>
            <Dropdown pageName='Episode' count={51} setId={setId}/>
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

export default Episodes