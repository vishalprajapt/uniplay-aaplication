
import React, { useEffect, useRef ,useState} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import CommentBox from "./Comment";
import { FaRegCommentAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";


const VideoPlayer = ({ videoUrl, posterurl,videoid,videotitle}) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const Selector=useSelector(state=>state.AddBuyall.Commentcart)
  
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
  //  const [comments, setComments] = useState([]);

  // const handleCommentSubmit = (newComment) => {
  //   setComments((prev) => [...prev, newComment]);
  // };

  return (
<>
    
      <div style={{ position: "relative", width: "100%"}}>
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 150,
             background:"transparent",
          width: "200px",
          height: "50%",
          zIndex: 10,
          cursor: "pointer",
        }}
        onDoubleClick={handleLeftDoubleClick}
      ></div>

      <div
        style={{
          position: "absolute",
         background:"transparent",
          top: 100,
          right: 150,
          width: "200px",
          height: "50%",
          zIndex: 10,
          cursor: "pointer",
        }}
        onDoubleClick={handleRightDoubleClick}
      ></div>

      <div data-vjs-player >
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered"
          playsInline
        />
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

     
     </>
  );
};

export default VideoPlayer;
