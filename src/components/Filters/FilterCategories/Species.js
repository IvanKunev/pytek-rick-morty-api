import React from 'react'
import FilterButton from '../../common/FilterButton'
import { Accordion } from 'react-bootstrap'
import './Categories.css'

function Species({ setPage, setSpecies }) {
  let species = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet']

  return (
  <Accordion.Item eventKey="0">
    <Accordion.Header>Species</Accordion.Header>
    <Accordion.Body>
      {species.map((item, index) => (
        <FilterButton setPage={setPage} task={setSpecies} key={index} value='status' index={index} item={item} />
          ))}
      </Accordion.Body>
  </Accordion.Item>
  )
}

export default Species