



import React, {useState,useEffect,useRef,lazy,Suspense} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
const LoginModal=lazy(()=>import("./Loginmodel"))
import { BuycardVideos ,YouTubeVideo,Viewcarddata,Addtocartdata,Viewdetailsby} from '../Redux/Action'
import { useDispatch,useSelector } from 'react-redux'
import Model from './Model'
import { useNavigate } from 'react-router-dom';
import "./Component.css";
import { FaSearch } from "react-icons/fa";
import Filtercompoent from './Filtercompoent'
import Serachbar from './Serachbar'
function Music() {
        const [isHovered, setIsHovered] = useState(false);
            const [activeIndex, setActiveIndex] = useState(0);
             const AddSlector = useSelector(state => state.Addreducer.cartarray)
                       const [loadingId, setLoadingId] = useState(null);
       const navigate=useNavigate();
           const Dispatch=useDispatch();
  
   const [cards, setcards]=useState([
      {
        id:97,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        subtitle:"study",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:98,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:99,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:100,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:101,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'News',
        subcategory:"aajtak",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:102,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"ABPnews",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
  
      },
      {
        id:103,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Bharat24",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:104,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"DDNews",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:105,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"football",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:106,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"match",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:107,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"boxing",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:108,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Hockey",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:109,
        pic:"/img/musicimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'music',
        subcategory:"music",
        link:"www.youtube.com/embed/fwxripI3OOk?si=LkNhOhXCVeH0zxxI",
      },
      {
        id:110,
        pic:"/img/musicimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'music',
        subcategory:"music",
        link:"www.youtube.com/embed/fwxripI3OOk?si=LkNhOhXCVeH0zxxI",
      },
      {
        id:111,
        pic:"/img/musicimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'music',
        subcategory:"music",
        link:"https://www.youtube.com/embed/MprUsRt2uMU?si=0DruHJ5A2I-so1i2",
      },
      {
        id:112,
        pic:"/img/musicimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'music',
        subcategory:"music",
        link:"https://www.youtube.com/embed/MprUsRt2uMU?si=0DruHJ5A2I-so1i2",
      },
      {
        id:113,
        pic:"/img/music1.jpeg",
        subtitle:"Hip-Hop Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        price:"199",
        expanded:false,
        link:"https://youtu.be/1J4elYHRByc?si=eVthUW_CtCxq2mEm",
      },
      {
        id:114,
        pic:"/img/music2.jpeg",
        subtitle:"Pop Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        expanded:false,
        price:"299",
        link:"https://youtu.be/HPQW_sYEqvE?si=rxA_35pwm2wY-SnD",
      },
      {
        id:115,
        pic:"/img/music3.jpeg",
        subtitle:"Rock Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        expanded:false,
        price:"399",
        link:"https://youtu.be/HPQW_sYEqvE?si=GWtq81ZDxnVhqHiP",
      },
      {
        id:116,
        pic:"/img/music4.jpeg",
        subtitle:"Soul Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        expanded:false,
        price:"299",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:117,
        pic:"/img/music5.jpeg",
        subtitle:"Blues Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        expanded:false,
        price:"199",
        link:"https://youtu.be/PZ7mhXZSJ8c?si=uZNQGqKqpYZWjve_",
      },
      {
        id:118,
        pic:"/img/music6.jpeg",
        subtitle:"Hindi Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        expanded:false,
        price:"599",
        link:"https://youtu.be/HPQW_sYEqvE?si=GWtq81ZDxnVhqHiP",
      },
      {
        id:119,
        pic:"/img/music7.jpg",
        subtitle:"English Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        expanded:false,
        price:"399",
        link:"https://youtu.be/HPQW_sYEqvE?si=rxA_35pwm2wY-SnD",
      },
      {
        id:120,
        pic:"/img/music8.webp",
        subtitle:"Pop Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Top 10",
        expanded:false,
        price:"199",
        link:"https://youtu.be/PZ7mhXZSJ8c?si=uZNQGqKqpYZWjve_",
      },
      {
        id:121,
        pic:"/img/music9.jpeg",
        subtitle:"English Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Indian Music",
        expanded:false,
        price:"299",
        link:"https://youtu.be/oGneAab3e88?si=gayhldAVnN9iAKOW",
      },
      {
        id:122,
        pic:"/img/music10.jpeg",
        subtitle:"Folk Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Indian Music",
        expanded:false,
        price:"399",
        link:"https://youtu.be/xutBFUf3LoU?si=GPAQQHKmZPvxjqk4",
      },
      {
        id:123,
        pic:"/img/music11.jpeg",
        subtitle:"English Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Indian Music",
        expanded:false,
        price:"499",
        link:"https://youtu.be/Ki4_Fc3XoSk?si=wGageiJOYgN6yuBs",
      },
      {
        id:124,
        pic:"/img/music12.jpeg",
        subtitle:"Soul Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Indian Music",
        expanded:false,
        price:"599",
        link:"https://youtu.be/wTgrZE9RWNY?si=EUjcg7kxGlf625b4",
      },
      {
        id:125,
        pic:"/img/music13.jpeg",
        subtitle:"Pop Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Rock Music",
        expanded:false,
        price:"199",
        link:"https://youtu.be/vc-KxBjIbgI?si=Guw1u_ZuXg11regw",
      },
      {
        id:126,
        pic:"/img/music16.jpeg",
        subtitle:"Folk Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Rock Music",
        expanded:false,
        price:"299",
        link:"https://youtu.be/K7yyOFL1y4M?si=eGd_m5FlQc4JyDIe",
      },
      {
        id:127,
        pic:"/img/music14.jpeg",
        subtitle:"Soul Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Rock Music",
        expanded:false,
        price:"399",
        link:"https://youtu.be/KSGYVl4ZgRs?si=vgYXg7OcA8ouYoUi",
      },
      {
        id:128,
        pic:"/img/music15.jpeg",
        subtitle:"English Music",
        titele:"Live Concert Highlights | Unforgettable Music Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Music',
        subcategory:"Rock Music",
        expanded:false,
        price:"199",
        link:"https://youtu.be/FxAG_11PzCk?si=9_ksTxoQbvDQ5WPF",
      },
  
    ])

    const musubcategoryarry= [
      ...new Set(cards.slice(17, 33).map((item) => item.subcategory))
    ]
    const locationdata=useLocation();
     const [showLogin, setShowLogin] = useState(false);
       const [loginmodelfrom, setloginmodelfrom]=useState(true)
       const Amountdata=useSelector(state=>state.MUL.buycart)
       const [rightpop, setrightpop]=useState(false);
        const [alertMessage, setAlertMessage]=useState("");
         const [searchbar, setsearchbar] = useState(false);
                 const [searchTerm, setSearchTerm] = useState("");
                   const Viewdetails=useSelector(state=>state.AddView.cartViewDetails)
 
        
        
           const localemail=localStorage.getItem("email")
         
         
              const Openmodel = (item) => {
                if(!localemail){
                  setShowLogin(true);
                } 
               if (localemail) {
                const flatIDs = Amountdata?.keyid?.flat() || [];
                const isValue = flatIDs.includes(item.id);
                 console.log("isValue",isValue);
                  // setbuttonhide(false)
               
                 if(!isValue){
                   setAlertMessage("Please, Purchase Video")
                      setAlertType("error")
                   righthanlepop();
                  
                 }else{
                   Dispatch(YouTubeVideo(item))
                   navigate("/Watch") 
                 }
               } 
               };
      
      
      
                const Buycardprice=(item)=>{
                  if(!localemail){
                       setShowLogin(true); 
                          }
                 if(localemail){
                  Dispatch(BuycardVideos(item))
                  navigate("/Buypage")
                  localStorage.setItem("pathname",locationdata.pathname)
                 }
                  }
              
               
                  const Viewcard=(item)=>{
                    localStorage.setItem("pathname",locationdata.pathname) 
                       Dispatch(Viewcarddata(item))
                       navigate('/ViewData-page')
                      
                 
                    }
              
                     const righthanlepop=()=>{
                     setrightpop(true)
                    }
              
               
                 useEffect(() => {
                       if (rightpop) {
                         const timer = setTimeout(() => {
                           setrightpop(false);
                         }, 1000);
                      
                         return () => clearTimeout(timer); // cleanup on unmount or before next set
                       }
                     }, [rightpop]);
               
  
        


  

     const handleAddcartdata = (item) => {
      setrightpop(true)
      setAlertMessage("Added Item successfully")
                  setLoadingId(item.id)
                  Dispatch(Addtocartdata(item))
                  setTimeout(() => setLoadingId(null), 1000);
              
                }
    
         function debounce(func, timeout=1000) {
                   let timer;
                   return function (...args) {
                     clearTimeout(timer);
                     timer = setTimeout(() => {
                       func.apply(this, args);
                     }, timeout);
                   };
                 }
                 
               
               const fourCards=cards.slice(17,33);
               
             
               const [Printcards, setPrintcards]=useState(fourCards);
                 
                const toggleReadMore=(item)=>{
                        
                    console.log("isButton",item);
                    const flatIDs = Amountdata?.keyid?.flat() || [];
                    const isButton = flatIDs.includes(Number(item.id));
                        
                    
                    console.log("Item ID:", item.id, typeof item.id);
              console.log("Flattened IDs:", flatIDs);
                    
                       if(isButton){
                        localStorage.setItem("pathname",locationdata.pathname) 
                        Dispatch(Viewcarddata(item))
                        navigate('/ViewData-page')
                       }else{
              
                        setAlertMessage("Please, Purchase Video")
                           setAlertType("error")
                        righthanlepop();
                       }
              
                   }


                 
             const [alertType, setAlertType]=useState('')
             const [selectedSubcategory, setSelectedSubcategory] = useState("");
                  const [filteredCards, setFilteredCards] = useState(fourCards);
            
                         const handleFilterChange = (selected) => {
                                  setSelectedSubcategory(selected);
                                
                                  const filtered = selected === "all"
                                    ? fourCards
                                    : fourCards.filter(card =>
                                        card.subcategory?.trim().toLowerCase() === selected.toLowerCase()
                                      );
                                
                                  setFilteredCards(filtered);
                                
                                  // apply search term on filtered subcategory
                                  const finalFiltered = searchTerm.trim()
                                    ? filtered.filter(card =>
                                        card.subtitle?.toLowerCase().includes(searchTerm.toLowerCase())
                                      )
                                    : filtered;
                                
                                  setPrintcards(finalFiltered);
                                };
                                
                                // Watch for search term
                                useEffect(() => {
                                  const result = searchTerm.trim()
                                    ? filteredCards.filter(card =>
                                        card.subtitle?.toLowerCase().includes(searchTerm.toLowerCase())
                                      )
                                    : filteredCards;
                                
                                  setPrintcards(result);
                                }, [searchTerm, filteredCards]);
                            
  return (
   <>
   
    
   {rightpop && <Model data={alertMessage}  type={alertType}/>}
   
    {showLogin &&
            <Suspense>
                <LoginModal  datafalse={() => setShowLogin(false)}/>
            </Suspense>
             }
   

  <div className='container'>
     <div
            style={{ display: "flex",
              justifyContent: "end", 
              marginTop: "20px",
               alignItems: "center",
                gap: "10px", }}
       
                     >
                         <Filtercompoent  onFilterChange={handleFilterChange}  propssubcategary={musubcategoryarry}/>
                      
                         <Serachbar   onterm={setSearchTerm} />
                       
                    </div>
                    {searchTerm && Printcards.length === 0 && (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    color: "#888",
    fontSize: "18px"
  }}>
   
    <p style={{ marginTop: "10px" ,fontSize:"30px"}}>No results found</p>
  </div>
)}
  
                    {searchTerm.length>=1 &&(
  
  <div className="row" style={{margin:"50px 0px"}}>
  
  {Printcards.map((item) => {
     const flatIDs = Amountdata?.keyid?.flat() || [];
     const isButton = flatIDs.includes(item.id);
   //  {console.log("filtercards.subtitile",item.subtitle)}
  
   return (
     <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
       <div className=" rounded" style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }}>
         <img
           src={item.pic}
           style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
           className="card-img-top"
           alt="..."
         />
          <div className="card-body" style={{ padding: "10px" }}>
                     <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                       <p className="card-text" style={{ fontSize: "14px",margin:"5px 0px" }}>
                         <span style={{color:"rgb(79, 78, 78)"}}>
                         {item.expanded
                           ? item.text
                           : item.text
                           ? item.text.substring(0, 52) + "... "
                           : ""}
                         </span>
                         <span
                           style={{ color: "black", cursor: "pointer" ,fontWeight:"bold"}}
                           onClick={() => toggleReadMore(item)}
                         >
                           {item.expanded ? "Read less" : "Read more"}
                         </span>
                       </p>
                       <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
                     </div>
                     <div style={{ display: "flex", justifyContent: "space-between", padding: "0px ", }} >
                     <div
                       style={{
                         display: "flex",
                      
                         gap: "5px",
                         padding: "2px",
                       }}
                     >
                       <button
                         className="btn btn-outline-danger btn-sm m-1"
                         type="button"
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         onClick={() => Openmodel(item)}
                       >
                         Watch
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1"
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} > Buy</button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}> View</button>
                    )}
                      </div>
                      <div>
                  {localemail && (
                     !isButton &&(
                    !AddSlector.some(cartItem => cartItem.id === item.id) ? (
                      <button className="btn  btn-sm m-1"
                      style={{ background:"#0a8d94", color:"white",  }}
                      onClick={() => handleAddcartdata(item)}>
                        <span style={{ fontSize: "10px" }}> Add To Cart</span>
                      </button>
                    ) : (
                      <span>
                        <button className="btn btn-secondary btn-sm m-1">
                          {loadingId === item.id ? <div><span className="loader"></span></div> : <span style={{ fontSize: "10px" }}>Added item</span>}
                        </button>
                      </span>
                    ))
                  )}
           </div>
         </div>
       </div>
     </div>
   );
  })}
  </div>
    )}
  
    
      {searchTerm.length<1 &&(
         <>
           {(selectedSubcategory === "Top 10" || selectedSubcategory === "all" || selectedSubcategory === "") && (
        <div className="container-fluid mt-5"
          style={{ position: "relative", padding: "0 15px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
         <div style={{margin:"10px"}}>
               <h3  style={{fontFamily:"Algerian"}}>Top 10</h3>
             </div>
             <Swiper
               modules={[Navigation, ]}
               spaceBetween={20}
               slidesPerView={1}
               navigation={{
                 nextEl: ".swiper-button-next",
                 prevEl: ".swiper-button-prev",
               }}
               onSwiper={(swiper) => {
                 setActiveIndex(swiper.activeIndex);
               }}
               onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
     
              
               breakpoints={{
                 576: { slidesPerView: 1 },
                 768: { slidesPerView: 2 },
                 992: { slidesPerView: 4},
                 1200: { slidesPerView: 4 },
               }}
             >
               {Printcards &&  Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Top 10").map((item) => {
                  const flatIDs = Amountdata?.keyid?.flat() || [];
                  const isButton = flatIDs.includes(item.id);
                 return(
                   <SwiperSlide key={item.id}>
                   <div
                     className="card"
                     style={{
                       width: "95%",
                       height: "auto",
                       paddingBottom:"5px",
                       boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                       margin: "auto",
                       display: "flex",
                       flexDirection: "column",
                       justifyContent: "space-between",
                       cursor: "pointer",
                     }}
                   >
                     <img
                       src={item.pic}
                       style={{ height: "120px", objectFit: "cover" }}
                       className="card-img-top"
                       alt="..."
                     />
                     <div className="card-body" style={{ padding: "10px" }}>
                     <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                       <p className="card-text" style={{ fontSize: "14px",margin:"5px 0px" }}>
                         <span style={{color:"rgb(79, 78, 78)"}}>
                         {item.expanded
                           ? item.text
                           : item.text
                           ? item.text.substring(0, 52) + "... "
                           : ""}
                         </span>
                         <span
                           style={{ color: "black", cursor: "pointer",fontWeight:"bold" }}
                           onClick={() => toggleReadMore(item)}
                         >
                           {item.expanded ? "Read less" : "Read more"}
                         </span>
                       </p>
                       <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
                     </div>
                     <div style={{ display: "flex", justifyContent: "space-between", padding: "0px ", }} >
                     <div
                       style={{
                         display: "flex",
                      
                         gap: "5px",
                         padding: "2px",
                       }}
                     >
                       <button
                         className="btn btn-outline-danger btn-sm m-1"
                         type="button"
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         onClick={() => Openmodel(item)}
                       >
                         Watch
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1"
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} > Buy</button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}> View</button>
                    )}
                      </div>
                      <div>
                  {localemail && (
                     !isButton &&(
                    !AddSlector.some(cartItem => cartItem.id === item.id) ? (
                      <button className="btn  btn-sm m-1"
                      style={{ background:"#0a8d94", color:"white",  }}
                      onClick={() => handleAddcartdata(item)}>
                        <span style={{ fontSize: "10px" }}> Add To Cart</span>
                      </button>
                    ) : (
                      <span>
                        <button className="btn btn-secondary btn-sm m-1">
                          {loadingId === item.id ? <div><span className="loader"></span></div> : <span style={{ fontSize: "10px" }}>Added item</span>}
                        </button>
                      </span>
                    ))
                  )}
                </div>
                </div>
                   </div>
                 </SwiperSlide>
                 )
               }
                
               )}
             </Swiper>
             <div
           className={`swiper-button-next ${isHovered ? "show-button" : "hide-button"}`} >
           </div>
     
           <div
           className={`swiper-button-prev ${isHovered && activeIndex > 0 ? "show-button" : "hide-button"}`}  >
           </div>
     
           </div>
     
              )}
     
      
           
     {(selectedSubcategory === "Indian Music" || selectedSubcategory === "all" || selectedSubcategory === "") && (
           <div className="row" style={{margin:"50px 0px"}}>
                        <h3  style={{fontFamily:"Algerian"}}>Indian Music</h3>
                       { Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Indian Music").map((item) => {
                         const flatIDs = Amountdata?.keyid?.flat() || [];
                         const isButton = flatIDs.includes(item.id);
                         //  {console.log("filtercards.subtitile",item.subtitle)}
     
                         return (
                           <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                             <div className=" rounded" style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                               <img
                                 src={item.pic}
                                 style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
                                 className="card-img-top"
                                 alt="..."
                               />
                               <div className="card-body" style={{ padding: "10px" }}>
                     <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                       <p className="card-text" style={{ fontSize: "14px",margin:"5px 0px" }}>
                         <span style={{color:"rgb(79, 78, 78)"}}>
                         {item.expanded
                           ? item.text
                           : item.text
                           ? item.text.substring(0, 52) + "... "
                           : ""}
                         </span>
                         <span
                           style={{ color: "black", cursor: "pointer",fontWeight:"bold" }}
                           onClick={() => toggleReadMore(item)}
                         >
                           {item.expanded ? "Read less" : "Read more"}
                         </span>
                       </p>
                       <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
                     </div>
                     <div style={{ display: "flex", justifyContent: "space-between", padding: "0px ", }} >
                     <div
                       style={{
                         display: "flex",
                      
                         gap: "5px",
                         padding: "2px",
                       }}
                     >
                       <button
                         className="btn btn-outline-danger btn-sm m-1"
                         type="button"
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         onClick={() => Openmodel(item)}
                       >
                         Watch
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1"
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} > Buy</button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}> View</button>
                    )}
                      </div>
                      <div>
                  {localemail && (
                     !isButton &&(
                    !AddSlector.some(cartItem => cartItem.id === item.id) ? (
                      <button className="btn  btn-sm m-1"
                      style={{ background:"#0a8d94", color:"white" , }}
                      onClick={() => handleAddcartdata(item)}>
                        <span style={{ fontSize: "10px" }}> Add To Cart</span>
                      </button>
                    ) : (
                      <span>
                        <button className="btn btn-secondary btn-sm m-1">
                          {loadingId === item.id ? <div><span className="loader"></span></div> : <span style={{ fontSize: "10px" }}>Added item</span>}
                        </button>
                      </span>
                    ))
                  )}
                                 </div>
                               </div>
                             </div>
                           </div>
                         );
                       })}
                     </div>
     )}
              
     
     
           
              {(selectedSubcategory === "Rock Music" || selectedSubcategory === "all" || selectedSubcategory === "") && (
           <div className="row" style={{margin:"50px 0px"}}>
                        <h3  style={{fontFamily:"Algerian"}}>Rock Music</h3>
                       { Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Rock Music").map((item) => {
                           const flatIDs = Amountdata?.keyid?.flat() || [];
                           const isButton = flatIDs.includes(item.id);
                         //  {console.log("filtercards.subtitile",item.subtitle)}
     
                         return (
                           <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                             <div
                               className=" rounded" style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                               <img
                                 src={item.pic}
                                 style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
                                 className="card-img-top"
                                 alt="..."
                               />
                               <div className="card-body" style={{ padding: "10px" }}>
                     <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                       <p className="card-text" style={{ fontSize: "14px",margin:"5px 0px" }}>
                         <span style={{color:"rgb(79, 78, 78)"}}>
                         {item.expanded
                           ? item.text
                           : item.text
                           ? item.text.substring(0, 52) + "... "
                           : ""}
                         </span>
                         <span
                           style={{ color: "black", cursor: "pointer",fontWeight:"bold" }}
                           onClick={() => toggleReadMore(item)}
                         >
                           {item.expanded ? "Read less" : "Read more"}
                         </span>
                       </p>
                       <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
                     </div>
                     <div style={{ display: "flex", justifyContent: "space-between", padding: "0px ", }} >
                     <div
                       style={{
                         display: "flex",
                      
                         gap: "5px",
                         padding: "2px",
                       }}
                     >
                       <button
                         className="btn btn-outline-danger btn-sm m-1"
                         type="button"
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         onClick={() => Openmodel(item)}
                       >
                         Watch
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1"
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} > Buy</button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}> View</button>
                    )}
                      </div>
                      <div>
                  {localemail && (
                     !isButton &&(
                    !AddSlector.some(cartItem => cartItem.id === item.id) ? (
                      <button className="btn  btn-sm m-1"
                      style={{ background:"#0a8d94", color:"white",  }}
                      onClick={() => handleAddcartdata(item)}>
                        <span style={{ fontSize: "10px" }}> Add To Cart</span>
                      </button>
                    ) : (
                      <span>
                        <button className="btn btn-secondary btn-sm m-1">
                          {loadingId === item.id ? <div><span className="loader"></span></div> : <span style={{ fontSize: "10px" }}>Added item</span>}
                        </button>
                      </span>
                    ))
                  )}
                                 </div>
                               </div>
                             </div>
                           </div>
                         );
                       })}
                     
                     </div>
              )}
                     </>
                     )}
        </div>
     

   
   </>
  )
}

export default Music