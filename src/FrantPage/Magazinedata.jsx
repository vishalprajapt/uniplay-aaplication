import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { LuGift } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import './Magazine.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { magazinedata ,datapdf} from '../Redux/Action';
import { Addtocartdata } from '../Redux/Action';
import LoginModal from './Loginmodel';


function Magazinedata() {
  const ViewSelector = useSelector(state => state.ViewCheck.viewcontent);
  const purchasedMagazines=useSelector(state=>state.AddBuyall.magazinedataid)
  const navigate=useNavigate()
  const Dispatch=useDispatch()
  const [showloginmodel, setshowloginmodel]=useState(false);

  console.log("Selctormagaid",purchasedMagazines);
  const localemail=localStorage.getItem("email")

  // console.log("localemail",localemail)

  if (!ViewSelector || ViewSelector.length === 0) {
    return <div className="text-center py-5">No data found</div>;
  }

  const handlemagazine=(item)=>{
if(localemail){
     Dispatch(magazinedata(item))
   navigate("/buymagazine")
}else{
  setshowloginmodel(true)
}

  }

  const localdata=localStorage.getItem("pathname")

  console.log(localdata);
  const handalepdfdata=(item)=>{
    // Dispatch(datapdf(item)) 
    // navigate("/watch-datapdf")
  
        if (item.pdfdata) {
     const link = document.createElement("a");
    link.href = item.pdfdata;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
      }
  }
  

  const [colordata, setcolordata]=useState(false);
  const [addbutton , setaddbutton]=useState(true);
  const [buttonloder, setbuttonloder]=useState(false)

  const [loading, setLoading] = useState(true);

  const handleClick = (item) => {
     Dispatch(Addtocartdata(item))
    setbuttonloder(true)
    setTimeout(() => {
      setLoading(false);
    }, 1500); 
  };



  const modelhandel=()=>{
    setshowloginmodel(false)
  }

 
  return (
    <>
   {showloginmodel &&  <LoginModal  datafalse={modelhandel}/>}
    <div className="container py-2">
        <button onClick={()=>navigate(localdata)} style={{border:'none', outline:"none", background:"none",marginBottom:"10px"}} ><FaArrowLeftLong style={{fontSize:"20px"}} /></button>
      {ViewSelector.map((item, index) => (
        <div className="row shadow rounded-4 p-4 mb-5 bg-white" key={index}>
          {/* Image Section */}
          <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <div className="p-3 border rounded" style={{ background: '#f9f9f9' }}>
              <img
                src={item.pic}
                alt={item.titele}
                className="img-fluid"
                style={{
                  maxHeight: '350px',
                  objectFit: 'contain',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-md-7">
            <h4 className="fw-bold mb-3">{item.titele}</h4>
            <p className="text-primary fw-semibold mb-2">Be the first to review this product</p>

            <div className="mb-3">
              <h6 className="text-success fw-bold">Special Price</h6>
              <h5 className="text-danger fw-bold mb-0">₹{item.price}</h5>
              <small className="text-muted text-decoration-line-through">₹{Number(item.price) + 100}</small>
            </div>

            <div className="bg-light p-3 rounded mb-3">
              <h6 className="mb-2"> <span style={{fontSize:'20px'}}><LuGift /></span> Coupons for you</h6>
              <p className="mb-0"><strong>Special Price:</strong> Extra ₹15 off on 20 items (inclusive of coupon)</p>
            </div>

            <div className="bg-light p-3 rounded mb-4">
              <h6 className="mb-2"><span style={{fontSize:"20px"}}><BiSolidOffer /></span> Available Offers</h6>
              <p className="mb-0"><strong>Bank Offer:</strong> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
            </div>
            
          {
  purchasedMagazines.includes(item.id) && item.status === "online" ? (
    <button
      className="btn btn"
      onMouseEnter={()=>setcolordata(!colordata)}
      onMouseLeave={()=>setcolordata(!colordata)}
      style={{background:colordata?" #17a2b8":"white", color:colordata?"white":" #17a2b8", border:"2px solid  #17a2b8", borderRadius:"5px"}}
      onClick={()=>handalepdfdata(item)}
    >
      View
    </button>
  ) : (
    <>
    <div style={{display:'flex', gap:'30px'}}>
    <div>
         <button
      className="btn btn-info"
            onMouseEnter={()=>setcolordata(!colordata)}
      onMouseLeave={()=>setcolordata(!colordata)}
      style={{background:colordata?" #17a2b8":"white", color:colordata?"white":" #17a2b8", border:"2px solid  #17a2b8", borderRadius:"5px"}}
      onClick={() => handlemagazine(item)}
    >
      Buy Now
    </button>
    </div>

    <div>
      {localemail &&
      (
        <>
      {item.status==="online" &&
         <button
      className="btn btn-info"
            onMouseEnter={()=>setaddbutton(!addbutton)}
      onMouseLeave={()=>setaddbutton(!addbutton)}
      style={{background:addbutton?" #17a2b8":"white", color:addbutton?"white":" #17a2b8", border:"2px solid  #17a2b8", borderRadius:"5px"}}
      onClick={()=>handleClick(item)}
    >
    {!buttonloder ?" Add to cart":<span> {loading ? (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </>
      ) : (
        'Added item'
      )}</span>}
    </button>
}</>)
}
    </div>
    </div>

   </>
  )
}

            
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Magazinedata;
