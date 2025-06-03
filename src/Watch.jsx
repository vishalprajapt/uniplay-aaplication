
import React, { useState,useEffect } from 'react'
import  {useNavigate,Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import './Watch.css';
import ReactPlayer from 'react-player';
import VideoPlayer from './FrantPage/Videoplayer';
// import { HiArrowLongLeft } from "react-icons/hi2";
import CommentBox from './FrantPage/Comment';


function Watch() {
  const Watchvalue=useSelector(state=>state.Add.user)
  const Videodata=useSelector(state=>state.VideoValue.YouTubedata)
  const navigate=useNavigate();
  const [loder, setloder]=useState(true);
  //const embedLink = Videodata.link?.replace("watch?v=", "embed/");

  console.log("Videodata",Videodata.id);
   const pathnamelocal=localStorage.getItem("pathname")


   useEffect(()=>{
      setTimeout(() => {
        setloder(false);
      }, 1500);
     },[])

  return (
   <>
   <div style={{position:"absolute",top:"70px", left:"10px"}}>

   </div>
    
   {loder ?
   (
    <div className="loader-wrapper">
   <div className="loader-container">
     <div className="circle"></div>
     <div className="circle"></div>
     <div className="circle"></div>
   </div>
 </div> 
   ):
   (
<>
 
<div className='container' style={{marginTop:"80px"}} >
  <div style={{margin:"15px 0px"}}>
  <button  className='btn ' style={{zIndex:"1000px",fontSize:"20px",border:"none", outline:"none"}}  onClick={()=>navigate(-1)}><i className="fa-solid fa-left-long"></i></button>
  </div>

  {/* //posterurl={Videodata.pic} */}
 
  <VideoPlayer videoUrl={Videodata.link} posterurl={Videodata.pic}  videoid={Videodata.id} videotitle={Videodata.titele} />

    
      
    
  
</div>
</>
   )
  }

   
   
    
   
   </>
  )
}

export default Watch