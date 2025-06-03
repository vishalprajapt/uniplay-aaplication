import React,{useState,useEffect} from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import Model from "./Model"
import { useDispatch } from 'react-redux';
import { HiArrowLongLeft } from "react-icons/hi2";
import './Loginform.css'


function Ragestration() {

  const [name, setname]=useState([])
  const [email, setemail]=useState([]);
  const [Num, setNum]=useState([]);
  const [password ,setpassword]=useState([]);
  const[ confirmpassword, setconfirmpassword]=useState([])
   const [showpassword, setshowpassword]=useState(false)
const [showConfirm, setShowConfirm] = useState(false)
 const [alertMessage, setAlertMessage] = useState("");
  const [showpop, setshowpop]=useState(false)
  const loginavigate=useNavigate();
     const [myloading, setmyloading]=useState(true)
     const Dispatch=useDispatch();
     const [alertType, setAlertType] = useState("");


   useEffect(()=>{
    setTimeout(() => {
      setmyloading(false);
    }, 1000);
   },[])


const numdata=(e)=>{
    let  value=e.target.value
    console.log('value', value)
   if( value>5 && value.length<11){
    setNum(value)
   }
   else if(value == "") {
    setNum("")
   }
   }
  
   
  const handleData = (e) => {
    let value = e.target.value;
    setemail(value);
  };
  
  
  // const showpopup=()=>{
    
  // }

const mysubmitdata = (e) => {
    e.preventDefault();
   
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (name.length === 0) {
      if(name.length>0 || email.length>0 || Num.length>0 || password.length>0 ||  confirmpassword.length>0){
        setAlertMessage("enter name")
        setshowpop(true)
         setAlertType("error");
     }else{
      setAlertMessage("form empty")
      setshowpop(true)
       setAlertType("error");
     }
    } else if (email.length === 0) {
      setAlertMessage("Enter Email");
      setshowpop(true)
       setAlertType("error");
    } else if (!emailPattern.test(email)) {
      setAlertMessage("Invalid Email ");
      setshowpop(true)
       setAlertType("error");
    } else if (Num.length === 0) {
      setAlertMessage("Enter Mobile Number");
      setshowpop(true)
       setAlertType("error");
    } else if (password.length === 0) {
      setAlertMessage("Enter Password");
      setshowpop(true)
       setAlertType("error");
    } else if(password?.length < 8) {
      setAlertMessage("Password greater than 8")
      setshowpop(true)
       setAlertType("error");
    } else if (confirmpassword.length ===0){
      console.log('confirmpassword', confirmpassword)
      setAlertMessage("Enter Confirm Password");
      setshowpop(true)
       setAlertType("error");
    }  else if (password!== confirmpassword){
      setAlertMessage("Password does not match");
      setshowpop(true)
       setAlertType("error");
    } else {
      logindata();
      setAlertMessage("Successfull  signup");
      setshowpop(true)
       setAlertType("success");
    }
  };
  
  if(showpop){
    setTimeout(() => {
      setshowpop(false)
    }, 2000);
  }

  
const logindata=()=>{
  //Dispatch(Signupdata({Name:name,phone:Num,email:email,password:password}))

  localStorage.setItem("email",email)
  localStorage.setItem( "password",password)
  localStorage.setItem( "phone",Num,)
  localStorage.setItem(  "Name",name)
  loginavigate("/")
   
  }


  


  return (
    <>
    <div className='myloginbutton'>
    
    </div>

<div>
    {showpop && <Model data={alertMessage}  type={alertType}/>}
  </div>
  <button  className='btn '   onClick={()=>loginavigate(-1)}  style={{fontSize:"30px", fontWeight:"bold",outline:"none", border:"none"}}><HiArrowLongLeft /></button>
 <div
 style={{
   display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
       marginBottom:"50px"
        
 }}
 >
 <div style={{  display: "flex",
          width: "100%",
          maxWidth: "900px",
          boxShadow: "0px 7px 14px rgba(19, 13, 13, 0.3)",
          borderRadius: "8px",
          backgroundColor: "#fff",
          overflow: "hidden",
          flexWrap: "wrap",
        }}>
  <div
   className="hide-on-md"
  style={{
            flex: "1 1 300px",
          padding:"30px",
            background:"#3492a0",
            minHeight: "500px",
            position:"relative"
            
          }}>
             <div style={{ paddingTop:"20px",color:"white", marginTop:"50px"}}>
            <h2>Sign Up Form</h2> 
          
          </div>
          <div>
              <p style={{fontSize:"20px",color:"white"}}>Sign up with this details and to get started</p>
          </div>
        <div style={{position:"absolute",bottom:"50px", left: "50%",width: "80%", maxWidth: "300px",
  transform: "translateX(-330px)",}}>
            <img src="/img/userlogin.png" alt="..." style={{width:"80%",height:"200px",marginLeft:"200px",filter: "opacity(0.5) contrast(80%)", opacity: 0.5, }} />
        </div>

  </div>

 
  <div className="signup-wrapper" style={styles.wrapper}>

  <div className="signup-form" style={styles.formContainer}>
    <form onSubmit={mysubmitdata}>
      <label>Name:</label>
      <input type="text" placeholder="Enter Name" style={styles.input} onChange={(e) => setname(e.target.value)} />

      <label>Email:</label>
      <input type="text" placeholder="Enter Email" style={styles.input} value={email} onChange={handleData} />

      <label>Mobile Number:</label>
      <input type="number" placeholder="Enter Mobile Number" style={styles.input} value={Num} onChange={numdata} />

      <label>Password:</label>
      <div style={styles.passwordWrapper}>
        <input type={showpassword ? "text" : "password"} placeholder="Enter your password" style={styles.passwordInput} onChange={(e) => setpassword(e.target.value)} />
        <button type="button" onClick={() => setshowpassword(!showpassword)} style={styles.eyeButton}>
          <i className={`fa-solid ${showpassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>

      <label>Confirm Password:</label>
      <div style={styles.passwordWrapper}>
        <input type={showConfirm ? "text" : "password"} placeholder="Confirm password" style={styles.passwordInput} onChange={(e) => setconfirmpassword(e.target.value)} />
        <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={styles.eyeButton}>
          <i className={`fa-solid ${showConfirm ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>

      <div  style={{display:"flex",justifyContent:"center",marginBottom:"20px"}}>
     
         <button type="submit" className="btn " style={{background:"#3492a0",color:"white",width:"100%",height:"40px"}} >Submit</button>
      
      </div>
      <div  style={{display:"flex",justifyContent:"center"}}>
       <p style={{fontSize:"13px"}}>Already an account? <span><Link to="/Loginform" style={{textDecoration:"none",color:"black"}}><b>Login now</b></Link></span></p>
      </div>
    </form>
  </div>
</div>
 </div>
 </div>


    
    </>
    
  )
  
}

const styles = {
  wrapper: {
    flex: "1 1 400px",
            padding: "1rem",
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
  
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  passwordWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  passwordInput: {
    flex: 1,
    padding: '10px',
    border: 'none',
    outline: 'none',
  },
  eyeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
  },
  
};


export default Ragestration