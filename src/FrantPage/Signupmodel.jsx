import React,{useState,useEffect} from 'react'
import Model from './Model';
import { Modelstore } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import { useNavigate ,Link} from 'react-router-dom';
import './Signupmodel.css'
import { IoMdClose } from "react-icons/io";


function Signupmodel({removepop, dataTo, goToLogin}) {
  const [name, setname]=useState("");
  const [email, setemail]=useState("");
  const [phone, setphone]=useState("");
  const [password, setpassword]=useState("");
  const [confirmpassword, setconfirmpassword]=useState("")
  const [showpassword ,setshowpassword]=useState(false);
  const [showconfirm, setshowconfirm]=useState(false)
  const [alertMessage ,setAlertMessage]=useState(false)
  const [showpopup, setshowpopup]=useState(false);
  const Dispatch=useDispatch();
  const navigate=useNavigate();
  const [signmodelshow, setsignmodelshow]=useState(true);
  const [alertType, setAlertType]=useState("")


  const removesignupmodel=()=>{
    setsignmodelshow(false)
  }

  useEffect(() => {
    if (signmodelshow) {
      document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll when modal is closed
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [signmodelshow]);

  // ...rest of your component


  
  const phonedata=(e)=>{
    let value=e.target.value;
    if(value>5 && value.length<11){
        setphone(value)
    }else if(value==""){
        setphone("")
    }
  }

  // const localStoragedata={id:2}
    
  const submitdata=(e)=>{
    e.preventDefault();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(name.length===0){
      setshowpopup(true)
        setAlertMessage("Enter name")
         setAlertType("error")
        
    }else if(email.length===0){
      setshowpopup(true)
        setAlertMessage("Enter Email")
         setAlertType("error")
    }else if (!emailPattern.test(email)) {
      setshowpopup(true)
        setAlertMessage("Invalid Email ");
         setAlertType("error")
      } else if(phone.length===0){
        setshowpopup(true)
        setAlertMessage("Enter Phone Number")
         setAlertType("error")
      }else if(password.length===0){
        setshowpopup(true)
        setAlertMessage("Enter password")
         setAlertType("error")
      }else if(password.length<8){
        setshowpopup(true)
        setAlertMessage("Password greater than 8")
         setAlertType("error")
      }else if(confirmpassword.length===0){
        setshowpopup(true)
        setAlertMessage("Enter Confirm password")
         setAlertType("error")
      }else if(confirmpassword.length<8){
        setshowpopup(true)
        setAlertMessage("Password greater than 8")
         setAlertType("error")
      }else if(password!==confirmpassword){
        setshowpopup(true)
        setAlertMessage("Password not match")
         setAlertType("error")
      }
      else{
        setsignmodelshow(false)
       // Dispatch(Modelstore({Name:name,phone:phone,email:email,password:password}))
       setshowpopup(true)
        setAlertType("success")
       setAlertMessage("sucessfull Signup")
        localStorage.setItem("email",email)
        localStorage.setItem( "password",password)
        localStorage.setItem( "phone",phone,)
        localStorage.setItem(  "Name",name)
        navigate(0)
        
      }
  }

  if(showpopup){
    setTimeout(() => {
        setshowpopup(false)
    }, 1000);
  } 


  return (
   <>
     {showpopup &&  <Model data={alertMessage} type={alertType}/>}


  {signmodelshow &&
  
<div class="modal show d-block"
  style={{
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: "1040"
  }}
  id="signupmodel"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabIndex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog" style={{ maxWidth: "90%", width: "50rem" }}>

    
    <div class="modal-content" style={{ height: "33rem", display: "flex", flexDirection: "row" }}>
      
      {/* Left side - Signup form */}
      <div className="p-3"  style={{ flex: 1, padding: "30px" }}>
        <div class="modal-header border-0">
          
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src="/img/uniplay4.png" alt="..." style={{width:"100px"}} />
        </div>
      
        </div>

        <div class="modal-body pt-0">
          <form autoComplete='off' onSubmit={submitdata}>
            {/* Name */}
            <div>
              <label>Name</label><br />
              <input type="text" placeholder="Enter your name" style={inputStyle} onChange={(e) => setname(e.target.value)} />
            </div>
            {/* Email */}
            <div>
              <label>Email</label><br />
              <input type="text" placeholder="Enter your email" style={inputStyle} onChange={(e) => setemail(e.target.value)} />
            </div>
            {/* Phone */}
            <div>
              <label>Phone</label><br />
              <input type="number" value={phone} placeholder="Enter your phone" style={inputStyle} onChange={phonedata} />
            </div>
            {/* Password */}
            <div>
              <label>Password</label><br />
              <div style={passwordBoxStyle}>
                <input type={showpassword ? "text" : "password"} placeholder="Enter your password" style={passwordInputStyle} onChange={(e) => setpassword(e.target.value)} />
                <button type="button" onClick={() => setshowpassword(!showpassword)} className="btn specialbutton">
                  {showpassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label>Confirm Password</label><br />
              <div style={passwordBoxStyle}>
                <input type={showconfirm ? "text" : "password"} placeholder="Enter confirm password" style={passwordInputStyle} onChange={(e) => setconfirmpassword(e.target.value)} />
                <button type="button" onClick={() => setshowconfirm(!showconfirm)} className="btn specialbutton">
                  {showconfirm ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                </button>
              </div>
            </div>

            <div class="modal-footer border-0 px-0">
              <button class="btn w-100" style={{ fontSize: "14px",color:"white",background:"#3492a0"}} type="submit">Sign Up</button>
            </div>
          </form>
          <div style={{fontSize:"13px"}}>
           <p >Already an account ?
        <span>
             <Link
           
           
            style={{  color: "#3492a0",textDecoration:"none",outline:"none", border:"none"}}
            onClick={goToLogin}
          >
           Login
          </Link>
          </span>
          </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div
            style={{
              flex: 1,
               background:"#3492a0",
              backgroundPosition: "center",
              minHeight: "400px",
            }}
             className="d-none d-md-block"
          >
             <div
             style={{ display:"flex",
                  justifyContent:"end",padding:"10px"}}
             >
               <button
            type="button"
            class="btn-close"
            style={{ outline: "none", border: "none", boxShadow: "none" }}
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={dataTo}
          ></button>

             </div>
             <div style={{padding:"20px"}}>
              <div style={{ paddingTop:"20px",color:"white"}}>
                <h2>Sign UP form</h2> 
              
              </div>
              <div>
                  <p style={{fontSize:"20px",color:"white"}}>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <img src="/img/userlogin.png" alt="..." style={{height:"200px",filter: "opacity(0.5) contrast(80%)", opacity: 0.5, }} />
            </div>
             </div>
          </div>
    </div>
  </div>
</div>

  }
   
   </>
  )
}

const inputStyle = {
  paddingLeft: "10px",
  height: "32px",
  width: "100%",
  margin: "5px 0px"
};

const passwordBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #ccc",
  borderRadius: "3px"
};

const passwordInputStyle = {
  outline: "none",
  border: "none",
  paddingLeft: "10px",
  height: "28px",
  margin: "5px 0px",
  width: "100%"
};

export default Signupmodel