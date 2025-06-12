
import React, { useEffect, useRef ,useState} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import CommentBox from "./Comment";
import { FaRegCommentAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { Bookmart , Bookid, bookmarkiddelete} from "../Redux/Action";
import { IoClose } from "react-icons/io5";
import { BiPlay } from "react-icons/bi";
import { CgPlayPause } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import "./Videoplayer.css"


{/*  */}
{/* <CgPlayPause /> */}



const VideoPlayer = ({ videoUrl, posterurl,videoid,videotitle}) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const Selector=useSelector(state=>state.AddBuyall.Commentcart)
    const Bookmartlist=useSelector(state=>state.AddBuyall.Bookmartcart)
    const Bookmartlistid=useSelector(state=>state.AddBuyall.Bookidcart)
    console.log("Bookmartlist",Bookmartlist)
  const Dispatch=useDispatch()
  
console.log("Selector",Selector);

  useEffect(() => {
    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        controlBar: {
  playToggle: true,
  currentTimeDisplay: true,
  timeDivider: true,
  durationDisplay: true,
  remainingTimeDisplay: true,
  progressControl: true,
  volumePanel: {
    inline: true
  },
  fullscreenToggle: true,
},
        fluid: true,
     
        muted:true,
        autoplay: true,
           playbackRates: [0.5, 1, 1.5, 2, 2.5,3,3.5,5,6],
           poster: `${posterurl}`,
        sources: [
          {
            src: videoUrl,
            type: "video/youtube", 
             label: "720p",
             res: 720 
          },
        ],
       

      });
    } else {
     
      playerRef.current.src({ src: videoUrl, type: "video/youtube" });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoUrl]);

  
  
  
  const seekBy = (seconds) => {
    if (playerRef.current) {
      let currentTime = playerRef.current.currentTime();
      let duration = playerRef.current.duration();
      let newTime = currentTime + seconds;

      if (newTime < 0) newTime = 0;
      if (newTime > duration) newTime = duration;

      playerRef.current.currentTime(newTime);
    }      
    }; 

    
    
  const handleLeftDoubleClick = () => {
    seekBy(-10); 
  };

  const handleRightDoubleClick = () => {
    seekBy(10); 
  };
 

  const [showBookmart, setshowBookmart]=useState(false)
  const [bookmarkNote, setbookmarkNote]=useState('')

      const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hrs = Math.floor(minutes / 60);
  const secs = Math.floor(seconds % 60);
  const mins = Math.floor(minutes % 60);

  const padded = (num) => String(num).padStart(2, '0');
  return hrs > 0 ? `${padded(hrs)}:${padded(mins)}:${padded(secs)}` : `${padded(mins)}:${padded(secs)}`;
};

    const HandleSubmit=(e)=>{
      e.preventDefault(e)
          const currentTimedata = formatTime(playerRef.current.currentTime());
         console.log("currentTimedata",currentTimedata)
         Dispatch(Bookmart({Time:currentTimedata, note:bookmarkNote, id:videoid}))
          setshowBookmart(!showBookmart)
          setbookmarkNote('')
           playerRef.current.play()
          // Dispatch(Bookid(Bookmartlist.length));
    }


    const convertTimeToSeconds = (timeString) => {
  const parts = timeString.split(":").map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else {
    return 0;
  }
};

    const replacetimedata=(item)=>{

      const second=convertTimeToSeconds(item)

      console.log("data called",item);
      
       playerRef.current.currentTime(second);
  
     
      
    }

    const [playchange, setplaychange]=useState(false);
    const [Bookmarktime, setbookmarktime]=useState('')

    const Handleremovedata=(item)=>{
      Dispatch(bookmarkiddelete(item))
    }



  

  return (
<>
<div style={{
  display: "flex",

  gap: "20px",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: "20px"
}}>
  {/* Video Player Section */}
  <div style={{
    position: "relative",
    maxWidth: "800px",
    width: "100%",
  
  }}>
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        playsInline
      />
    </div>
  </div>

  {/* Bookmark Panel */}
 <div className="Mybookpannel">
  <div className="Mybookscrollbox">
    <h3  className="Titlebookmart">Bookmarks</h3>

    {Bookmartlist?.filter(item => item.id === videoid).length > 0 ? (
      Bookmartlist.filter(item => item.id === videoid).map((item, index) => (
       <div key={index} className="bookmark-card">
  <div
    className="bookmark-item-text"
    onClick={() => {
      replacetimedata(item.Time);
      Dispatch(Bookid(index));
    }}
  >
    <p>{item.Time}</p>
    <span>{item.note}</span>
  </div>

  <div
    onClick={() => Handleremovedata(index)}
    style={{
      marginLeft: "10px",
      color: "#d9534f",
      cursor: "pointer",
      fontSize: "18px"
    }}
  >
    <MdDelete />
  </div>
</div>

      ))
    ) : (
      <p  className="mYnoYet">No bookmarks yet</p>
    )}
  </div>

  <button
    onClick={() => {
      if (playerRef.current) {
        playerRef.current.pause();
        setbookmarktime(formatTime(playerRef.current.currentTime()));
      }
      setshowBookmart(true);
    }}
    className="Mybookpannelbutton"
  >
    + Add Bookmark
  </button>
</div>

</div>

 <p style={{fontSize:"20px",marginTop:"10px",marginLeft:"10px"}}>{videotitle}</p>
 <CommentBox  sendid={videoid}/>
     {Selector.filter(item => item.videoId === videoid).length > 0 ? (
  <>
    <h3>Comments:</h3>
    {Selector.filter(item => item.videoId === videoid).map((item, index) => (
      <div key={index} style={{ alignItems: "center", gap: "10px" }}>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} style={{ color: star <= item.rating ? "gold" : "lightgray" }}>
              <FaStar />
            </span>
          ))}
        </div>
        <p><FaRegCommentAlt /> {item.comment}</p>
      </div>
    ))}
  </>
) : (
  <div style={{ marginTop: "20px" }}>
    <h3>Comments:</h3>
    <p>No comments yet.</p>
  </div>
)}

{showBookmart && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  }}>
    <div style={{
      backgroundColor: "#fff",
      padding: "25px 20px 20px",
      borderRadius: "12px",
      width: "90%",
      maxWidth: "420px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      position: "relative",
      fontFamily: "sans-serif",
      animation: "fadeIn 0.3s ease"
    }}>

      {/* Close button */}
      <span
        onClick={() => {
          setshowBookmart(false);
          if (playerRef.current) {
            playerRef.current.play(); // Resume video playback
          }
        }}
        style={{
          position: "absolute",
          top: "12px",
          right: "16px",
          fontSize: "22px",
          color: "#666",
          cursor: "pointer",
          transition: "color 0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.color = "#000"}
        onMouseOut={(e) => e.currentTarget.style.color = "#666"}
      >
        <IoClose />
      </span>

      {/* Modal content */}
      <h3 style={{ marginBottom: "8px", color: "#333" }}>Add Bookmark</h3>
      <p style={{ marginBottom: "15px", fontSize: "14px", color: "#777" }}>Bookmark at <strong>{Bookmarktime}</strong></p>

      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Enter bookmark note..."
          value={bookmarkNote}
          onChange={(e) => setbookmarkNote(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            marginBottom: "18px",
            outline: "none"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#3492a0",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#2c7b8c"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#3492a0"}
        >
          Save Bookmark
        </button>
      </form>
    </div>
  </div>
)}



     
     </>
  );
};

export default VideoPlayer;
