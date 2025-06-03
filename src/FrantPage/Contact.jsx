import React,{useState, useEffect, lazy,Suspense} from 'react';
import './Contact.css'
import Model from './Model';
import { useNavigate } from 'react-router-dom';
import Map from './Mapdata'
// const Map=lazy(()=>import("./Mapdata"))
import Homeloder from './Homeloder';
import SmallLoader from './SamollLoder';
import { animated, useSpring } from '@react-spring/web';
// const Map = lazy(() =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Mapdata")), 2000); // 2 seconds delay
//   })
// );


function Contact() {
    const [name, setName]=useState('');
    const [lastname, setlastname]=useState('');
    const [email , setemail]=useState('');
    const [phone, setphone]=useState('');
    const [comment ,setcomment]=useState(''); 
    const [alertmassage, setalertmassage]=useState(''); 
    const [showpop, setshowpop]=useState(false);
    const navigate=useNavigate();
    const [showloder, setshowloder]=useState(true)
    const [colorbutton, setcolorbutton]=useState(false)
    const [locationdata, setlocationdata]=useState('')
    const [duble, setduble]=useState('')

    useEffect(()=>{
      setTimeout(() => {
        setshowloder(false)
      }, 2000);
    },[])

    const handlephone=(e)=>{
      const value=e.target.value;
      if((value>5 && value.length<11) || value===""){
        setphone(value)
      }
    }



  const[propsdata, setprops]=useState("")

    const sumbitdata=(e)=>{

      e.preventDefault();
      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
      if (!name) {
        setalertmassage("Enter First Name");
      } else if (!lastname) {
        setalertmassage("Enter Last Name");
      } else if (!email) {
        setalertmassage("Enter Email");
      } else if (!emailPattern.test(email)) {
        setalertmassage("Enter Valid Email");
      } else if (!phone || phone.length !== 10) {
        setalertmassage("Enter Phone Number");

      }
      else if (duble.length>0) {
        setalertmassage("Please, Select Location");
      } else if (!comment) {
        setalertmassage("Enter Comment or Message");
      } else {
        setalertmassage("Form Submitted Successfully");
        setName("");
        setlastname("");
        setemail("");
        setphone("");
        setcomment("");
        setprops("vishal")
        // handleSearch()
        setlocationdata("")
      }
    
      setshowpop(true);
      setTimeout(() => setshowpop(false), 1500);
    }
    

    const stylecolor=useSpring({
      background:colorbutton?"#17a2b8":"white",
      color:colorbutton?"white":"#17a2b8",
      border:"2px solid #17a2b8",
      config:{tension:"300px", friction:"20px"}
     
    })


      const [inputValue, setInputValue] = useState('Sector 63, Noida');
      // const [lat, setLat] = useState(28.6207680);
      // const [lon, setLon] = useState(77.3814940);

  //     const handleSearch = async () => {
   
  //     const response = await fetch( 
  //        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputValue)}`
  //     );           
  //     const data = await response.json();

  //     console.log("data",data);
      
  //     if (data && data.length > 0) {
  //       setLat(parseFloat(data[0].lat));
  //       setLon(parseFloat(data[0].lon));
  //       setInputValue('')
  //     } else {
  //       setalertmassage("Please, Enter a valid location")
  //       // setAlertType("error")
  //       // setshowmodel(true)
  //     }
   
  // };

 

  console.log("locationdatadddddd",locationdata);

  const datamain=(item)=>{
    setlocationdata(item)
  }
  

  return (
   <>
  
   {showpop &&  <Model  data={alertmassage}/>}
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form autoComplete="off"  onSubmit={sumbitdata}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" value={name} placeholder="Enter first name" onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" value={lastname} placeholder="Enter last name" onChange={(e)=>setlastname(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" placeholder="Enter phone number" value={phone} onChange={(e)=>handlephone(e)} />
          </div>
           <div className="form-group">
            <label htmlFor="phone">Select Location</label>
            <input type="text" name="locationdata" placeholder="Enter a location" disabled="true" value={locationdata} onChange={(e)=>setlocationdata(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Comment*</label>
            <textarea name="message" rows="3" value={comment}  placeholder="Enter your message here"  onChange={(e)=>setcomment(e.target.value)}></textarea>
          </div>

          <animated.button type="submit" className="btn" 
          onMouseEnter={()=>setcolorbutton(true)}
          onMouseLeave={()=>setcolorbutton(false)}
          style={{...stylecolor}}
          >Submit</animated.button>
        </form>
      </div>

     
     
         <div className="contact-map">
             <h2>Our Store Information</h2>
          <div style={{height:"200px",marginBottom:"100px"}}>
        <Map   locationvalue={datamain}  proh={propsdata} />
         </div>      
      
        {/* <div className="location-info" style={{fontSize:"13px"}}>
          <h3>Location</h3>
          <p>Vijay Nagar Bypass<br />Ghaziabad, Uttar Pradesh<br />India</p>
        </div> */}
      </div>
    </div>
    </>
  );
}

export default Contact;
