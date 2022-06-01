import React from 'react'
import './FilterButton.css'

function FilterButton({ item, task, setPage, index, value }) {
  
  return ( 
    // <div className="form-check">
    //   <input 
    //   className="form-check-input" 
    //   onClick={() => {
    //     setPage(1);
    //     task(item);
    //   }} 
    //   type="checkbox" 
    //   value={value} 
    //   id={`${value}-${index}`} 
    //   defaultChecked={false}
    //   />
    //   <label className="form-check-label" htmlFor={`${value}-${index}`}>
    //     {item}
    //   </label>
    // </div>
    <div className="form-check">
      <input onClick={() => {
            setPage(1)
            task(item)
            console.log(11)
          }} className="form-check-input" type="radio" name={value} id={`${value}-${index}`} />
        <label className="form-check-label" htmlFor={`${value}-${index}`}>
          {item}
        </label>
    </div>
  )
}

export default FilterButton