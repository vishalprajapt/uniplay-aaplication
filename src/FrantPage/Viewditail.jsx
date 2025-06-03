import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { YouTubeVideo,datapdf } from '../Redux/Action';
import { FaLongArrowAltLeft } from "react-icons/fa";

function Viewditail() {
  const navigate = useNavigate();
  const ViewSelector = useSelector(state => state.ViewCheck.viewcontent);
  const Dispatch = useDispatch();
  const pathnamelocal = localStorage.getItem("pathname");

  const handelwatchdata = (item) => {
    Dispatch(YouTubeVideo(item));
    navigate("/Watch");
  };

   const handalepdfdata=(item)=>{
      Dispatch(datapdf(item)) 
      navigate("/watch-datapdf")
    }
  

  return (
    <>
      <div className="container mt-3">
        <button
          className='btn mb-3'
          style={{ fontSize: "20px", outline: "none", border: "none" }}
          onClick={() => navigate(pathnamelocal)}
        >
          <FaLongArrowAltLeft />
        </button>

        {Array.isArray(ViewSelector) && ViewSelector.length > 0 ? (
          ViewSelector.map((item, index) => (
            <div
              key={index}
              className="row shadow-sm mb-4 bg-white rounded align-items-center p-4"
              style={{ border: "1px solid #e0e0e0", maxWidth: "900px", margin: "0 auto" }}
            >
              {/* Left: Text Content */}
              {item.status==="online" ? 
              <div className="col-md-8">
                <h4 className="text-primary mb-3">{item.category}</h4>
                <p><strong>Description:</strong> {item.text}</p>
                <p className="fw-semibold mb-2">{item.titele}</p>
                <button
                  className="btn"
                  style={{ background: "#0a8d94", color: "white" }}
                  onClick={() => handalepdfdata(item)}
                >
                  View
                </button>
              </div>:
              <div className="col-md-8">
                <h4 className="text-primary mb-3">{item.category}</h4>
                <p><strong>Description:</strong> {item.text}</p>
                <p className="fw-semibold mb-2">{item.titele}</p>
                <button
                  className="btn"
                  style={{ background: "#0a8d94", color: "white" }}
                  onClick={() => handelwatchdata(item)}
                >
                  watch
                </button>
              </div>
}

              {/* Right: Image */}
              <div className="col-md-4 text-center">
                <img
                  src={item.pic}
                  alt={item.titele}
                  style={{
                    width: "100%",
                    maxWidth: "180px",
                    height: "180px",
                    objectFit: "contain",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    padding: "10px",
                    background: "#f9f9f9"
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted mt-5 fs-5">
            No data found.
          </div>
        )}
      </div>
    </>
  );
}

export default Viewditail;
