

import React, {useState,useEffect,useMemo,useCallback,useRef,lazy,Suspense} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
const LoginModal=lazy(()=>import("./Loginmodel"))
import { BuycardVideos ,YouTubeVideo,Viewcarddata,Addtocartdata} from '../Redux/Action'
import { useDispatch,useSelector } from 'react-redux'
import Model from './Model'
import { useNavigate } from 'react-router-dom';
import "./Component.css"
import { FaSearch } from "react-icons/fa";
import Filtercompoent from './Filtercompoent'
import Serachbar from './Serachbar'



function Study() {
    
  const navigate=useNavigate();
     const Dispatch=useDispatch();
      const AddSlector = useSelector(state => state.Addreducer.cartarray)
           const [loadingId, setLoadingId] = useState(null);
   const [cards, setcards]=useState([
      {
        id:49,
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
        id:50,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:51,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:52,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:53,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'News',
        subcategory:"aajtak",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:54,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"ABPnews",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
  
      },
      {
        id:55,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Bharat24",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:56,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"DDNews",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:57,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"football",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:58,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"match",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:59,
        pic:"/img/news1.jpeg",
        subtitle:"Political ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"499",
        expanded:false,
        link:"https://www.youtube.com/embed/Ecb8kvW_eBI?si=4794976eg042rMBT",
      },
      {
        id:60,
        pic:"/img/news2.jpeg",
        subtitle:"Breaking ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"199",
        expanded:false,
        link:"https://www.youtube.com/embed/N-gD7NI0b88?si=Svu9YuIEED9otV-1",
      },
      {
        id:61,
        pic:"/img/news4.jpeg",
        subtitle:"Pollution ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"299",
        expanded:false,
        link:"https://www.youtube.com/embed/GsBvl3eHWeU?si=ZWkkLLTo3HUJChRR",
      },
      {
        id:62,
        pic:"/img/news5.jpeg",
        subtitle:"Business ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"499",
        expanded:false,
        link:"https://www.youtube.com/embed/x6oJ452iEmU?si=WoP1nuzVmcAnl9IG",
      },
      {
        id:63,
        pic:"/img/news7.jpeg",
        subtitle:"Sports ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"399",
        expanded:false,
        link:"https://www.youtube.com/embed/Fxv7AAQX9bY?si=lQVzCEz8OY4UZZ3S",
      },
      {
        id:64,
        pic:"/img/news8.jpeg",
        subtitle:"Top ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"199",
        expanded:false,
        link:"https://www.youtube.com/embed/iqs-DoyB0sg?si=pRysKAZbhdpOP-xD",
      },
      {
        id:65,
        pic:"/img/news4.jpeg",
        subtitle:"Science ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"699",
        expanded:false,
        link:"https://www.youtube.com/embed/Fxv7AAQX9bY?si=lQVzCEz8OY4UZZ3S",
      },
      {
        id:66,
        pic:"/img/news1.jpeg",
        subtitle:"Criminal ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Top 10 news",
        price:"499",
        expanded:false,
        link:"https://www.youtube.com/embed/Fxv7AAQX9bY?si=lQVzCEz8OY4UZZ3S",
      },
      {
        id:67,
        pic:"/img/news1.jpeg",
        subtitle:"political ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"National News",
        price:"399",
        expanded:false,
        link:"https://www.youtube.com/embed/oxpMcFTNLA8?si=CGVe3tqonc9IJ2Kn",
      },
      {
        id:68,
        pic:"/img/news2.jpeg",
        subtitle:"Breaking ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        expanded:false,
        subcategory:"National News",
        price:"299",
        link:"https://www.youtube.com/embed/SiW4BREaVCA?si=5nV577Ji1txLaHnw",
      },
      {
        id:69,
        pic:"/img/news4.jpeg",
        subtitle:"pollution ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"National News",
        price:"199",
        link:"https://www.youtube.com/embed/T7fvFc8ZlQk?si=EqwE64heF51cA-fy",
      },
      {
        id:70,
        pic:"/img/news5.jpeg",
        subtitle:"Business ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"National News",
        price:"599",
        expanded:false,
        link:"https://youtu.be/JgazlIO9Rv4?si=Pq6OWH2vDwb3pNaA",
      },
      {
        id:71,
        pic:"/img/news7.jpeg",
        subtitle:"Sports ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"State News",
        price:"399",
        expanded:false,
        link:"https://youtu.be/98Q9pww8W9A?si=HlfyvbU6WxuBAGg0",
      },
      {
        id:72,
        pic:"/img/news8.jpeg",
        subtitle:"top ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"State News",
        price:"599",
        expanded:false,
        link:"https://youtu.be/Dw5Vbbn2D78?si=4bWbKjRH7TDb_Ehr",
      },
      {
        id:73,
        pic:"/img/news9.jpeg",
        subtitle:"science ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"State News",
        price:"399",
        expanded:false,
        link:"https://youtu.be/3XT1tOJ8tlk?si=NpkN_sofd6vV3Oom",
      },
      {
        id:74,
        pic:"/img/news10.jpeg",
        subtitle:"environment ",
        titele:"India Breaking News Today | Top Headlines  April 2025",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"State News",
        price:"499",
        expanded:false,
        link:"https://youtu.be/oh2QnTyH6yQ?si=oqhwzQKV9IcTQeo4",
      },
  
    ])

   const musubcategoryarry= [
    ...new Set(cards.slice(10, 26).map((item) => item.subcategory))
  ]
         const [showLogin, setShowLogin] = useState(false);
         const [loginmodelfrom, setloginmodelfrom]=useState(true)
         const Amountdata=useSelector(state=>state.MUL.buycart)
         const [rightpop, setrightpop]=useState(false);
         const [alertMessage, setAlertMessage]=useState("");
         const locationdata=useLocation();
         const [isHovered, setIsHovered] = useState(false);
         const [activeIndex, setActiveIndex] = useState(0);
         const [searchbar, setsearchbar] = useState(false);
         const [searchTerm, setSearchTerm] = useState("");


console.log("musubcategoryarry",musubcategoryarry);


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
             
           
           const fourCards=cards.slice(10,26);
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
   
   {rightpop && <Model data={alertMessage} type={alertType} />}
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
 console.log("isButton",isButton);
 

 return (
   <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
     <div className=" rounded" style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }} key={item.id}>
       <img
         src={item.pic}
         style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
         className="card-img-top"
         alt="..."
       />
       <div className="card-body" style={{ padding: "5px" }}>
         <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
         <p className="card-text" style={{ fontSize: "14px",padding:"0px",margin:"3px 0px" }}>
      <span  style={{color:"rgb(79, 78, 78)"}}>     {item.expanded ? item.text : item.text ? item.text.substring(0, 52) + "... " : ""}</span>
           <span style={{ color: "black", cursor: "pointer" ,fontWeight:"bold"}} onClick={() => toggleReadMore(item)}>
             {item.expanded ? "Read less" : "Read more"}
           </span>
         </p>

         <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
       </div>
       <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "10px", }} >
         <div>
           <button id="openLoginModalBtn" className="btn btn-outline-danger btn-sm  m-1 " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Openmodel(item)}>Watch</button>
           {!isButton ? (
             <button className="btn btn-outline-success btn-sm m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Buycardprice(item)} > Buy</button>
           ) : (
             <button className="btn btn-outline-info btn-sm m-1" onClick={() => Viewcard(item)}> View</button>
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
      
      {(selectedSubcategory === "Top 10 news" || selectedSubcategory === "all" || selectedSubcategory === "") && (
      <div className="container-fluid mt-5"
        style={{ position: "relative", padding: "0 15px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

      >
       <div style={{margin:"10px"}}>
             <h3  style={{fontFamily:"Algerian"}}>Top 10 News</h3>
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
             {Printcards &&  Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Top 10 news").map((item) => {
                  const flatIDs = Amountdata?.keyid?.flat() || [];
                  const isButton = flatIDs.includes(item.id);

                  console.log("isButton",isButton);
                  
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
                   key={item.id}
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
                      <span  style={{color:"rgb(79, 78, 78)"}}>
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
   
   
    
         
   {(selectedSubcategory === "National News" || selectedSubcategory === "all" || selectedSubcategory === "") && (
         <div className="row" style={{margin:"50px 0px"}}>
                      <h3  style={{fontFamily:"Algerian"}}>National News</h3>
                     {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="National News").map((item) => {
                         const flatIDs = Amountdata?.keyid?.flat() || [];
                         const isButton = flatIDs.includes(item.id);
                       //  {console.log("filtercards.subtitile",item.subtitle)}
   
                       return (
                         <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                           <div className=" rounded" key={item.id} style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                             <img
                               src={item.pic}
                               style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
                               className="card-img-top"
                               alt="..."
                             />
                             <div className="card-body" style={{ padding: "5px" }}>
                               <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                               <p className="card-text" style={{ fontSize: "14px",padding:"0px",margin:"5px 0px" }}>
                            <span style={{color:"rgb(79, 78, 78)"}}>{item.expanded ? item.text : item.text ? item.text.substring(0, 52) + "... " : ""}</span>
                                 <span style={{ color: "black", cursor: "pointer",fontWeight:"bold" }} onClick={() => toggleReadMore(item)}>
                                   {item.expanded ? "Read less" : "Read more"}
                                 </span>
                               </p>
                               <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
                             </div>
                             <div style={{ display: "flex", justifyContent: "space-between", gap: "5px", padding: "0px", }} >
                               <div>
                                 <button id="openLoginModalBtn" className="btn btn-outline-danger btn-sm m-1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Openmodel(item)}>Watch</button>
                                 {!isButton ? (
                                   <button className="btn btn-outline-success btn-sm m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Buycardprice(item)} > Buy</button>
                                 ) : (
                                   <button className="btn btn-outline-info btn-sm m-1" onClick={() => Viewcard(item)}> View</button>
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
            
   
   
         
            {(selectedSubcategory === "State News" || selectedSubcategory === "all" || selectedSubcategory === "") && (
         <div className="row" style={{margin:"50px 0px"}}>
                      <h3  style={{fontFamily:"Algerian"}}>State News</h3>
                     {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="State News").map((item) => {
                        const flatIDs = Amountdata?.keyid?.flat() || [];
                        const isButton = flatIDs.includes(item.id);
                       //  {console.log("filtercards.subtitile",item.subtitle)}
   
                       return (
                         <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                           <div
                             className="rounded" key={item.id} style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }}>
                             <img
                               src={item.pic}
                               style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
                               className="card-img-top"
                               alt="..."
                             />
                             <div className="card-body" style={{ padding: "5px" }}>
                               <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                               <p className="card-text" style={{ fontSize: "14px",padding:"0px",margin:"5px 0px" }}>
                               <span style={{color:"rgb(79, 78, 78)"}}>{item.expanded ? item.text : item.text ? item.text.substring(0, 52) + "... " : ""}</span>
                                 <span style={{ color: "black", cursor: "pointer",fontWeight:"bold" }} onClick={() => toggleReadMore(item)}>
                                   {item.expanded ? "Read less" : "Read more"}
                                 </span>
                               </p>
                               <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
                             </div>
                             <div style={{ display: "flex", justifyContent: "space-between", gap: "5px", padding: "0px", }} >
                               <div>
                                 <button id="openLoginModalBtn" className="btn btn-outline-danger btn-sm m-1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Openmodel(item)}>Watch</button>
                                 {!isButton ? (
                                   <button className="btn btn-outline-success btn-sm m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Buycardprice(item)} > Buy</button>
                                 ) : (
                                   <button className="btn btn-outline-info btn-sm m-1" onClick={() => Viewcard(item)}> View</button>
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

export default Study