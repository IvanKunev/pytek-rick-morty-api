import React from 'react'
import Gender from './FilterCategories/Gender'
import Species from './FilterCategories/Species'
import Status from './FilterCategories/Status'
import './Filters.css'
import { Accordion } from 'react-bootstrap'

function Filters({ setSpecies, setStatus, setPage, setGender }) {
    const clearFilter = () => {
      setSpecies('')
      setStatus('')
      setPage('')
      setGender('')
      window.location.reload(false)
    }

  return (
    <div className='col-2'>
      <div className='title-filters'>Filters</div>
      <button onClick={clearFilter} className='clear-filters'>Clear</button>

      <Accordion className='main-acc' defaultActiveKey="0">
        <Species setSpecies={setSpecies} setPage={setPage}/>
        <Status setStatus={setStatus} setPage={setPage}/>
        <Gender setGender={setGender} setPage={setPage}/>
      </Accordion>
    </div>
  )
}

export default Filters