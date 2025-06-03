import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
import Model from './Model';
import './App3.css'


function Ragestration() {
   let lemail=localStorage.getItem('email')
    if(lemail!==null){
      window.location.href="http://localhost:5173/account"
    }

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
  
  
  const showpopup=()=>{
    setshowpop(true)
  }

const mysubmitdata = (e) => {
    e.preventDefault();
   
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (name.length === 0) {
      if(name.length>0 || email.length>0 || Num.length>0 || password.length>0 ||  confirmpassword.length>0){
        setAlertMessage("enter name")
     }else{
      setAlertMessage("form empty")
     }
    } else if (email.length === 0) {
      setAlertMessage("Enter Email");
    } else if (!emailPattern.test(email)) {
      setAlertMessage("Invalid Email ");
    } else if (Num.length === 0) {
      setAlertMessage("Enter Mobile Number");
    } else if (password.length === 0) {
      setAlertMessage("Enter Password");
    } else if(password?.length < 8) {
      setAlertMessage("Password greater than 8")
    } else if (confirmpassword.length ===0){
      console.log('confirmpassword', confirmpassword)
      setAlertMessage("Enter Confirm Password");
    }  else if (password!== confirmpassword){
      setAlertMessage("Password does not match");
    } else {
      logindata()
    }
  };
  
  if(showpop){
    setTimeout(() => {
      setshowpop(false)
    }, 2000);
  }

  
const logindata=()=>{
    if( name.length>0 && email.length>0 && Num.length>0 && password.length>0 &&  confirmpassword.length>0 ){
        loginavigate('/account')
    }
   
    let namedata=document.singhupform.namee.value;
    let emaildata=document.singhupform.emaile.value;
    let passworddata=document.singhupform.passworde.value;
  
    localStorage.setItem('name',namedata);
    localStorage.setItem('email',emaildata);
    localStorage.setItem('password',passworddata);
    
  }
  const myloginbutton=()=>{
    loginavigate('/')

  }
  


  return (
    <>
    <div className='myloginbutton'>
    
    </div>

<div>
    {showpop && <Model data={alertMessage}/>}
  </div>
 
  {myloading ?(
    <div className="spinner-border myloder" role="status">
    <span className="visually-hidden myspan">Loading...</span>
  </div>
  ):(
<div>
<div  className='titele '>
    <h1>Signup  Form</h1>
    
    </div>
   <div  className='myform'>
   <form  name='singhupform' onSubmit={mysubmitdata}>
   <label>Name:</label><br />
   <input type="text" name="namee" placeholder='Enter Name' onChange={(e)=>{setname(e.target.value)}} /><br /><br />
   <label>Email:</label><br />
  <input type="text" name="emaile" value={email} placeholder='Enter Email' onChange={(e)=>{handleData(e)}}  /><br /><br />
   <label>Mobile Number:</label><br />
   <input type="number" name="number" value={Num} placeholder='Enter Mobile Number'  maxLength={10} onChange={(e)=>{numdata(e)}}/><br /><br />
   <label>Password:</label><br />
   <div className='d-flex p-0' style={{border: '1px solid grey'  ,margin:'5px 10%', outline:'1px solid grey', borderRadius:'3px'}} >
   <input type={showpassword? "text" : "password"} name="passworde" placeholder='Enter Password' id='myid' onChange={(e)=>{setpassword(e.target.value)}}/><br /><br />
   <button type='button' onClick={()=>setshowpassword(!showpassword)} id='mybtn' className='btn specialbutton'> 
    {showpassword ? 
        <i className="fa-solid fa-eye-slash"></i>
        :
        <i className="fa-solid fa-eye"></i>
        }</button> 
   </div>
   <label>Confirm Password :</label><br />
    {/* <button type='button' onClick={(e) => showpass(e)} id='btn'>show</button> */}
    <div className='d-flex p-0 '  style={{border: '1px solid grey'  ,margin:'5px 10%',outline:'1px solid grey', borderRadius:'3px'}} >
      <input type={showConfirm ? "text" : "password"} name="d" placeholder='Enter Confirm Password' id='mycid' onChange={(e)=>{setconfirmpassword(e.target.value)}} />
      <button type='button' id='mypassbtn' onClick={() => setShowConfirm(!showConfirm)} className='btn specialbutton p-2'>
        {showConfirm ? 
        <i className="fa-solid fa-eye-slash"></i>
        :
        <i className="fa-solid fa-eye"></i>
        }
      </button>
    </div>
  <div className='d-flex'> 
   <label ><button className='btn btn-success m-3'  onClick={showpopup}>Submit</button></label><br /><br />
   <button type='button' className='btn btn-info m-3' onClick={myloginbutton}>Login From</button>
   </div>
   </form>


   </div>
   </div>
  )}
    
    
    </>
  )
}

export default Ragestration