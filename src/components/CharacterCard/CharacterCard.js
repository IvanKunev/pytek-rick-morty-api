import React from 'react'
import './CharacterCard.css'

function CharacterCard() {
  return (
    <div className='col-5'>
        <article className='main-container'>
            <div>
                <img/>
            </div>
            
            <div>
                <div>
                    <a>name</a>
                    <span>alive</span>
                </div>
                <div>
                    <span>Last known location:</span>
                    <a>Place</a>
                </div>
                <div>
                    <span>First seen in:</span>
                    <a>Place</a>
                </div>
            </div>
        </article>
    </div>
  )
}

export default CharacterCard