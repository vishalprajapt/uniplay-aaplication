
import React,{useState} from 'react'

function practice() {
  
    const data=[
        {
            id:1,
            name:"Vishal",
            age:20
        },
        {
            id:2,
            name:"Robin",
            age:20
        },
        {
            id:1,
            name:"Vivek",
            age:20
        }
    ]

  return (
    <>

    {data.length>0 &&
    
    <div>
        {data.map((item)=>{
            return(
                <>
                <div>
                    <h1>id={item.id}</h1>
                    <h2>Name={item.name}</h2>
                    <h2>Age={item.age}</h2>
                </div>

                </>
            )
        })}
    </div>

    }
    
    </>
  )
}

export default practice