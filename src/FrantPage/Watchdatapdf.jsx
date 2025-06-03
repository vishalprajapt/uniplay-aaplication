
import React from 'react'
import { useSelector } from 'react-redux'
// import PdfViewer from './PdfViewer';

function Watchdatapdf() {
      const purchasedMagazines=useSelector(state=>state.AddBuyall.Pdfreducer)

      console.log("purchasedMagazines",purchasedMagazines)
  return (
    <>
    <iframe src={purchasedMagazines.pdfdata} 
    
          width="100%"
      height="600px"
      style={{ border: 'none' }}
      title="PDF Viewer"

    ></iframe>
    </>
  )
}

export default Watchdatapdf