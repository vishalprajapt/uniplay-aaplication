
import React from 'react'

function Fullscreen({videotitle}) {
  return (
   <>
   
    <div style={{
    position: "fixed",
   bottom:"200px",
  left:"30px",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    zIndex: 9999,
    fontSize: "16px"
  }}>
    <p style={{ margin: 0 }}> This is your fullscreen overlay</p>
    <p style={{ margin: 0 }}>Video Title: {videotitle}</p>
  </div>
   </>
  )
}

export default Fullscreen