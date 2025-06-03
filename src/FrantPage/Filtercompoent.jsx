
import React from "react"
import "./Filter.css"

function Filtercompoent({ onFilterChange ,propssubcategary}){

  return (
    <div className='myoption' >
      <select
      
        style={{ padding: "5px", border: "2px solid #3492a0", color:"#3492a0", borderRadius: "3px", width: "150px",cursor:"pointer" }}
        onChange={(e) => onFilterChange(e.target.value)}
       
      >
      
       <option   value="" disabled selected hidden >Filter</option>
        <option    value="all">All</option>
        {propssubcategary?.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
     
      </select>
    </div>
  )
}

export default Filtercompoent
