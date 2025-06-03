import React, { useEffect, useState ,useRef} from 'react';
import { useNavigate,useLocation,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Purchase,Addressdata,LogoutAdders,Editaddressdata,Idstore,Removecartdata,Viewcarddata } from '../Redux/Action';
import Model from './Model';
import './Buy.css';
import { HiArrowLongLeft } from "react-icons/hi2";
import { MdAdd } from "react-icons/md";
import Map from './Mapdata';
import { IoClose } from "react-icons/io5";
import { magazineid } from '../Redux/Action';
import { Addtocartdata } from '../Redux/Action';
import { myorderdata } from '../Redux/Action';
import Mapvalue from './Map2';





function Buymagazine() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [altNumber, setAltNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [address, setAddress] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const locationdata=useLocation();
  const [stateValue, setStateValue] = useState('');
const [district, setDistrict] = useState('');
const [Apply ,setapply]=useState('');
const [Applycheck, setApplycheck]=useState(false)
const  [discountprice, setdiscountprice]=useState(0)
const [loading, setloading]=useState(false);
const [discountitem, setdiscountitem]=useState(false)
 const intivalue=(100);
  const delivery=(100);
  const Cupan=[
    {id:1, name:"discount", price:20},
    {id:1, name:"bigdiscount", price:40}
  ]
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const selectedPrice = useSelector(state => state.CardPrice.Pricecards);
  const [alertType, setAlertType]=useState("")
   const Selectormagazine=useSelector(state=>state.AddBuyall.Magazinecart)

   console.log("Selectormagazine",Selectormagazine);
   
  let singalitem=null;
  let TotalPrice=0;

  if (Array.isArray(selectedPrice)) {
    if (selectedPrice.length === 1) {
    
      singalitem = selectedPrice[0];
      TotalPrice = Number(singalitem.price);
      
    } else if (selectedPrice.length > 1){
    
      const buyfilter = selectedPrice.map((item) => Number(item.price));
      TotalPrice = buyfilter.reduce((acc, price) => acc + price, 0);
    }
  }
  console.log("selectedPrice1",selectedPrice.length);
  console.log("singalitem",singalitem);
  //console.log("listitem",listitem);
  const SelectAddress=useSelector(state=>state.CostumerAdd.Addressdetail)
  const SelectId=useSelector(state=>state.AddID.Cartid)
  const SelectbuyAll=useSelector(state=>state.AddBuyall.Buystoragecart)

  
  
  const buyfilter=SelectbuyAll.map((item)=>item.price)
  const totalPrice = buyfilter.reduce((acc, price) => acc + Number(price), 0);
   
 
  // console.log("buyfilter",buyfilter);
  // console.log("SelectbuyAll",SelectbuyAll);
  // console.log("totalPrice",totalPrice.length);
  console.log("SelectId",SelectId);
  const [addNewClicked, setAddNewClicked] = useState(false);
  const [radio, setradio]=useState(false);
  const [changepop, setchangepop]=useState(false);
  const [selectdata, setselectdata]=useState('')


  
  
 console.log("setSelectedAddressIndex",SelectAddress);

        
  

  const handleNumberInput = (e) => {
    const value = e.target.value;
    if ((value > 5 && value.length < 11) || value === '') {
      setNumber(value);
    }
  };

  const handelaltnumber=(e)=>{
    const value=e.target.value;
    if((value>5 &&value.length<11) || value===""){

      setAltNumber(value)
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) setPopupMessage('Enter name'), setAlertType("error");
    else if (!number) setPopupMessage('Enter Number'),  setAlertType("error");
    else if (stateValue==="") setPopupMessage('Please select State'), setAlertType("error");
    else if (district==="") setPopupMessage('Please select District'), setAlertType("error");
    else if (!pincode) setPopupMessage('Enter Pincode'), setAlertType("error");
    else if (!altNumber) setPopupMessage('Enter Alternate number'), setAlertType("error");
    else if (!address) setPopupMessage('Enter Address'), setAlertType("error");
    else {
      const updatedAddress = {
        Name: name,
        Address: address,
        State: stateValue,
        District: district,
        Pincode: pincode,
        Number: number,
        AltNumber: altNumber,
        Landmark:landmark,
        Selcetlocation:selectdata
      };
     
   
     // setSelectedAddressIndex(SelectAddress.length)
     
      if (isEditing) {
        dispatch(Editaddressdata(updatedAddress, editIndex));
      } else {
        dispatch(Addressdata(updatedAddress));
        dispatch(Idstore(SelectAddress.length))
      }
      setchangepop(true)
        setAddNewClicked(false)
        setIsEditing(false)
       setPopupMessage('From sumbitted Successfull');
       Resetform();
        setAlertType("success")
    }
    setShowPopup(true);
 
   
  };

  useEffect(()=>{
    setchangepop(!changepop)
  },[locationdata])


   const [thankYouVisible, setThankYouVisible] = useState(false);

    
  //  console.log("Selectormagazine",Selectormagazine.id);
   
  
  const handleprocess=()=>{

    if (SelectAddress.length <= 0 || !changepop) {
      setShowPopup(true);
       setAlertType("error")
      setPopupMessage("Please fill the address form and save");
    }
   else if(!isChecked){
      setShowPopup(true);
       setAlertType("error")
      setPopupMessage('Please agree checkout');
    }else{
        
    // handleClick()
      setThankYouVisible(true)
    
      dispatch(myorderdata(Selectormagazine))
    dispatch(magazineid(Selectormagazine.id))
     console.log("datastart");
     
     setTimeout(() => {
        console.log("datacalled");
        
          setShowPopup(true);
       setAlertType("success")
             setPopupMessage('Successfully purchse video');
             setThankYouVisible(false)
      navigate("/magazine-data");
     }, 3000);
     
      return;
    }
  }

  // useEffect(() => {
  //   if (window.Cashfree) {
  //     console.log("Cashfree SDK is available");
  //   } else {
  //     console.error("Cashfree SDK is not available");
  //   }
  // }, []);


  useEffect(()=>{
    setTimeout(() => {
      setShowPopup(false)
    }, 1500);
  },[showPopup])

  const Resetform=()=>{
   
    setName("");
    setAddress("");
    setAltNumber("");
    setNumber("");
    setPincode("");
    setLandmark("");
    setDistrict("");
    setStateValue("");
    setIsEditing(false);
    setEditIndex(null);
    setselectdata('')
  }

useEffect(()=>{
  setTimeout(() => {
    setloading(false)
  }, 500);
},[loading])
 

  const handleApply=()=>{  
    
    const matched=Cupan.find((item)=>item.name.toLowerCase()===Apply.toLowerCase())
    if (matched) {
      setShowPopup(true)
       setAlertType("success")
      setPopupMessage("Sucessfull Apply Cupon")
      setdiscountitem(true)
      setApplycheck(true);
      setdiscountprice(matched.price)
      setloading(true)
    } else {
      if(Apply.length>0){
        setShowPopup(true)
         setAlertType("error")
      setPopupMessage("Invaild Cupon")
      setdiscountprice(0)
      }else{
         setAlertType("error")
        setShowPopup(true)
        setPopupMessage("Enter Cupon")
      }
    }
  }

    const Removecupon=()=>{
      setdiscountitem(false)
      setdiscountprice(0)
      setapply("")
      setApplycheck(false)
    }

    console.log("SelectAddress.length-1",SelectAddress.length-1);
    
    const deleteAddressdata=(item)=>{
      dispatch(Idstore(SelectId-1))
    dispatch(LogoutAdders(item));
    Resetform();
     }

     const editAddress = (item, index) => {
      setchangepop(!changepop)
      setIsEditing(true);
      setEditIndex(index);
      setName(item.Name);
      setAddress(item.Address);
      setStateValue(item.State);
      setDistrict(item.District);
      setPincode(item.Pincode);
      setAltNumber(item.AltNumber); 
      setNumber(item.Number)
      setLandmark(item.Landmark);
      setselectdata(item.Selcetlocation)
      
    };

    //   useEffect(()=>{
    //     setSessionId(isSessionId)
    // }, [isSessionId])
  
  const [locationdataType, setlocationdataType]=useState('')
  const [showMapModal, setShowMapModal] = useState(false);


 const handleprocessoffline=()=>{

     if(!isChecked){
      setShowPopup(true);
       setAlertType("error")
      setPopupMessage('Please agree checkout');
    }else{
      setThankYouVisible(true)
     dispatch(myorderdata(Selectormagazine))
    dispatch(magazineid(Selectormagazine.id))
    //  console.log("datastart");

     setTimeout(() => {
        // console.log("datacalled");
          setShowPopup(true);
       setAlertType("success")
             setPopupMessage('Order placed  successfully');
             setThankYouVisible(false)
      navigate("/magazine-data");
     }, 3000);
     
      return;
    }
 }

//  const [superfetch, setsuperfetch]=useState('')

 const Savemapdata=()=>{
  setShowMapModal(false)
  setselectdata(locationdataType)
 }

 const datasecond=(item)=>{
  console.log("aaaaaaaaaaaaaaaaaa",item);
  
  setlocationdataType(item)
 }

  return (
    <>
  
    {showPopup && <Model data={popupMessage} type={alertType} />}
   {thankYouVisible  &&  <div className="thank-you-overlay">
    <h1>Thank You!</h1>
    <p>Your purchase was successful...</p>
  </div>}


{Selectormagazine.status==="offline" ?
<div className={thankYouVisible ? "blur-content" : ""}>
  <div className="container py-4" style={{width:"80%", margin:"10px auto%" }}>
    <button className="btn mb-3" style={{ fontSize: "25px", outline: "none", border: "none" }} onClick={() => navigate(-1)}>
      <HiArrowLongLeft />
    </button>  
    <div className="row g-4">
      {/* Left Section */}
      <div className="col-12 col-lg-6">
        <div className="bg-light p-4 rounded shadow-sm h-100">

          {/* Form View */}
          {(SelectAddress.length <= 0 || isEditing || addNewClicked) ? (
            <form onSubmit={handleSubmit}>
             <div className="row mb-3">
           <div className="col-md-6">
             <label><b>Name:</b></label>
             <input type="text" value={name} style={{fontSize:"13px"}} className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
           </div>
           <div className="col-md-6">
             <label><b>Phone Number:</b></label>
             <input type="number" className="form-control"style={{fontSize:"13px"}}  value={number} placeholder="Enter Number" onChange={handleNumberInput} />
           </div>
         </div>
         <div className="row mb-3">                           

           <div className="col-md-6">
             <label><b>State:</b></label>
             <select style={{fontSize:"13px",width:"100%",height:"32px", borderRadius:"5px",border:"0.5px solid lightgray"}} value={stateValue}   onChange={(e)=>{setStateValue(e.target.value)}}>
               <option selected hidden disabled></option>
               <option>Uttar Pradesh</option>
               <option>Delhi</option>
               <option>Himachal Pradesh</option>
               <option>Rajasthan</option>
               <option>Haryana</option>
             </select>
           </div>
           <div className="col-md-6">
             <label><b>District:</b></label><br />
             <select style={{fontSize:"13px",width:"100%",height:"32px", borderRadius:"5px",border:"0.5px solid lightgray"}} value={district} onChange={(e)=>setDistrict(e.target.value)}>
               <option selected disabled hidden></option>
               <option>Uttar Pradesh</option>
               <option>Delhi</option>
               <option>Himachal Pradesh</option>
               <option>Rajasthan</option>
               <option>Haryana</option>
             </select>
           </div>
         </div>
         <div className="row mb-3">
           <div className="col-md-6">
             <label><b>Pincode:</b></label>
             <input type="number" value={pincode} style={{fontSize:"13px"}} className="form-control" placeholder="Enter Pincode" onChange={(e) => setPincode(e.target.value)} />
           </div>
           <div className="col-md-6">
             <label><b>Alternate Number:</b></label>
             <input type="number" value={altNumber} style={{fontSize:"13px"}} className="form-control" placeholder="Enter alternate Number" onChange={(e) =>handelaltnumber(e)} />
           </div>
         </div>
         <div className="mb-3">
           <label><b>Landmark:</b></label>
           <input type="text" value={landmark} style={{fontSize:"13px"}} className="form-control" placeholder="Enter Landmark" onChange={(e) => setLandmark(e.target.value)} />
         </div>
          <div className="mb-3">
  <label><b>Select a Location:</b></label>
  <div className="d-flex gap-2">
    <input
      type="text"
      value={selectdata}
      className="form-control"
      style={{ fontSize: "13px" }}
      readOnly
      placeholder="Selected Location"
      disabled={true}
    />
    <button
      type="button"
      className="btn btn-sm"
      style={{ background: "#0a8d94", color: "white" }}
      onClick={() => setShowMapModal(true)}
    >
      Add Location
    </button>
  </div>
</div>
         <div className="mb-3">
           <label><b>Address:</b></label>
           <textarea className="form-control" style={{fontSize:"13px"}} value={address} rows="4" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)}></textarea>
         </div>
         <div className="d-flex justify-content-end gap-2">
           {name.length>0
            && number?.length>0
             && stateValue.length>0
              && district.length>0
               && pincode.length>0
               && altNumber?.length>0
               && address.length>0
               && <button type="button" className="btn btn-danger"  onClick={Resetform}>Reset</button>
               }
               {(addNewClicked || isEditing) && <button className='btn btn-danger' type='button' onClick={()=>{setAddNewClicked(false),setIsEditing(false),setchangepop(!changepop)}}>Cancel</button>}
               <button  className="btn "  style={{background:"#0a8d94",color:"white",border:"none",outline:"none"}} >Save</button>
     
         </div>
            </form>
          ) : (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Select Address</h5>
                <button className="btn btn-sm" style={{ background: "#0a8d94", color: "white" }} onClick={() => { setAddNewClicked(true); setchangepop(false); Resetform(); }}>
                  <MdAdd /> Add new Address
                </button>
              </div>

              <div className="d-flex flex-column gap-3">
                {SelectAddress.map((item, index) => (
                  <div key={index} className="border p-3 rounded d-flex justify-content-between align-items-start">
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <input className="form-check-input me-2" type="radio" name="a" checked={SelectId === index} onChange={() => dispatch(Idstore(index))} />
                        <strong>{item.Name}</strong>
                      </div>
                      <small>{item.Address}, {item.District}, {item.State} - {item.Pincode}</small>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm" onClick={() => editAddress(item, index)}><i className="fas fa-pen"></i></button>
                      <button className="btn btn-sm text-danger" onClick={() => deleteAddressdata(item)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Right Section */}
      <div className="col-12 col-lg-6">
      
        <div className="bg-white p-3 rounded shadow-sm mb-3">
          <button className="btn w-100" style={{ background: "#0a8d94", color: "white" }}>One Time Payment</button>
        </div>

        <div className="bg-white p-3 rounded shadow-sm mb-3 d-flex align-items-center gap-2">
          <input type="text" className="form-control" placeholder="Enter Coupon Here" value={Apply} onChange={(e) => setapply(e.target.value)} />
          {!Applycheck ? (
            <button className="btn" style={{ background: "#0a8d94", color: "white" }} onClick={handleApply}>Apply</button>
          ) : (
            <button className="btn btn-danger" onClick={Removecupon}>
              {loading ? <span className="loader"></span> : <i className="fa-solid fa-trash"></i>}
            </button>
          )}
        </div>

        <div className="bg-white p-3 rounded shadow-sm">
          <div className="d-flex justify-content-between mb-2">
            <span>Total price</span>
            <strong>₹{Selectormagazine.price}</strong>
          </div>
          {discountitem && (
            <div className="d-flex justify-content-between mb-2">
              <span>Item Discount</span>
              <strong>-₹{discountprice}</strong>
            </div>
          )}
          <div className="d-flex justify-content-between mb-2">
            <span>GST</span>
            <span>₹0</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Delivery Charge</span>
            <span>₹{delivery}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold mb-2">
            <span>To Pay</span>
            <span>₹{Number(Selectormagazine.price) + delivery - discountprice}</span>
          </div>

          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="termsCheck" onChange={() => setIsChecked(!isChecked)} />
            <label className="form-check-label" htmlFor="termsCheck">
              Before making payment you agree to our terms
            </label>
          </div>

          <button className="btn w-100 mt-2" style={{ background: "#0a8d94", color: "white" }} onClick={handleprocess}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</div>





:<div>
    
    <div className="container py-4">
        <button className="btn mb-3" style={{ fontSize: "25px", outline: "none", border: "none" }} onClick={() => navigate(-1)}>
      <HiArrowLongLeft />
    </button>
  <div className="row justify-content-center">
    
    <div className="col-12 col-lg-8">
    

      {/* ONE TIME PAYMENT BUTTON */}
      <div className="bg-white p-3 rounded shadow-sm mb-4 text-center">
        <button className="btn w-100" style={{ background: "#0a8d94", color: "white" }}>
          One Time Payment
        </button>
      </div>

      {/* COUPON SECTION */}
      <div className="bg-white p-3 rounded shadow-sm mb-4">
        <h6>Apply Coupon</h6>
        <div className="d-flex align-items-center gap-2 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Coupon Here"
            value={Apply}
            onChange={(e) => setapply(e.target.value)}
          />
          {!Applycheck ? (
            <button className="btn" style={{ background: "#0a8d94", color: "white" }} onClick={handleApply}>
              Apply
            </button>
          ) : (
            <button className="btn btn-danger" onClick={Removecupon}>
              {loading ? <span className="loader"></span> : <i className="fa-solid fa-trash"></i>}
            </button>
          )}
        </div>
      </div>

      {/* PAYMENT SUMMARY SECTION */}
      <div className="bg-white p-3 rounded shadow-sm mb-4">
        <h6 className="mb-3">Payment Summary</h6>

        <div className="d-flex justify-content-between mb-2">
          <span>Total Price</span>
          <strong>₹{Selectormagazine.price}</strong>
        </div>

        {discountitem && (
          <div className="d-flex justify-content-between mb-2">
            <span>Item Discount</span>
            <strong>-₹{discountprice}</strong>
          </div>
        )}

        <div className="d-flex justify-content-between mb-2">
          <span>GST</span>
          <span>₹0</span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Delivery Charge</span>
          <span>₹{delivery}</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between fw-bold mb-2">
          <span>To Pay</span>
          <span>₹{Number(Selectormagazine.price) + delivery - discountprice}</span>
        </div>

        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="termsCheck"
            onChange={() => setIsChecked(!isChecked)}
          />
          <label className="form-check-label" htmlFor="termsCheck">
            Before making payment, you agree to our terms
          </label>
        </div>

        <button
          className="btn w-100 mt-3"
          style={{ background: "#0a8d94", color: "white" }}
          onClick={handleprocessoffline}
          disabled={!isChecked}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  </div>
</div>

    </div>}
  


  {showMapModal && (
  <div
    className="modal d-block"
    tabIndex="-1"
    role="dialog"
    style={{ backgroundColor: 'rgba(0,0,0,0.5)', overflowY: 'auto' }}
  >
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content">
        <div
          className="modal-header"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <h5 className="modal-title">Select Location</h5>
          <button
            type="button"
            className="close btn"
            onClick={() => setShowMapModal(false)}
          >
            <span><IoClose /></span>
          </button>
        </div>
        <div className="modal-body p-0" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <div style={{ width: '100%', height: '50vh' }}>
            <Mapvalue locationtypedatavalue={setlocationdataType}  typedata={locationdataType} />
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={Savemapdata}
            style={{ background: '#17a2b8', color: 'white' }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
  
}

export default Buymagazine;