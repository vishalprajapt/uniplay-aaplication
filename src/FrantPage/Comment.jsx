import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { commentdata } from '../Redux/Action';
import { FaStar } from "react-icons/fa6";
import Model from './Model';
import "./Term.css";
import "./Comment.css"

function CommentBox({sendid}) {
 const [inputdata, setinputdata]=useState("")
 const Dispatch=useDispatch()
     const [rating, setRating] = useState(0);
     const [alertMessage, setAlertMessage]=useState("")
     const [alertType ,setAlertType]=useState("");
       const [showModel, setShowModel] = useState(false);
         const [hoverRating, setHoverRating] = useState(0);
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
  <form onSubmit={handleform} className="review-form">
    <input
      type="text"
      placeholder="Leave a review..."
      value={inputdata}
      className="review-input"
      onChange={(e) => setinputdata(e.target.value)}
    />
    <button type="submit" className="review-button">
      Review
    </button>
  </form>

  <div style={{ marginTop: "10px" }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        onClick={() => setRating(star)}
        onMouseEnter={() => setHoverRating(star)}
        onMouseLeave={() => setHoverRating(0)}
        className="mystar"
        style={{
          fontSize: "24px",
          color: star <= (hoverRating || rating) ? "gold" : "gray",
          cursor: "pointer",
        }}
      >
        <FaStar />
      </span>
    ))}
  </div>
</div>

    </>
  )
}

export default CommentBox