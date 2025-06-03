


import React, {useState,useEffect,useRef, lazy,Suspense} from 'react'
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
import "./Component.css";
import { FaSearch } from "react-icons/fa";
import Filtercompoent from './Filtercompoent'
import Serachbar from './Serachbar'

function Sports() {
      const [isHovered, setIsHovered] = useState(false);
          const [activeIndex, setActiveIndex] = useState(0);
          const AddSlector = useSelector(state => state.Addreducer.cartarray)
                     const [loadingId, setLoadingId] = useState(null);
   const navigate=useNavigate();
       const Dispatch=useDispatch();
   const [cards, setcards]=useState([
      {
        id:73,
        pic:"/img/studyimg.jpeg",
        subtitle:"study",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:74,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:75,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:76,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:77,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'News',
        subcategory:"aajtak",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:78,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"ABPnews",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
  
      },
      {
        id:79,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Bharat24",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:80,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"DDNews",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:81,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"football",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:82,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"match",
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:83,
        pic:"/img/sports1.jpeg",
        subtitle:"Hockey",
        titele:"Last-Minute Goal That Changed Everything! | Hockey Thriller",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        price:"299",
        expanded:false,
        link:"https://youtu.be/TG42r1QeXOI?si=S47KbEFz_Hv7E0FJ",
      },
      {
        id:84,
        pic:"/img/sports2.jpeg",
        subtitle:"IPL Match",
        titele:"Who Will Win IPL 2025? | Full Team Analysis & Prediction",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        expanded:false,
        price:"399",
        link:"https://youtu.be/WQdqgrWvy6g?si=bO_Cp7yrQliQDHLf",
      },
      {
        id:85,
        pic:"/img/sports3.jpeg",
        subtitle:"Football",
        titele:"Champions League Final 2025 | Full Match Recap",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        expanded:false,
        price:"499",
        link:"https://youtu.be/aTTOQtSOX3I?si=OPRiin0-4mkgkIzf",
      },
      {
        id:86,
        pic:"/img/sports4.jpeg",
        subtitle:"Raceing",
        titele:"Epic Finish in Kentucky Derby 2025 | Horse Racing Thrills",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        expanded:false,
        price:"599",
        link:"https://youtu.be/D7tit_JZKvk?si=knk8qcrR68Faood0",
      },
      {
        id:87,
        pic:"/img/sports5.webp",
        subtitle:"Cars",
        titele:"Ultimate Car Racing Showdown | Speed, Power, and Victory ",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        expanded:false,
        price:"299",
        link:"https://youtu.be/D7tit_JZKvk?si=knk8qcrR68Faood0",
      },
      {
        id:88,
        pic:"/img/sports6.jpeg",
        subtitle:"Tennis",
        titele:"Epic Tennis Rally! | Best Ball Exchange Moments",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        expanded:false,
        price:"399", 
        link:"https://youtu.be/5rO-TCptKsc?si=Ec8EH90SmOCnJ8YR",
      },
      {
        id:89,
        pic:"/img/sports7.webp",
        subtitle:"Badminton",
        titele:"World Championship Badminton Final | Full Match Recap",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        expanded:false,
        price:"199",
        link:"https://youtu.be/6D7RtmlyIq0?si=DxAWZ3znEzX-o43d",
      },
      {
        id:90,
        pic:"/img/sports8.jpeg",
        subtitle:"Match",
        titele:"World championship match final | full match",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Top 10",
        expanded:false,
        price:"699",
        link:"https://youtu.be/WQdqgrWvy6g?si=bO_Cp7yrQliQDHLf",
      },
      {
        id:91,
        pic:"/img/sports9.jpeg",
        titele:"Champions League Final 2025 | Full Match Recap",
        subtitle:"Footballs",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Fielding Sports",
        expanded:false,
        price:"199",
        link:"https://youtu.be/aTTOQtSOX3I?si=OPRiin0-4mkgkIzf",
      },
      {
        id:92,
        pic:"/img/sports10.jpeg",
        titele:"World championship match final | full match",
        subtitle:"Match",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Fielding Sports",
        expanded:false,
        price:"299",
        link:"https://youtu.be/uDA3kOwmD-g?si=CxTjEJf5TO6DKGKf",
      },
      {
        id:93,
        pic:"/img/sports11.jpeg",
        titele:"World championship Action Compitision | full match",
        subtitle:"Action",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Fielding Sports",
        expanded:false,
        price:"399",
        link:"https://youtu.be/FBT_hmXKAmU?si=sDfH1nWQr3LVBmBq",
      },
      {
        id:94,
        pic:"/img/sports12.jpeg",
        titele:"World championship Hockey final | full match",
        subtitle:"Hockey",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Fielding Sports",
        expanded:false,
        price:"199",
        link:"https://youtu.be/Ndw5Ofu_ucc?si=8SYHjFgBvkljPB6f",
      },
      {
        id:95,
        pic:"/img/sports13.jpeg",
        titele:"World championship match final | full match",
        subtitle:"Match Team",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Net Sports",
        expanded:false,
        price:"299",
        link:"https://youtu.be/LxnilbLr2nQ?si=BFyr8L8gknpChg6A",
      },
      {
        id:96,
        pic:"/img/sports14.jpeg",
        titele:"World championship Neeraj Win the Match | full match",
        subtitle:"Indain Star",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Net Sports",
        expanded:false,
        price:"499",
        link:"https://youtu.be/ovd25Qk18z0?si=AvjxA2D6XuwTjN7B",
      },
      {
        id:97,
        pic:"/img/sports15.jpeg",
        titele:"World championship match final | full match",
        subtitle:"Pakistan Match",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Net Sports",
        expanded:false,
        price:"399",
        link:"https://youtu.be/WQdqgrWvy6g?si=bO_Cp7yrQliQDHLf",
      },
      {
        id:98,
        pic:"/img/sports16.jpeg",
        titele:"World championship match final | full match",
        subtitle:"Indian Team",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"Net Sports",
        expanded:false,
        price:"299",
        link:"https://youtu.be/WQdqgrWvy6g?si=bO_Cp7yrQliQDHLf",
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
    const [searchbar, setsearchbar] = useState(false);
            const [searchTerm, setSearchTerm] = useState("");




             
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

               
                 const Searchdata = (e) => {
                   const searchValue = e.target.value;
                 
               
                   if (!searchValue.trim()) {
                    console.log('fourCards', fourCards)
        
                    setPrintcards(fourCards);
                   } else {
                   
                     const filtered = fourCards.filter((item) =>
                       item.subtitle && item.subtitle.toLowerCase().includes(searchValue.toLowerCase())
                     
                     );
                     console.log("Filtered Cards: ", filtered);
                     setPrintcards(filtered);
                   }
                 };
               
            const debouncedSearch = useRef(debounce(Searchdata, 1000)).current;

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
                                                  
    
    
 const [alertType, setAlertType]=useState('')

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
  
   return (
     <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
       <div className=" rounded" style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }}>
         <img
           src={item.pic}
           style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
           className="card-img-top"
           alt="..."
         />
         <div className="card-body" style={{ padding: "5px" }}>
           <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
           <p className="card-text" style={{ fontSize: "14px",padding:"0px",margin:"3px 0px" }}>
            <span style={{color:"rgb(79, 78, 78)"}}> {item.expanded ? item.text : item.text ? item.text.substring(0, 52) + "... " : ""}</span>
             <span style={{ color: "black", cursor: "pointer",fontWeight:"bold" }} onClick={() => toggleReadMore(item)}>
               {item.expanded ? "Read less" : "Read more"}
             </span>
           </p>
           <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
         </div>
         <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "10px", }} >
           <div>
             <button id="openLoginModalBtn" className="btn btn-outline-danger btn-sm m-1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Openmodel(item)}>Watch</button>
             {!isButton ? (
               <button className="btn btn-success btn-outline-sm m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => Buycardprice(item)} > Buy</button>
             ) : (
               <button className="btn btn-info btn-sm" onClick={() => Viewcard(item)}> View</button>
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
                      style={{ background:"#0a8d94", color:"white" , }}
                      onClick={() => handleAddcartdata(item)}>
                        <span style={{ fontSize: "10px" }}> Add To Cart</span>
                      </button>
                    ) : (
                      <span>
                        <button className="btn btn-secondary btn-sm m-1">
                          {loadingId === item.id ? <div><span className="loader"></span></div> : <span style={{ fontSize: "10px" }}>  Added item</span>}
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
     
      
           
     {(selectedSubcategory === "Fielding Sports" || selectedSubcategory === "all" || selectedSubcategory === "") && (
           <div className="row" style={{margin:"50px 0px"}}>
                        <h3  style={{fontFamily:"Algerian"}}>Fielding Sports</h3>
                       {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Fielding Sports").map((item) => {
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
     
     
           
        
     {(selectedSubcategory === "Net Sports" || selectedSubcategory === "all" || selectedSubcategory === "") && (
           <div className="row" style={{margin:"50px 0px"}}>
                        <h3  style={{fontFamily:"Algerian"}}>Net Sports</h3>
                       {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Net Sports").map((item) => {
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
                     </>
                     )}
        </div>

   </>
  )
}

export default Sports