import React, { useEffect, useState } from 'react';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutPurchase } from '../Redux/Action';
import "./Header.css"
import { FaUser } from "react-icons/fa";
import Navbar from './Navbar';
import { BiSolidCartAdd } from "react-icons/bi";
import Model from './Model';
import LogoutModal from './Logoutmodel';



function Header() {
      const Seleteradd=useSelector(state=>state.Addreducer.cartarray)
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationdata=useLocation();
    const [showpop, setshowpop]=useState(false)
     const [alertMessage, setAlertMessage] = useState("");
 

  const localEmail = localStorage.getItem("email");

  useEffect(() => {}, [localEmail]);

   if(showpop){
  setTimeout(() => {
    setshowpop(false)
 }, 1000);
 }


  const handleLogout = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("phone");
    setShowDropdown(false);
    dispatch(LogoutPurchase());
    navigate("/");
      setshowpop(true)
  setAlertMessage("Successfully logout")
  };

  

   const Cartclik=()=>{
   
    navigate("/Addcart")
   }

    const hidepop=()=>{
  setshowpop(false)
 }

 const  [logoutmodelShow, setlogoutmodelShow]=useState(false)

  return (
    <>
    {logoutmodelShow &&   <LogoutModal   
     show={logoutmodelShow}
  onHide={() => setlogoutmodelShow(false)}
  onLogout={handleLogout}
  />}
   
        {showpop && <Model data={alertMessage}  Modelprops={hidepop}/>}
    
  
    <header className="shadow-sm bg-white fixed-top" style={{height:"70px"}}   >
      <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3"  style={{background:"lightwhite"}}>
        <div className="d-flex align-items-center">
         <Link to={"/"}>
         <img
            src="/img/uniplay4.png"
            alt="Logo"
            style={{ width: "90px", height: "50px" }}
          />
         </Link>
        </div>

       


        <div className="position-relative">
          {localEmail ? (
             <div  style={{display:"flex", gap:"15px"}}>
            <button
              className="btn btn-outline-secondary rounded-circle"
              style={{ width: "100%", maxWidth:"40px", height: "40px" ,cursor:"pointer", marginTop:"13px"}}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <i className="fa-solid fa-user"></i>
            </button>
             <button
             className='btn '
             style={{border:"none",outline:"none"}}
            onClick={Cartclik}
           
           >
         <span><span style={{fontSize:"30px"}}><BiSolidCartAdd style={{color:"#3492a0"}} /></span>{Seleteradd.length > 0 && (
      <span style={{
        position: 'absolute',
        top: '4px',
        right: '5px',
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
        fontWeight: 'bold',
      }}>
        {Seleteradd.length}
      </span>
    )}</span>
           </button>
           </div>
            
          ) : (
            <Link to="/Loginform">
            
             {locationdata.pathname!=="/Loginform" && locationdata.pathname!=="/Signupform"  &&<span >  <button className="custom-login-btn"  >Login</button></span>}
            </Link>
          )}
{/* 
          {showDropdown && (
            <div
              className="position-absolute bg-white shadow-sm"
              style={{
                top: "50px",
                right: "0",
                borderRadius: "5px",
                minWidth: "150px",
                zIndex: 1000,
              }}
            >
              <Link
                to="/UserAccount"
                className="dropdown-item py-2 px-3 text-dark"
                onClick={() => setShowDropdown(false)}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="dropdown-item py-2 px-3 text-danger"
                style={{ background: "none", border: "none", width: "100%", textAlign: "left" }}
              >
                Logout
              </button>
            </div>
          )} */}

{showDropdown && (
      <div className="profile-overlay" onClick={() => setShowDropdown(false)}></div>
    )}

    {/* Sidebar */}
    <div className={`profile-sidebar ${showDropdown ? "show" : ""}`}>
      <span className="close-btn" onClick={() => setShowDropdown(false)}>&times;</span>
      <h5>Welcome</h5>

    

    {/* Navigation Links */}
    <nav className="d-flex flex-column gap-3 mt-4">
      
    <Link
        to="/UserAccount"
        className={`nav-link no-hover btn responsivelink ${locationdata.pathname === "/UserAccount" ? "nav-active" : "btn-light"}`}
        onClick={() => setShowDropdown(false)}
      >
        <FaUser />  <span style={{marginLeft:"5px"}}>My Account</span>
        
      </Link>

      <Link
        className={`nav-link no-hover btn responsivelink ${locationdata.pathname === "/" ? "nav-active" : "btn-light"}`}
        to="/"
        onClick={() => setShowDropdown(false)}
      >
        Home
      </Link>
      <Link
        className={`nav-link no-hover btn responsivelink ${locationdata.pathname === "/my-order" ? "nav-active" : "btn-light"}`}
        to="/my-order"
        onClick={() => setShowDropdown(false)}
      >
        My order 
      </Link>
     
      <Link
        className={`nav-link no-hover btn responsivelink ${locationdata.pathname === "/about" ? "nav-active" : "btn-light"}`}
        to="/about"
        onClick={() => setShowDropdown(false)}
      >
        About
      </Link>
      <Link
        className={`nav-link no-hover btn responsivelink ${locationdata.pathname === "/contact" ? "nav-active" : "btn-light"}`}
        to="/contact"
        onClick={() => setShowDropdown(false)}
      >
        Contact
      </Link>
      <Link
        className={`nav-link no-hover btn responsivelink ${locationdata.pathname === "/service" ? "nav-active" : "btn-light"}`}
        to="/service"
        onClick={() => setShowDropdown(false)}
      >
        Service
      </Link>
      <Link
        className={`nav-link no-hover btn responsivelink ${locationdata.pathname === "/service" ? "nav-active" : "btn-light"}`}
        to="/faq"
        onClick={() => setShowDropdown(false)}
      >
        FAQ's
      </Link>
    </nav>

    {/* Divider */}
    <hr />
     
      <button
        onClick={()=>setlogoutmodelShow(true)}
        className="btn btn-outline-danger w-100"
      >
        Logout
      </button>
    </div>

        </div>
      </div>
     
    </header>

   
    </>
  );
}

export default Header;
