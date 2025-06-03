
// components/LoginModal.js
import React, { useState ,useEffect} from 'react';
import Model from './Model';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Signupmodel from './Signupmodel';
import { IoMdClose } from "react-icons/io";
import './Logout.css';


const LoginModal = ({datafalse}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage]=useState("");
    const [rightpop ,setrightpop]=useState(false);
    const [showpassword, setshowpassword]=useState(false);
    const navigate=useNavigate();
    const locationdata=useLocation();
    const [signupmodel, setsignupmodel]=useState(false);
    const  [alertType,  setAlertType]=useState("")


     const handlerightpop=()=>{
    
        setrightpop(true)
      
     }

     const handlesignupdata=()=>{
       
        setsignupmodel(true)
       
       
     }

     const Removesignupmodel=()=>{
        setsignupmodel(false)
       }

      useEffect(() => {
           if (rightpop) {
             const timer = setTimeout(() => {
               setrightpop(false);
             }, 1000);
         
             return () => clearTimeout(timer); // cleanup on unmount or before next set
           }
         }, [rightpop]);

    const Homedata={email:"admin@gmail.com", password:"12345678",phone:7505200576,Name:"Vishal"}
    
  const Sumbitdata = (e) => {
    e.preventDefault();
     let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email.length===0){
       setAlertType("error")
      setAlertMessage("Enter your Email")
      handlerightpop();
    }
    else if (!emailPattern.test(email)) {
       setAlertType("error")
      setAlertMessage("Invalid Email ");
      handlerightpop();
    }
    else if(password.length===0){
       setAlertType("error")
      setAlertMessage("Enter your password")
      handlerightpop();
    }else  if(email!==Homedata.email){
       setAlertType("error")
      setAlertMessage("Email not match")
       handlerightpop();  
    }
    else if(password!==Homedata.password){
       setAlertType("error")
      setAlertMessage("Password not  match")
      handlerightpop();
    }else{
        //Dispatch(WatchView({email: Homedata.email, password: Homedata.password, phone:Homedata.phone, Name:Homedata.Name}))
       setAlertType("success")
        setAlertMessage("Successful login")
    setrightpop(true)
     
       setTimeout(() => {
        datafalse(); 
         localStorage.setItem("email",Homedata.email)
       localStorage.setItem( "password",Homedata.password)
       localStorage.setItem( "phone",Homedata.phone,)
       localStorage.setItem(  "Name",Homedata.Name)
        navigate("/")
        
       }, 200);
    }
    
  };

  const [showModal, setShowModal] = useState(false);

  const ReturnToLogin = () => {
  setsignupmodel(false);
};


  return (
<>

   {rightpop && (
    <>
    {console.log(rightpop)}
  {console.log("Model popup should show now:", alertMessage, alertType)}
   <Model  data={alertMessage} type={alertType}/>
   </>
   )}

{!signupmodel &&

<div>
  

  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
     
    <div
      style={{
        width: "90%",
        maxWidth: "800px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
      }}
    >
     
      {/* Left: Login Form */}
      <div style={{ flex: 1, padding: "30px" }}>
      
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src="/img/uniplay4.png" alt="..." style={{width:"100px"}} />

           <div className='closebuttondiv'>
           <button
            style={{
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
           
             
            
            }}
            onClick={ datafalse}
          >
           <IoMdClose />
          </button>
          
         </div> 

          
        </div>
        <div>
          <h3>Welcome !</h3>
          <p style={{fontSize:"13px"}}>Enter your Details here to Login</p>
        </div>

        <form autoComplete="off" onSubmit={Sumbitdata}>
          <div style={{ margin: "20px 0" }}>
            <label><b>Email</b></label><br />
            <input
              type="text"
              placeholder="Enter Email"
              style={{
                width: "100%",
                height: "35px",
                paddingLeft: "10px",
                marginTop: "5px",
                border:"none",
                outline:"1px solid",
                borderRadius:"3px"
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ margin: "20px 0" }}>
            <label><b>Password</b></label><br />
            <div
              style={{
                display: "flex",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "5px",
                outline:"1px solid "
              }}
            >
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Enter Password"
                style={{
                  flex: 1,
                  height: "35px",
                  paddingLeft: "10px",
                  border: "none",
                  outline:"none"
                }}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                style={{
                  border: "none",
                  background: "none",
                  padding: "0 10px",
                  cursor: "pointer",
                }}
                onClick={() => setshowpassword(!showpassword)}
              >
                {showpassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            </div>
          </div>

          <button className="btn" style={{ fontSize: "14px", background:"#3492a0",color:"white" }}>
            Login
          </button>
        </form>

        <div style={{ marginTop: "15px", textAlign:"bottom", fontSize: "13px" }}>
       <p>Don't have an account?
        <span>
             <button
            type="button"
            className="btn p-0 m-0"
            style={{ fontSize: "13px", color: "#3492a0", border:"none", outline:"none"}}
            onClick={handlesignupdata}
          >
            Sign up
          </button>
        </span>
       </p>
        
        </div>
      </div>

      {/* Right: Image */}
      <div
        style={{
          flex: 1,
           background:"#3492a0",
          backgroundPosition: "center",
          minHeight: "400px",
          display: "none",
        }}
        className="d-none d-md-block"
      >
         <div
         style={{ display:"flex",
              justifyContent:"end"}}
         >
           <button
            style={{
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              paddingRight:"10px"
             
            
            }}
            onClick={ datafalse}
          >
           <IoMdClose />
          </button>
          
         </div>
         <div style={{padding:"20px"}}>
          <div style={{ paddingTop:"20px",color:"white"}}>
            <h2>Login Form</h2> 
          
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

 {signupmodel && <Signupmodel    removepop={Removesignupmodel} dataTo={datafalse}  goToLogin={ReturnToLogin}  />}
    </>
  );
};

export default LoginModal;
