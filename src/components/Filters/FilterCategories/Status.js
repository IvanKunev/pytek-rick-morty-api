import React from 'react'
import FilterButton from '../../common/FilterButton'
import { Accordion } from 'react-bootstrap'
import './Categories.css'

function Status({ setPage, setStatus }) {
  const status = ['Alive', 'Dead', 'Unknown']

  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Status</Accordion.Header>
      <Accordion.Body>
      {status.map((item, index) => (
        <FilterButton setPage={setPage} task={setStatus} key={index} value='status' index={index} item={item} />
          ))}
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default Status