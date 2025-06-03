import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaLongArrowAltLeft } from "react-icons/fa";
import './Magazine.css'

function Myorder() {
  const purchasedMagazines = useSelector((state) => state.AddBuyall.Ordereducer);
  const navigate=useNavigate()

  console.log("purchasedMagazines",purchasedMagazines);
  
  return (
    <div className="container py-3">
        <button
                  className='btn mb-3'
                  style={{ fontSize: "20px", outline: "none", border: "none" }}
                  onClick={() => navigate(-1)}
                >
                  <FaLongArrowAltLeft />
                </button>
     
      {purchasedMagazines && purchasedMagazines.length > 0 ? (
        
        <div className="row">
             <h2 className="text-center mb-4 fw-bold">📦 My Orders</h2>

          {purchasedMagazines.flat().map((item, index) => (
            <div key={index} className=" col-12 mb-4">
              <div
                className="d-flex border rounded shadow-sm bg-white p-3 h-100 "
                style={{ minHeight: "150px", maxHeight: "300px" }}
              >
                {/* Image */}                            
                <div className="me-3 flex-shrink-0">
                  <img
                    src={item.pic}
                    alt={item.titele}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      border: "1px solid #eee",
                      borderRadius: "5px",
                      padding: "5px",
                      background: "#f9f9f9"
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-grow-1 " style={{ paddingRight: "20px", overflow: 'hidden' }}>
                  <h5 className="mb-1 text-truncate ">{item.titele}</h5>
                  <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                    Category: {item.category}
                  </p>
                  <p className="fw-semibold text-success">₹ {item.price}</p>
                  <span className="badge bg-success text-white">✅ Order Placed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5 fs-4 text-muted">
          You haven't purchased any product yet.
        </div>
      )}
    </div>
  );
}

export default Myorder;
