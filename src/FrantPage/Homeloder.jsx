import React from 'react'
import { HashLoader } from "react-spinners"

function Homeloder() {
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(245, 245, 245, 0.5)",
        flexDirection: "column",
        marginTop: "100px"
      }}
    >
    
      <HashLoader
        size={70}
        color="#36d7b7"
        loading={true}
        speedMultiplier={1.5}
      />
      <p className="mt-3 fs-5 text-muted">Loading, please wait...</p>
    </div>
  )
}

export default Homeloder
