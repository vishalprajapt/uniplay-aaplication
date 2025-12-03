
import React from 'react'
import { BeatLoader } from 'react-spinners'

function Watchloder() {
  return (
   <>
   <div
   
style={{
    height:'70vh',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "rgba(245, 245, 245, 0.5)",
    flexDirection:'column',
    marginTop:"70px"
}}

   >
    <BeatLoader
    size={30}
    color="#36d7b7"
    loading={true}
     speedMultiplier={1}
    />
   </div>
   
   
   </>
  )
}

export default Watchloder