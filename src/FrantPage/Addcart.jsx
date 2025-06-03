import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate,useLocation } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { Removecartdata, BuycardVideos,buyall } from '../Redux/Action';
import { BiSolidCartAdd } from "react-icons/bi";

function Addcart() {
  const Seleteradd = useSelector(state => state.Addreducer.cartarray);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const locationdata=useLocation();

  const reamoveadddata = (id) => {
    Dispatch(Removecartdata(id));
  };

  const Buycardprice = (item) => {
    Dispatch(BuycardVideos(item));
   
    navigate("/Buypage");
    localStorage.setItem("pathname",locationdata.pathname)

   
  };

  const totalstorageofbuy=Seleteradd.map((item)=>item)
  
  const totalbuycardprice=()=>{
    Dispatch(BuycardVideos(totalstorageofbuy));
   
    navigate("/Buypage");
    localStorage.setItem("pathname",locationdata.pathname)
  }


  console.log("totalstorageofbuy",totalstorageofbuy)

  return (
    <>
      <div>
        <button className='btn' style={{ fontSize: "20px", outline: "none", border: "none" }} onClick={() => navigate("/")}>
          <FaLongArrowAltLeft  />
        </button>
      </div>

      {Seleteradd && Seleteradd.length > 0 ? (
        <div className="container mt-4">
          {Seleteradd.map((item) => (
            <div
              key={item.id}
              className="row align-items-center shadow-sm  mb-4 bg-white rounded "
              style={{ border: "1px solid #e0e0e0" ,paddingRight:"10px"}}
            >
              {/* Image */}
              <div className="col-4 col-md-3 d-flex">
                <img
                  src={item.pic}
                  alt="..."
                  style={{ width: "100%", maxWidth: "170px", height: "150px", objectFit: "contain" }}
                />
                  {/* <p style={{ fontSize: "14px", fontWeight: "bold" }}>ID: {item.id}</p>
                <h5 style={{ fontSize: "18px", marginBottom: "5px" }}>{item.category}</h5>
                <p style={{ fontSize: "14px", color: "#555" }}>{item.titele}</p> */}
              </div>

              {/* Details */}
              <div className="col-8 col-md-6">
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>ID: {item.id}</p>
              <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b> </span>
                <h5 style={{ fontSize: "18px", marginBottom: "5px" }}>{item.category}</h5>
                <p style={{ fontSize: "14px", color: "#555" }}>{item.titele}</p>
               
              </div>

              {/* Actions */}
              <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-md-end mt-3 mt-md-0">
                <div className="d-flex gap-2 mb-2">
                  <button className="btn btn-outline-success btn-sm" onClick={() => Buycardprice(item)}>Buy</button>
                  <button className="btn btn-danger btn-sm" onClick={() => reamoveadddata(item.id)}>
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
          <div style={{ fontSize: "40px", textAlign: "center" }}>
            <p><BiSolidCartAdd /> No Data Found</p>
          </div>
        </div>
      )}

{Seleteradd.length>0 &&
  <div className="d-flex justify-content-end m-5 ">
  <button
    className="btn "
    style={{ background:"#0a8d94", color:"white" , }}
    onClick={() => totalbuycardprice()}
  >
    Buy All
  </button>
</div>
}
    </>
  );
}

export default Addcart;
