import React from 'react'

function Homeloder() {
  return (
   <>
   
   <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(245, 245, 245, 0.5)",
        flexDirection: "column",
        marginTop:"100px"
      }}
    >
      <div className="spinner-border text-primary" role="status" style={{ width: "4rem", height: "4rem" }}>
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-3 fs-5 text-muted">Loading, please wait...</p>
    </div>
   </>
  )
}

export default Homeloder