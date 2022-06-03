import React from 'react'
import './Dropdown.css'

function Dropdown({ count, setId, pageName }) {
    const Count = [...Array(count).keys()]

  return (
    <div className="input-group mb-3">
        <select className="form-select" id={pageName} onChange={(item) => setId(item.target.value)}>
        <option className='selected' value='1'>Choose...</option>
            {Count.map((item, index) => {
                console.log()
                return (
                    <option key={index} value={item + 1}>{pageName}: {item + 1}</option>
                )
            })}
        </select>
    </div>
  )
}

export default Dropdown