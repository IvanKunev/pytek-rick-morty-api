import React from 'react'
import FilterButton from '../../common/FilterButton'
import { Accordion } from 'react-bootstrap'
import './Categories.css'

function Gender({ setGender, setPage }) {
  const gender = ['Female', 'Male', 'Genderless', 'unknown']

  return (
  <Accordion.Item eventKey="2">
    <Accordion.Header className='acc-header'>Gender</Accordion.Header>
    <Accordion.Body>
    {gender.map((item, index) => (
      <FilterButton task={setGender} setPage={setPage} key={index} value='gender' index={index} item={item}/>
        ))}
    </Accordion.Body>
  </Accordion.Item>
  )
}

export default Gender