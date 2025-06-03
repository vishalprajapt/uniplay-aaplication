
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate ,Link} from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Model from './Model';

function UserAccount() {

   
    const navigate=useNavigate();
    const Localemail=localStorage.getItem("email")
    const LocalName=localStorage.getItem("Name")
    const Localpassword=localStorage.getItem("password")
    const Localphone=localStorage.getItem("phone")
    const [editdata, seteditdata]=useState(false)
    const [name, setname]=useState(LocalName)
    const [email, setemail]=useState(Localemail)
    const [password, setpassword]=useState(Localpassword)
    const [phone, setphone]=useState(Localphone)
  


  
   

     const [coloredit, setcoloredit]=useState(false)
     const [savebuttoncolor, setsavebuttoncolor]=useState(false)
     const [showpop, setshowpop]=useState(false)
     const [alertmassage, setAlertMessage]=useState('')
     const [alertType, setAlertType]=useState('')

     const numdata=(e)=>{
    let  value=e.target.value
    console.log('value', value)
   if( value>5 && value.length<11){
    setphone(value)
   }
   else if(value == "") {
    setphone("")
   }
   }

     const savedata = (e) => {
    e.preventDefault();
   
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (name.length === 0) {
      
      setAlertMessage("Enter your name")
      setshowpop(true)
       setAlertType("error");
     
    } else if (email.length === 0) {
      setAlertMessage("Enter Email");
      setshowpop(true)
       setAlertType("error");
    } else if (!emailPattern.test(email)) {
      setAlertMessage("Invalid Email ");
      setshowpop(true)
       setAlertType("error");
    }else if (password.length === 0) {
      setAlertMessage("Enter Password");
      setshowpop(true)
       setAlertType("error");
    } else if(password?.length < 8) {
      setAlertMessage("Password greater than 8")
      setshowpop(true)
       setAlertType("error");
    }
    else if (phone.length === 0) {
      setAlertMessage("Enter Mobile Number");
      setshowpop(true)
       setAlertType("error");
    } 
    else {
       
      setAlertMessage("Successfull  update");
      setshowpop(true)
       setAlertType("success");
          localStorage.setItem("Name", name)
      localStorage.setItem("email", email)
      localStorage.setItem('password', password)
      localStorage.setItem('phone',phone)
      seteditdata(!editdata)
    }
  };
  
    
  useEffect(()=>{
    setTimeout(() => {
      setshowpop(false)
    }, 1500);

  },[showpop])
  return (
   <>
 
{showpop &&  <Model   data={alertmassage} type={alertType}/>}
  
{!editdata &&
   <div style={{
  padding: "10px 40px 40px 40px",
  backgroundColor: "#f5f5f5",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif"
}}>
     <button className='btn' style={{fontSize:'25px',border:"none",outline:"none" }} onClick={()=>navigate(-1)}><FaLongArrowAltLeft /></button>
  <h1 style={{
    textAlign: "center",
    marginBottom: "40px",
    color: "#333"
  }}>User Account</h1>

  <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  }}>
    {/* Icon Section */}
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        color: "#007bff"
      }}>
        <i className="fa-solid fa-user"></i>
      </div>
    </div>

    {/* Info Section */}
    <div>
      <p><strong>Name:</strong> {LocalName}</p>
      <p><strong>Email:</strong> {Localemail}</p>
      <p><strong>Password:</strong> {Localpassword}</p>
      <p><strong>Phone:</strong> {Localphone}</p>
      <button  onClick={()=>seteditdata(!editdata)} 

      style={{color:coloredit?"#c01e2e":"white"  , background:coloredit?"white":"#c01e2e", border:"1px solid #c01e2e", borderRadius:"5px", padding:"4px 8px", fontSize:"11px"}}
        
        onMouseEnter={()=>setcoloredit(!coloredit)}
         onMouseLeave={()=>setcoloredit(!coloredit)}
        ><MdEdit /> Edit</button>
   
    </div>
  </div>
</div>
}

{editdata &&
<div style={{
  padding: "10px 40px 40px 40px",
  backgroundColor: "#f5f5f5",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif"
}}>
  
  <div style={{
    maxWidth: "900px",
    margin: "40px auto",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}>
    
    {/* Profile Section */}
    <div style={{ textAlign: "center" }}>
      <h2 style={{
        color: "#333",
        marginBottom: "30px",
        fontSize: "28px",
        fontWeight: "600"
      }}>Edit Profile</h2>
      
      <div style={{
        width: "120px",
        height: "120px",
        margin: "0 auto",
        borderRadius: "50%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
        color: "#007bff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <i className="fa-solid fa-user"></i>
      </div>
    </div>

    {/* Form Section */}
    <div>
      <form>
        {/* Name Field */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "6px",
            fontWeight: "600",
            color: "#444"
          }}>Name</label>
          <input
          value={name}
            type="text"
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.3s ease"
            }}
            onChange={(e)=>setname(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "6px",
            fontWeight: "600",
            color: "#444"
          }}>Email</label>
          <input
          value={email}
            type="email"
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.3s ease"
            }}
            onChange={(e)=>setemail(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "6px",
            fontWeight: "600",
            color: "#444"
          }}>Password</label>
          <input
          value={password}
            type="password"
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.3s ease"
            }}
            onChange={(e)=>setpassword(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>

        {/* Phone Field */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "6px",
            fontWeight: "600",
            color: "#444"
          }}>Phone No</label>
          <input
          value={phone}
            type="tel"
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none",
              transition: "border-color 0.3s ease"
            }}
            onChange={(e)=>numdata(e)}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>

          <button
            type="submit"
                 style={{color:savebuttoncolor?"white":"#c01e2e"  , background:savebuttoncolor?"#c01e2e":"white", border:"1px solid #c01e2e", borderRadius:"5px", padding:"4px 8px", fontSize:"11px"}}
        
        onMouseEnter={()=>setsavebuttoncolor(!savebuttoncolor)}
         onMouseLeave={()=>setsavebuttoncolor(!savebuttoncolor)}
            onClick={savedata}
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => seteditdata(!editdata)}
                 style={{color:!coloredit?"#c01e2e":"white"  , background:!coloredit?"white":"#c01e2e", border:"1px solid #c01e2e", borderRadius:"5px", padding:"4px 8px", fontSize:"11px"}}
        
        onMouseEnter={()=>setcoloredit(!coloredit)}
         onMouseLeave={()=>setcoloredit(!coloredit)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

}




  
   
   
   </>
  )
}

export default UserAccount