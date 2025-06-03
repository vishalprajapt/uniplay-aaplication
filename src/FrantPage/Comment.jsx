import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { commentdata } from '../Redux/Action';
import { FaStar } from "react-icons/fa6";
import Model from './Model';

function CommentBox({sendid}) {
 const [inputdata, setinputdata]=useState("")
 const Dispatch=useDispatch()
     const [rating, setRating] = useState(0);
     const [alertMessage, setAlertMessage]=useState("")
     const [alertType ,setAlertType]=useState("");
       const [showModel, setShowModel] = useState(false);
console.log("sendid",sendid);
console.log("inputdata",inputdata);
console.log("rating",rating);



 const handleform=(e)=>{
    e.preventDefault();
    if(inputdata.length<1){
       setAlertMessage("Please, Enter a review")
       setAlertType("error")
       setShowModel(true)
    }
    else if(!rating){
        setAlertMessage("Please, select a rating")
       setAlertType("error")
         setShowModel(true)
    }
    else{
        Dispatch(commentdata(sendid,inputdata ,rating))
        setRating("")
        setinputdata("")
    }
    // console.log("inputdata",inputdata.length);
  
 }


 

setTimeout(() => {
    
    setShowModel(false)
}, 1200);



  
  return (
   <>
   
  { showModel && <Model   data={alertMessage} type={alertType} />}
   <div>
    <div>
        <form action="" onSubmit={handleform}>
        <input type="text" placeholder='leave a review...'  value={inputdata} style={{height:"40px",width:"50%",padding:"10px",fontSize:"20px"}} onChange={(e)=>{setinputdata(e.target.value)}}/>
            <button  className='btn ' style={{height:"40px",background:"#3492a0",color:"white",marginLeft:"20px"}} >Review</button>
    </form>
     <div style={{ marginTop: "10px" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                fontSize: "24px",
                color: star <= rating ? "gold" : "gray",
                cursor: "pointer"
              }}      
            >
            <FaStar />
            </span>
          ))}
        </div>
    </div>
    
    </div>
    </>
  )
}

export default CommentBox