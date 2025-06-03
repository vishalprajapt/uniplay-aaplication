


import React, {useState,useEffect,useRef,lazy,Suspense} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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

function Entertainment() {
    const swiperRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
     const AddSlector = useSelector(state => state.Addreducer.cartarray)
               const [loadingId, setLoadingId] = useState(null);
  const  locationdata=useLocation();
   const navigate=useNavigate();
         const Dispatch=useDispatch();
  
   const [cards, setcards]=useState([
      {
        id:145,
        pic:"/img/enter1.jpeg",
        subtitle:"Theater",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Entertainment',
        subcategory:"Top 10",
        price:"199",
        link:"https://youtu.be/ocGJWc2F1Yk?si=HsS6xsF0qumD3BeA",
      },
      {
        id:146,
        pic:"/img/enter2.jpeg",
        subtitle:"Television Show",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Entertainment',
        subcategory:"Top 10",
        price:"299",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:147,
        pic:"/img/enter3.jpeg",
        subtitle:"Circus",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Entertainment',
        subcategory:"Top 10",
        price:"399",
        link:"https://youtu.be/LoHt-N_fKS0?si=JjlcCXkwpAHSo02i",
      },
      {
        id:148,
        pic:"/img/enter4.jpeg",
        subtitle:"Movies",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        price:"499",
        category: 'Entertainment',
        subcategory:"Top 10",
        link:"https://youtu.be/eb0CfNa84Iw?si=YErz65elDO-Bi-gB",
      },
      {
        id:149,
        pic:"/img/enter5.jpeg",
        subtitle:"Magic Show",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        price:"599",
        category: 'Entertainment',
        subcategory:"Top 10",
        link:"https://youtu.be/Znua7tNAbik?si=ZKIN2rnsRqZ_PKG3",
      },
      {
        id:150,
        pic:"/img/enter6.jpeg",
        subtitle:"Comedy Club",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        price:"199",
        subcategory:"Top 10",
        link:"https://youtu.be/Znua7tNAbik?si=ZKIN2rnsRqZ_PKG3",
  
      },
      {
        id:151,
        pic:"/img/enter7.jpeg",
        subtitle:"Entertainment",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        price:"299",
        subcategory:"Top 10",
        link:"https://youtu.be/Znua7tNAbik?si=ZKIN2rnsRqZ_PKG3",
      },
      {
        id:152,
        pic:"/img/enter2.jpeg",
        subtitle:"Television Show",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        price:"399",
        subcategory:"Top 10",
        link:"https://youtu.be/9CIi4N8m1lo?si=9CxLtcKTnMwXbvE4",
      },
      {
        id:153,
        pic:"/img/enter9.jpeg",
        subtitle:"Theater",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        price:"499",
        subcategory:"Shows",
        link:"https://youtu.be/ocGJWc2F1Yk?si=HsS6xsF0qumD3BeA",
      },
      {
        id:154,
        pic:"/img/enter10.jpeg",
        subtitle:"Entertainment",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        price:"199",
        expanded:false,
        subcategory:"Shows",
        link:"https://youtu.be/9CIi4N8m1lo?si=9CxLtcKTnMwXbvE4",
      },
      {
        id:155,
        pic:"/img/enter11.jpeg",
        subtitle:"Shows",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        price:"599",
        subcategory:"Shows",
        link:"https://youtu.be/9CIi4N8m1lo?si=9CxLtcKTnMwXbvE4",
      },
      {
        id:156,
        pic:"/img/enter12.jpeg",
        subtitle:"Magic Show",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lovers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        price:"299",
         subcategory:"Shows",
        link:"https://youtu.be/Znua7tNAbik?si=ZKIN2rnsRqZ_PKG3",
      },
      {
        id:157,
        pic:"/img/enter13.jpeg",
        titele:"Must-See TV Shows | Top Picks for Entertainment Comedy",
        subtitle:"Comedy",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        price:"399",
        subcategory:"funny Shows",
        link:"https://youtu.be/ygTPPaONR20?si=PWvrC6GmEkHI4fzQ",
      },
      {
        id:158,
        pic:"/img/enter14.jpeg",
        titele:"Must-See TV Shows | Top Picks for Entertainment Movie",
        subtitle:"Movie Show",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        subcategory:"funny Shows",
        price:"599",
        link:"https://youtu.be/JG2OccNaVdI?si=-IhhKMJ1Y88MM-_r",
      },
      {
        id:159,
        pic:"/img/enter15.jpeg",
        subtitle:"Listening",
        titele:"Must-See TV Shows | Top Picks for Entertainment Lestening",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainement',
        expanded:false,
        price:"199",
        subcategory:"funny Shows",
        link:"https://youtu.be/vzfuzwqGNJI?si=9vdY3e-x96DjDugk",
      },
      {
        id:160,
        pic:"/img/enter16.jpeg",
        titele:"Must-See TV Shows | Top Picks for Entertainment shows",
        subtitle:"Entertainment",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Entertainment',
        expanded:false,
        subcategory:"funny Shows",
        price:"499",
        link:"https://youtu.be/d2FMJ7tTSm0?si=9DwArbAQndZstafy",
      },
      {
        id:161,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        expanded:false,
        subcategory:"funny Shows",
        price:"299",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:162,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        expanded:false,
        subcategory:"Pogo",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:163,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        expanded:false,
        subcategory:"nike",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:164,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        subcategory:"nike",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:165,
        pic:"/img/Pubgimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"train",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
      {
        id:166,
        pic:"/img/Pubgimg.jpeg",
        titele:"games",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"pubg",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
      {
        id:167,
        pic:"/img/Pubgimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"cars",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
      {
        id:168,
        pic:"/img/Pubgimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"Bike",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
  
    ])
    const musubcategoryarry= [
      ...new Set(cards.slice(0, 16).map((item) => item.subcategory))
    ]
     const [showLogin, setShowLogin] = useState(false);
       const [loginmodelfrom, setloginmodelfrom]=useState(true)
       const Amountdata=useSelector(state=>state.MUL.buycart)
       const [rightpop, setrightpop]=useState(false);
        const [alertMessage, setAlertMessage]=useState("");
          const [searchbar, setsearchbar] = useState(false);
         



          const localemail=localStorage.getItem("email")
               
               
                    const Openmodel = (item) => {
                     if(!localemail){
                       setShowLogin(true); 
                     }
                     if (localemail) {
                      const flatIDs = Amountdata?.keyid?.flat() || [];
                      const isValue = flatIDs.includes(item.id);
                      //  console.log("isValue",isValue);
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
                 
               
               const fourCards=cards.slice(0,16);
               
             
          
                 
               
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
               
                     const [Printcards, setPrintcards]=useState(fourCards);
                     const [filteredCards, setFilteredCards] = useState(fourCards);
                  const [selectedSubcategory, setSelectedSubcategory] = useState("");
                          const [searchTerm, setSearchTerm] = useState("");
                          const [alertType, setAlertType]=useState('')
                                 
                                             
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

    

  

                     console.log("setPrintcards",Printcards);

   
        
    


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
                        <Filtercompoent  onFilterChange={handleFilterChange}  propssubcategary={musubcategoryarry} />
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
                         <span style={{color:"gray"}}>
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
                            <span >Watch</span>
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1"
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} >    <span >Buy</span></button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}>    <span >View</span></button>
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
                         <span style={{color:" rgb(79, 78, 78)"}}>
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
                       <span >Watch</span>
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1"
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} >    <span>Buy</span></button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}>    <span >View</span></button>
                    )}
                      </div>
                      <div>
                  {localemail && (
                     !isButton &&(
                    !AddSlector.some(cartItem => cartItem.id === item.id) ? (
                      <button className="btn  btn-sm m-1"
                      style={{ background:"#0a8d94", color:"white",  }}
                      onClick={() => handleAddcartdata(item)}>
                        <span style={{fontSize:"10px"}} > Add To Cart</span>
                      </button>
                    ) : (
                      <span>
                        <button className="btn btn-secondary btn-sm m-1">
                          {loadingId === item.id ? <div><span className="loader"></span></div> : <span style={{fontSize:"10px"}} >Added item</span>}
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
      
      
       
            
      {(selectedSubcategory === "Shows" || selectedSubcategory === "all" || selectedSubcategory === "") && (
            <div className="row" style={{margin:"50px 0px"}}>
                         <h3  style={{fontFamily:"Algerian"}}>Shows</h3>
                        {Printcards &&  Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Shows").map((item) => {
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
                         <span style={{color:" rgb(79, 78, 78)"}}>
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
                      <span >Watch</span>
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1"
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} > <span >Buy</span></button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}><span > View</span></button>
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
      
      
            
      {(selectedSubcategory === "funny Shows" || selectedSubcategory === "all" || selectedSubcategory === "") && (
            <div className="row" style={{margin:"50px 0px"}}>
                         <h3  style={{fontFamily:"Algerian"}}>Funny Shows</h3>
                        {Printcards &&  Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="funny Shows").map((item) => {
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
                         <span style={{color:" rgb(79, 78, 78)"}}>
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
                        <span  > Watch</span>
                       </button>
                       {!isButton ? (
                      <button className="btn btn-outline-success btn-sm m-1 "
                      data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                      onClick={() => Buycardprice(item)} ><span >Buy</span> </button>
                    ) : (
                      <button className="btn btn-outline-info btn-sm m-1 " onClick={() => Viewcard(item)}> <span >View</span></button>
                    )}
                      </div>
                      <div>
                  {localemail && (
                     !isButton &&(
                    !AddSlector.some(cartItem => cartItem.id === item.id) ? (
                      <button className="btn  btn-sm m-1 "
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

export default Entertainment