




import React, {useState,useEffect,useRef,lazy,Suspense} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,} from 'swiper/modules'
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

function Games() {
     const swiperRef = useRef(null);
      const [isHovered, setIsHovered] = useState(false);
      const [activeIndex, setActiveIndex] = useState(0);
      const AddSlector = useSelector(state => state.Addreducer.cartarray)
            const [loadingId, setLoadingId] = useState(null);
  const locationdata=useLocation();
  
  const navigate=useNavigate();
       const Dispatch=useDispatch();
  
   const [cards, setcards]=useState([
      {
        id:121,
        pic:"/img/games1.jpeg",
        subtitle:"Cars",
        titele:"Fast & Furious Racing | Epic Gameplay Highlights!",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Games',
        subcategory:"Top 10",
        price:"199",
        link:"https://youtu.be/D7tit_JZKvk?si=GJVaSSGv7EjRTkV_",
      },
      {
        id:122,
        pic:"/img/games2.jpeg",
        subtitle:"Ludo",
        titele:"Ludo Madness! | Epic Moments and Unbelievable Wins",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"Top 10",
        price:"299",
        link:"https://youtu.be/x8RKFRNCzcg?si=EGauwj1YYh_DvEdz",
      },
      {
        id:123,
        pic:"/img/games3.jpeg",
        subtitle:"Cycle Race",
        titele:"Ultimate Cycle Race Showdown | Speed, Power, and Victory",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Games',
        subcategory:"Top 10",
        price:"399",
        link:"https://youtu.be/Ua80hzoNkcM?si=C8STqTUwpp1SfB2n",
      },
      {
        id:124,
        pic:"/img/games4.jpeg",
        subtitle:"Free Fire",
        titele:"Epic Free Fire Victory! | Top 10 Moments You Won't Believe",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Games',
        subcategory:"Top 10",
        price:"199",
        link:"https://youtu.be/U4e12FepAl8?si=n-QjvFFmWyvT3bF6",
      },
      {
        id:125,
        pic:"/img/games5.jpeg",
        subtitle:"Cars Race",
        titele:"Ultimate Cars Race Showdown | Speed, Power, and Victory",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Games',
        subcategory:"Top 10",
        price:"499",
        link:"https://youtu.be/D7tit_JZKvk?si=GJVaSSGv7EjRTkV_",
      },
      {
        id:126,
        pic:"/img/games6.jpeg",
        subtitle:"Raceing",
        titele:"Ultimate Boy Race Showdown | Speed, Power, and Victory",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Top 10",
        price:"599",
        link:"https://youtu.be/GyO1MtLhyt0?si=-weXi_fgm-cNoBnR",
  
      },
      {
        id:127,
        pic:"/img/games7.jpeg",
        subtitle:"Snake Race",
        titele:"Ultimate Snake Race Showdown | Speed, Power, and Victory",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Top 10",
        price:"99",
        link:"https://youtu.be/wsWSatcByLw?si=4OqEIilXqax4C7Lu",
      },
      {
        id:128,
        pic:"/img/games2.jpeg",
        subtitle:"Lodu Games",
        titele:"Ultimate LoduShowdown | enjoy and Victory",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Top 10",
        price:"199",
        link:"https://youtu.be/x8RKFRNCzcg?si=EGauwj1YYh_DvEdz",
      },
      {
        id:129,
        pic:"/img/games9.jpeg",
        subtitle:"Lodu Games",
        titele:"Ultimate LoduShowdown | enjoy and Victory",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Basic Games",
        price:"299",
        link:"https://youtu.be/x8RKFRNCzcg?si=EGauwj1YYh_DvEdz",
      },
      {
        id:130,
        pic:"/img/games10.jpeg",
        titele:"The Robot AI | Robot Action Danger and Powerfull ",
        subtitle:"Robot Games",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Basic Games",
        price:"199",
        link:"https://youtu.be/wQMM9fp2nmo?si=vim_eFJwuJFMOE2t",
      },
      {
        id:131,
        pic:"/img/games11.jpeg",
        titele:"Subway Surfers || Subway Surfers games very Intresting and enjoy the games",
        subtitle:"Subway surfers",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Basic Games",
        price:"499",
        link:"https://youtu.be/ZtHCnXMjIXY?si=-_MsMKxI-sDyGMAr",
      },
      {
        id:132,
        pic:"/img/games12.jpeg",

        titele:"Buble Games is more intest Games and enjoy ",
        subtitle:"Buble Games ",
        price:"599",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Basic Games",
        link:"https://youtu.be/6u9R3_609ME?si=v6n752yb6Yn0VwkW",
      },
      {
        id:133,
        pic:"/img/games13.jpeg",
        titele:"Pubg Games || pubg games is more better than free fire and powerfull other action games",
        price:"99",
        subtitle:"Pubg Games",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Action Games",
        link:"https://youtu.be/TQQKKjgx20Q?si=RV1wFTX7AEgQ2jO3",
      },
      {
        id:134,
        pic:"/img/games14.jpeg",
        titele:"Robot Games || Robot games Action and Powerfull Ai and more Intelligent",
        price:"499",
        subtitle:"Robot Games",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Action Games",
        link:"https://youtu.be/wQMM9fp2nmo?si=vim_eFJwuJFMOE2t",
      },
      {
        id:135,
        pic:"/img/games15.jpeg",
        titele:"Pung Games || Pubg games is a gretest game in whole word the pubg game is more powerfull game in other games ",
        price:"399",
        subtitle:"Pubg Games",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Action Games",
        link:"https://youtu.be/TQQKKjgx20Q?si=RV1wFTX7AEgQ2jO3",
      },
      {
        id:136,
        pic:"/img/games16.jpeg",
        titele:"Subway Surfers || Subway Surfers games very Intresting and enjoy the games",
        price:"299",
        subtitle:"Subway surfers ",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Games',
        expanded:false,
        subcategory:"Action Games",
        link:"https://youtu.be/ZtHCnXMjIXY?si=-_MsMKxI-sDyGMAr",
      },
      {
        id:137,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        subcategory:"funny",
        price:"599",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:138,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        subcategory:"Pogo",
        price:"199",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:139,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        subcategory:"nike",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:140,
        pic:"/img/Entertainmentimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'entertainment',
        subcategory:"nike",
        link:"https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
      },
      {
        id:141,
        pic:"/img/Pubgimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"train",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
      {
        id:142,
        pic:"/img/Pubgimg.jpeg",
        titele:"games",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"pubg",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
      {
        id:143,
        pic:"/img/Pubgimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'games',
        subcategory:"cars",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
      {
        id:144,
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
               const [searchTerm, setSearchTerm] = useState("");


                 const localemail=localStorage.getItem("email")
               
               
                    const Openmodel = (item) => {
                     if(!localemail){
                       setShowLogin(true); 
                     }
                     if (localemail) {
                      const flatIDs = Amountdata?.keyid?.flat() || [];
     const isValue = flatIDs.includes(item.id);
                        // setbuttonhide(false)
                     
                       if(!isValue){
                         setAlertMessage("Purchase Video")
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
              
                        setAlertMessage("Please,Purchase Video")
                           setAlertType("error")
                        righthanlepop();
                       }
              
                   }
               
                
               const [alertType, setAlertType]=useState('')          
             const [Printcards, setPrintcards]=useState(fourCards);   
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
                     <div style={{ display: "flex", justifyContent: "space-between", padding: "0px ",  }} >
                     <div
                       style={{
                         display: "flex",
                      
                         gap: "5px",
                       
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
     
      
           
     {(selectedSubcategory === "Action Games" || selectedSubcategory === "all" || selectedSubcategory === "") && (
           <div className="row" style={{margin:"50px 0px"}}>
                        <h3  style={{fontFamily:"Algerian"}}>Action Games</h3>
                       {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Action Games").map((item) => {
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
     
     
           
     {(selectedSubcategory === "Basic Games" || selectedSubcategory === "all" || selectedSubcategory === "") && (
           <div className="row" style={{margin:"50px 0px"}}>
                        <h3  style={{fontFamily:"Algerian"}}>Basic Games</h3>
                       {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Basic Games").map((item) => {
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
                          {loadingId === item.id ? <div><span className="loader"></span></div> : <span  style={{ fontSize: "10px" }}>Added item</span>}
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

export default Games