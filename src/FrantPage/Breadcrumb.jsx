
import React from 'react'
import { Link } from 'react-router-dom'
import './breadcrumb.css'

function Breadcrumb({paths}) {
  return (
   <>
   <nav aria-label="breadcrumb" className='mb-3'>
    <ol className='breadcrumb'>
      {paths.map((item, index)=>{
        return(
            <>
            <li className={`breadcrumb-item ${index === paths.length - 1 ? "active" : ""}`}
         aria-current={index === paths.length - 1 ? "page" : undefined} >
          
          {index === paths.length - 1 ? (
  item.label
) : (
  <Link to={item.link}>{item.label}</Link>
)}

            </li>
            </>
        )
      })}
    </ol>
   </nav>
   
   </>
  )
}

export default Breadcrumb