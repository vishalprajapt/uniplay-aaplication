
import React, { useState,useEffect } from 'react'
import  {useNavigate,Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import './Watchloder.jsx';
import ReactPlayer from 'react-player';
import VideoPlayer from './FrantPage/Videoplayer';
// import { HiArrowLongLeft } from "react-icons/hi2";
import CommentBox from './FrantPage/Comment';
import Watchloder from './Watchloder.jsx';
import Model from './FrantPage/Model.jsx';


function Watch() {
  const Watchvalue=useSelector(state=>state.Add.user)
  const Videodata=useSelector(state=>state.VideoValue.YouTubedata)
  const navigate=useNavigate();
  const [loder, setloder]=useState(true);
    const [alertmassage, setalertmassage]=useState('')
      const [alertType, setalertType]=useState('')
      const [showpop, setshowpop]=useState(false)
  //const embedLink = Videodata.link?.replace("watch?v=", "embed/");

  console.log("Videodata",Videodata.id);
   const pathnamelocal=localStorage.getItem("pathname")



    useEffect(() => {
       if (showpop) {
         const timer = setTimeout(() => {
           setshowpop(false);
         }, 1500);
   
         return () => clearTimeout(timer); // cleanup
       }
     }, [showpop]);
   
   useEffect(()=>{
      setTimeout(() => {
        setloder(false);
      }, 2000);
     },[])

      const Handlefullscreen=()=>{

        console.log("called datassssssssss");
        setTimeout(() => {
          
    setshowpop(true)
        setalertType("success")
        setalertmassage(Videodata.titele)
          
        }, 100);
        
  }

  return (
   <>
   {showpop && <Model  data={alertmassage}  type={alertType}/>}
  
    
   {loder ?
   (
  
    < Watchloder/>
   ):
   (                                                                           
<>
   
 <div className='container' style={{marginTop:"80px"}} >
  <div style={{margin:"15px 0px"}}>
  <button  className='btn ' style={{zIndex:"1000px",fontSize:"20px",border:"none", outline:"none"}}  onClick={()=>navigate(-1)}><i className="fa-solid fa-left-long"></i></button>
 </div>    
 
  <VideoPlayer videoUrl={Videodata.link} posterurl={Videodata.pic} Handlefullscreen={Handlefullscreen}  videoid={Videodata.id} videotitle={Videodata.titele} />

    
      
    
  
</div>
</>
   )
  }

   
   
    
   
   </>
  )
}

export default Watch