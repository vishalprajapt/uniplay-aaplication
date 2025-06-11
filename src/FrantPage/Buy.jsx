import React, { useEffect, useState ,useRef} from 'react';
import { useNavigate,useLocation,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Purchase,Addressdata,LogoutAdders,Editaddressdata,Idstore,Removecartdata,Viewcarddata } from '../Redux/Action';
import Model from './Model';
import './Buy.css';
import { HiArrowLongLeft } from "react-icons/hi2";
import { MdAdd } from "react-icons/md";

import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'
// import { cashfree } from './util'
import { myorderdata } from '../Redux/Action';



function Address() {
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
  
  console.log("selectedPrice   selectedPrice",selectedPrice.length);
  
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
  // console.log("SelectId",SelectId);
  const [addNewClicked, setAddNewClicked] = useState(false);
  const [radio, setradio]=useState(false);
  const [changepop, setchangepop]=useState(false);


  
  
 // console.log("setSelectedAddressIndex",selectedAddressIndex);

        
  

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
      dispatch(myorderdata(selectedPrice))
      setThankYouVisible(true)
       
      dispatch(Purchase(selectedPrice.map((item)=>item.id)));
      dispatch(Viewcarddata(selectedPrice))

      setTimeout(() => {
        dispatch(Removecartdata(selectedPrice.map((item)=>item.id)));
      }, 1000);
     
     setTimeout(() => {
          setShowPopup(true);
       setAlertType("success")
             setPopupMessage('Successfully purchse video');
    
      navigate("/ViewData-page");
     
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


     const deleteAddressdata=(item)=>{
    dispatch(Idstore(SelectId-1))
    dispatch(LogoutAdders(item));
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
      setLandmark(item.Landmark)
    };

    //   useEffect(()=>{
    //     setSessionId(isSessionId)
    // }, [isSessionId])
  //      const [stateValue, setStateValue] = useState('');
  // const [district, setDistrict] = useState('');

  const stateDistrictData = {
  "Uttar Pradesh": ["Agra", "Lucknow", "Kanpur", "Varanasi", "Noida","Bulandshahr"],
  "Delhi": ["New Delhi", "South Delhi", "North Delhi", "East Delhi", "West Delhi"],
  "Himachal Pradesh": ["Shimla", "Mandi", "Kullu", "Dharamshala", "Solan"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer"],
  "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Sonipat", "Karnal"],
};
     const districts = stateValue ? stateDistrictData[stateValue] : [];

  // State change handler: state set karo aur district reset kar do
  const handleStateChange = (e) => {
    setStateValue(e.target.value);
    setDistrict(''); // jab state change ho to district empty kar dena
  };


  return (
    <>
  
    {showPopup && <Model data={popupMessage} type={alertType} />}
   {thankYouVisible  &&  <div className="thank-you-overlay">
    <h1>Thank You!</h1>
    <p>Your purchase was successful...</p>
  </div>}

  <div className={thankYouVisible ? "blur-content" : ""}>
    <div  className='container  ' style={{width:"80%", margin:"10px auto%" }}  >
    <div >
<div  style={{marginBottom:"15px"}}>
<button  className='btn' style={{fontSize:"25px",outline:"none", border:"none"}}  onClick={()=>navigate(-1)}><HiArrowLongLeft /></button>
</div>  
    <div className="col-12 col-lg-12">
      <div  className='row g-4' >
        {/* Form Section */} 
       {SelectAddress.length <= 0 || isEditing  ||addNewClicked?
       (<div  className="col-12 col-lg-6"  >
       <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-lg">
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
      <select
        value={stateValue}
        onChange={handleStateChange}
        style={{ fontSize: "13px", width: "100%", height: "32px", borderRadius: "5px", border: "0.5px solid lightgray" }}
      >
        <option value="" disabled hidden>--Select State--</option>
        {Object.keys(stateDistrictData).map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
           </div>
           <div className="col-md-6">
          
              <label><b>District:</b></label><br />
      <select
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        disabled={!stateValue} // state choose na kiya ho to disable karein
        style={{ fontSize: "13px", width: "100%", height: "32px", borderRadius: "5px", border: "0.5px solid lightgray" }}
      >
        <option value="" disabled hidden>--Select District--</option>
        {districts.map((dist) => (
          <option key={dist} value={dist}>{dist}</option>
        ))}
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
     </div>):
(
  <div className="col-12 col-lg-6 "> 
    <div className="row">
    <div className="border rounded-3 p-3 bg-light shadow-sm">
    <div style={{display:"flex", justifyContent:"space-between",padding:"10px 0px"}}>
            <h5>Select Address</h5>
          <button className='btn ' style={{marginBottom:"10px",background:"#0a8d94",color:"white"}} onClick={()=>{setAddNewClicked(true); setchangepop(false);Resetform();}}><MdAdd />Add new Address</button>
          </div>
      {SelectAddress.map((item, index) => (
        <div key={index} className="col-12 mb-4" >
       {console.log("index",index)}
        
            <div style={{display:"flex", justifyContent:"space-between",border:"1px solid lightgray",padding:"10px",borderRadius:"5px"}}>
              <div>
              <div className="d-flex  align-items-center mb-2">
                <span style={{marginRight:"10px"}} ><input className="form-check-input"  name='a' type="radio" checked={SelectId === index}
              onChange={()=>dispatch(Idstore(index))}  />
          </span>
              <p className="mb-0 fw-bold"><b>{item.Name}</b></p>
            </div>
            <p className="mb-1" style={{fontSize:"13px"}}>
             {item.Address},{item.District}, {item.State} - {item.Pincode}
            </p>

              </div>
              <div>
         <div style={{display:"flex",gap:"5px"}}>
         <button className='btn ' style={{fontSize:"15px",border:"none",outline:"none"}}  onClick={() => editAddress(item, index)} ><i class="fas fa-pen"></i></button>
         <button className='btn ' style={{fontSize:"15px",color:"red",outline:"none",border:"none"}} onClick={()=>deleteAddressdata(item)}><i class="fa-solid fa-trash"></i></button>
         </div>
          </div>
   
          </div>
          
       
        </div>
      ))}
       </div>
    </div>
  </div>
)
}
    
    
        {/* Payment Section */}
        <div className="col-12 col-lg-6 "  >
          <div className="bg-white p-3 rounded shadow-sm mb-3">
            <button className="btn w-100" style={{background:"#0a8d94", border:"none", outline:"none",color:"white"}}>One Time Payment</button>
          </div>
          <div className="bg-white p-3 rounded shadow-sm mb-3 d-flex align-items-center gap-2">
            <input type="text" className="form-control"  placeholder="Enter Coupon Here" value={Apply}  onChange={(e)=>{setapply(e.target.value)}} />
        
            {!Applycheck?<button className="btn " style={{background:"#0a8d94", border:"none", outline:"none",color:"white"}} onClick={handleApply}>Apply</button>:
              <button   className='btn btn-danger'  onClick={Removecupon}>{loading ? <div><span className="loader"></span></div>:<i class="fa-solid fa-trash"></i>}</button>
            }
          </div>

          <div className="bg-white  p-3 rounded shadow-sm" >
            <div className="d-flex justify-content-between">
              <span>Total price</span>
              <span>  {`₹${(TotalPrice)}`}</span>
            </div>
            {discountitem &&
            <div className="d-flex justify-content-between">
            <span>Item Discount</span>
            <span>{`₹-${discountprice}`}</span>
          </div>
            }
            <div className="d-flex justify-content-between">
              <span>GST</span>
              <span>₹0</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Delivery Charge</span>
              <span>{`₹${delivery}`}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>To Pay</span>
              <span>{`₹${Number(TotalPrice)+delivery-discountprice}`}</span>
            </div>
            <div className="form-check custom-checkbox mt-2">
              <input className="form-check-input" type="checkbox"   style={{ accentColor: "#0a8d94" }}  onChange={() => setIsChecked(!isChecked)} id="termsCheck" />
              <label className="form-check-label" htmlFor="termsCheck">
                Before making payment you agree to our terms
              </label>
            </div>
           <div >
           <button style={{marginTop:"15px",  width:"100%",background:"#0a8d94", border:"none", outline:"none",color:"white"}} type="button" className="btn" onClick={handleprocess}>Proceed To Checkout</button>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  
    </>
  );
  
}

export default Address;