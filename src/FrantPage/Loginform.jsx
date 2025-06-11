
import React,{useState, useEffect} from 'react'
import Model from './Model';
import {  useNavigate,Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {Logindata} from "../Redux/Action"
import { HiArrowLongLeft } from "react-icons/hi2";
import "./Loginform.css";
import OtpInput from 'react-otp-input';
import { LiaEdit } from "react-icons/lia";

function App3() {

  const [email, setEmail]=useState("");
  let [password, setpassword]=useState("");
  const [showpassword, setshowpassword]=useState(false)
  const [showpop, setshowpop]=useState(false)
   const [alertMessage, setAlertMessage] = useState("");
   const [myloading, setmyloading]=useState(true)
   const accountnavigate=useNavigate();
    const [alertType, setAlertType] = useState("");
    const [phoneNumber, setphoneNumber]=useState('')

   const Dispatch= useDispatch();

 useEffect(()=>{
  setTimeout(() => {
    setmyloading(false);
  }, 1000);
 },[])

 if(showpop){
  setTimeout(() => {
    setshowpop(false)
 }, 1000);
 }

// console.log("email", email);
// console.log("password", password);
 


// console.log('name.length>0 && email.length>0 && Num.length>0 && password.length>0 &&  confirmpassword.length>0', name.length>0 && email.length>0 && Num.length>0 && password.length>0 &&  confirmpassword.length>0)


const Emaildata=(e)=>{
    setEmail(e.target.value )
  //  console.log("email",email);
 
    
}


const passworddata=(e)=>{
  setpassword(e.target.value)
//  console.log("password" , password);
  
}

const Numberdata=(e)=>{
    let  value=e.target.value
    console.log('value', value)
   if( value>5 && value.length<11){
    setphoneNumber(value)
   }
   else if(value == "") {
    setphoneNumber("")
   }
   }
const logindata={email:"admin@gmail.com", password:"12345678",phone:7505200576,Name:"Vishal" };


const [otpSent, setOtpSent] = useState(false); 
const [otp, setOtp] = useState('');



const handleOtpChange = (index, value) => {
  if (/^\d?$/.test(value)) { 
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  }
};


console.log("otp",otp)

const submitdata=(e)=>{

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //  const phonePattern = /^[0-9]{10}$/;

 e.preventDefault();

 if(loginNumber){
  if(phoneNumber.length===0){
    setAlertMessage('Enter Phone Number')
 setshowpop(true) 
 setAlertType("error")
  }else {
      setAlertType("success");
      setAlertMessage("OTP Sent to your phone");
      setshowpop(true);
      setOtpSent(true); // show OTP input
      setinputbox(true)
    }
 }else{
if(email.length === 0){
 setAlertMessage('Enter email')
 setshowpop(true)
 setAlertType("error")
} else if (!emailPattern.test(email)) {
  setAlertMessage("Invalid Email ");
  setshowpop(true)
   setAlertType("error")
} else if(password.length===0){
  setAlertMessage("Enter password")
  setshowpop(true)
   setAlertType("error")
}
else if(password?.length<8){
  setAlertMessage("password greter than 8")
  setshowpop(true)
   setAlertType("error")
}else if(email!==logindata.email){
  setAlertMessage("email not match")
  setshowpop(true)
   setAlertType("error")
}else if(password!==logindata.password){
  setAlertMessage("password not match")
  setshowpop(true)
   setAlertType("error")
}
else{
   setAlertType("success")
  setshowpop(true)
  setAlertMessage("Successfull login")
      localStorage.setItem("email",logindata.email)
       localStorage.setItem( "password",logindata.password)
       localStorage.setItem( "phone",logindata.phone,)
       localStorage.setItem(  "Name",logindata.Name)
 // Dispatch(Logindata({email: logindata.email, password: logindata.password, phone:logindata.phone, Name:logindata.Name }))
  accountnavigate("/")
  
}}
}


 const hidepop=()=>{
  setshowpop(false)
 }

 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  console.log("window.innerWidth",window.innerWidth)
  console.log("isMobile",isMobile);
  
  window.addEventListener('resize', handleResize);

}, []);


  const [loginNumber, setloginNumber]=useState(false)
  const [inputbox, setinputbox]=useState(false)


  const verifyOtp = () => {

  if (otp === "123456" ) {
    setAlertType("success");
    setAlertMessage("OTP Verified! Login Success");
    setshowpop(true);
    setTimeout(() => {
       setAlertMessage("Successfull login")
    }, 2000);
      localStorage.setItem("email",logindata.email)
       localStorage.setItem( "password",logindata.password)
       localStorage.setItem( "phone",phoneNumber,)
       localStorage.setItem(  "Name",logindata.Name)
    accountnavigate("/");
  } else {
    if(otp.length===0){
        setAlertType("error");
    setAlertMessage("Please enter OTP");
    setshowpop(true);
    }else{
       setAlertType("error");
    setAlertMessage("Invalid OTP");
    setshowpop(true);
    }
   
  }
};


  return (
    <>
 
    <div>
    {showpop && <Model data={alertMessage}  Modelprops={hidepop} type={alertType}/>}
  </div>
  <div style={{backgroundColor: "#f5f5f5",}}>  
     <button  className='btn '   onClick={()=>accountnavigate("/")}  style={{fontSize:"30px", fontWeight:"bold",outline:"none", border:"none"}}><HiArrowLongLeft /></button>
 <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "85vh",
        
       
      }}
    >
      
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "900px",
          boxShadow: "0px 7px 14px rgba(19, 13, 13, 0.3)",
          borderRadius: "8px",
          backgroundColor: "#fff",
          overflow: "hidden",
          flexWrap: "wrap",
        }}
      >
        
        {/* Left Side - Image */}
        {!isMobile && (
        <div
          style={{
            flex: "1 1 300px",
          padding:"30px",
           
            background:"#3492a0",
            minHeight: "500px",
          }}
        >
          <div style={{ paddingTop:"20px",color:"white"}}>
            <h2>Login Form</h2> 
          
          </div>
          <div>
              <p style={{fontSize:"20px",color:"white"}}>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
        <div style={{position:"absolute",bottom:"10px", left: "50%",
  transform: "translateX(-330px)",}}>
            <img src="/img/userlogin.png" alt="..." style={{height:"200px",filter: "opacity(0.5) contrast(80%)", opacity: 0.5, }} />
        </div>
        </div>
        )}

        {/* Right Side - Login Form */}
        <div
          style={{
            flex: "1 1 400px",
            padding: "100px 40px",
            
          }}
        >
          <form onSubmit={submitdata}>
           {loginNumber ?
           <>
            {!inputbox ?

              <div style={{
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "0 12px",

  height: "45px",
 
}}>
  <span style={{
    fontSize: "14px",
    color: "#555",
    fontWeight: "500"
  }}>+91</span>

  <input
    type="tel"
    value={phoneNumber}
    placeholder="Enter phone number"
    style={{
      flex: 1,
      height: "100%",
      border: "none",
      outline: "none",
      fontSize: "14px",
      backgroundColor: "transparent"
    }}
    autoComplete="off"
    onChange={(e) => Numberdata(e)}
  />
</div>
:
         <>
{loginNumber && otpSent && (
  <div>
     
    <h4>Enter OTP!</h4>
    <p style={{fontSize:"13px"}}>We've sent an OTP to your registered mobile number</p>
    <p>+<span style={{marginRight:"3px"}}>91</span>{phoneNumber}<span style={{fontSize:"25px", color:"red",cursor:"pointer",marginTop:"0px",paddingTop:"0px"}}  onClick={()=>{setinputbox(!inputbox), setOtpSent(!otpSent)}}><LiaEdit  />
</span></p>

  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
    <OtpInput

      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span style={{padding:"0px 8px"}}></span>}
      renderInput={(props) => <input {...props}
      
       style={{
            width: "50px",       
            height: "50px",      
            fontSize: "20px",    
            textAlign: "center", 
            border: "1px solid #ccc",
            borderRadius: "8px", 
          }}
      />}
    />
  </div>
  </div>
)}

         </>
            }
            </>
            :
             <div style={{ marginBottom: "1rem" }}>
              <label>
                <b>Email</b>
              </label>
              <br />
              <input
                type="text"
                placeholder='Enter your email'
                style={{
                  width: "100%",
                  height: "40px",
                  paddingLeft: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                autoComplete="off"
                onChange={(e) => Emaildata(e)}
              />
            </div>
          }
             {!loginNumber &&
             
            <div style={{ marginBottom: "1rem" }}>
              <label>
                <b>Password</b>
              </label>
              <br />
              <div
                style={{
                  display: "flex",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  alignItems: "center",
                }}
              >
                <input
                  type={showpassword ? "text" : "password"}
                  placeholder='Enter  your password'
                  style={{
                    flex: 1,
                    height: "40px",
                    paddingLeft: "10px",
                    border: "none",
                    borderRadius: "4px 0 0 4px",
                  }}
                  autoComplete="new-password"
                  onChange={(e) => passworddata(e)}
                />
                <button
                  type="button"
                  onClick={() => setshowpassword(!showpassword)}
                  className="btn"
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: "0 10px",
                    cursor: "pointer",
                  }}
                >
                  {showpassword ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>
            </div>
             }

            <div>
            {!inputbox && <p style={{fontSize:"13px" }}><button type='button' className='btn' style={{background:" #3492a0", padding:'3px 6px', borderRadius:"5px", color:"white"}}  onClick={()=>{setloginNumber(!loginNumber), setphoneNumber("")}}>Login with {loginNumber?"Email":"Number"}</button></p>}
              <p style={{fontSize:"13px"}}>By continuing, you agree to Uniplay of <span><Link to={"/termcondition"}  style={{textDecoration:"none"}}>Terms of Use</Link></span> and <span><Link to={"/policy"} style={{textDecoration:"none"}}>Privacy Policy</Link></span>.</p>
            </div>
            
            <div style={{maxWidth:"100%" }}>
          {(loginNumber && otpSent) || inputbox ? (
  <button className="btn" style={{ background: "#3492a0", color: "white", width: "100%", height: "40px" }} type="button" onClick={verifyOtp}>
    Verify OTP
  </button>
) : (
  <button className="btn" style={{ background: "#3492a0", color: "white", width: "100%", height: "40px" }} type="submit">
    Submit
  </button>
)}

            </div>
          </form>

          <div
             className="signup-footer"
            style={{
           
             display: "flex",
    justifyContent: "center",
    alignItems: "center",
   marginTop:"1rem",
    fontSize: "14px",
    flexWrap: "wrap",
    gap: "5px",
            }}
          >
            <p style={{ marginRight: "5px" }}>Don't have an account? <span><Link  to="/Signupform" style={{textDecoration:"none",color:"black"}}>  <b > Sign up</b></Link></span></p>
            
          </div>
        </div>
      </div>
    </div>
</div>
    </>
  )
}

export default App3



/*
import React,{useReducer} from 'react'

let reducer=(state,action)=>{
  switch(action.type){
  case 'INC':
    return{count:state.count+1}
    case 'DEC':
      return{count:state.count-1}
      case 'MUL':
        return{count:state.count*5}
        case 'DEV':
          return{count:state.count/5}
      default:
        return  state;
 }

}

let inivalue={
  count:100
}

function App3() {
    let [state, dispatch]=useReducer(reducer, inivalue)
  let increment=()=>{
    dispatch({type:'INC'})
  }
  let decrement=()=>{
    dispatch({type:'DEC'})
  }
  let multiply=()=>{
    dispatch({type:'MUL'})
  }
  let devide=()=>{
    dispatch({type:'DEV'})
  }

  return (
    <>
    <div>
      <button onClick={increment}>increment</button>
      <p>value={state.count}</p>
      <button onClick={decrement}>decrement</button>
      <br />
      <button onClick={multiply}>5*Multiply</button>
      <br />
      <button onClick={devide}>5/DEV</button>
    </div>
    
    </>
  )
}

export default App3
*/