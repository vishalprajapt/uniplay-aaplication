import { useState,  useEffect } from 'react'
import Draggable from 'react-draggable'

function Fullscreen({videotitle}){
   const  [showpop, setshowpop]=useState(false)

     const  Handlefullscreen=()=>{
        setshowpop(true)                    
     } 

   useEffect(() => {
    if (showpop) {
      const timer = setTimeout(() => {
        setshowpop(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showpop]);


  return (
   <>
   {showpop &&  
    <div
        style={{
          position: 'absolute',
          top: '60px',
          right: showpop ? '30px' : '-300px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '15px 25px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          transition: 'right 0.5s ease-in-out',
          zIndex: 10000,
          fontWeight: 'bold',
          fontSize: '16px',
        }}>
        {videotitle}
      </div>
   }
   
    <Draggable>

      <div style={{
     position: 'absolute',
     bottom:"80px",
     left:"30px",
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          zIndex: 9999,
          fontSize: '16px',
          cursor: 'grab',
  }}
  onClick={Handlefullscreen}
  >
    <p style={{margin:0}}> This is your fullscreen overlay</p>
    <p style={{margin: 0 }}>Video Title: {videotitle}</p>
  </div>
    </Draggable>
   </>
  )
}

export default Fullscreen