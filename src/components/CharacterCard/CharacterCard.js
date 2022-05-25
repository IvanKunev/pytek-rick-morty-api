import React from 'react'
import './CharacterCard.css'

function CharacterCard({ results }) {
    let show

    if (results) {
        show = results.map(item => {
            const { id, name, image } = item
        return ( 
            <div key={id} className='col-5'>
                <article className='main-container'>
                    <div className='img-wrapper'>
                        <img src={image} alt='' className='img-fluid' />
                    </div>
                    
                    <div className='content'>
                        <div className='section'>
                            <span className='name'>{name}</span>
                            <span>alive</span>
                        </div>
                        <div className='section'>
                            <span className='text'>Last known location:</span>
                            <span>Place</span>
                        </div>
                        <div className='section'>
                            <span className='text'>First seen in:</span>
                            <span>Place</span>
                        </div>
                    </div>
                </article>
            </div>
        )})
    } else {
        show = 'No Characters Found!'
    }
  return <>{show}</>
}

export default CharacterCard