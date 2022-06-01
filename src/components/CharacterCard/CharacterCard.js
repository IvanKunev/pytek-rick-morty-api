import React from 'react'
import './CharacterCard.css'

function CharacterCard({ results }) {
    let show

    if (results) {
        show = results.map(item => {
            const { id, name, image, location, status, species } = item
        return ( 
            <div key={id} className='col-5'>
                <article className='main-container'>
                    <div className='img-wrapper'>
                        <img src={image} alt='' className='img-fluid' />
                    </div>
                    
                    <div className='content'>
                        <div className='section'>
                            <span className='name'>{name}</span>
                            <div>
                            {(() => {
                                if(status === 'Alive') {
                                    return (
                                        <div className='badge bg-success sub-text'>{status}</div>
                                    )
                                } else if(status === 'Dead') {
                                    return (
                                        <div className='badge bg-danger sub-text'>{status}</div>
                                    )
                                } else {
                                    return (
                                        <div className='badge bg-secondary sub-text'>{status}</div>
                                    )
                                }
                            })()}<span className='species'>  -   {species}</span>
                            </div>
                        </div>
                        <div className='section'>
                            <span className='text'>Last known location:</span>
                            <span className='sub-text'>{location.name}</span>
                        </div>
                        <div className='section'>
                            <span className='text'>First seen in:</span>
                            <span className='sub-text'>Place</span>
                        </div>
                    </div>
                </article>
            </div>
        )})
    } else {
        show = <span className='no-char'>There Is No Characters Found!</span>
    }
  return <>{show}</>
}

export default CharacterCard