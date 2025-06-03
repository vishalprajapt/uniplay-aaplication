





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

function Freedemo() {
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
        id:169,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        subtitle:"study",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"/img/studyvideo.mp4",
      },
      {
        id:170,
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
        id:171,
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
        id:172,
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
        id:173,
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
        id:174,
        pic:"/img/java4img.jpeg",
        subtitle:"java",
        price:"299",
        titele:"Java Programming for Beginners | Full Course in Hindi",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Java',
        subcategory:"Top 10",

        expanded:false,
        link:"https://www.youtube.com/embed/yRpLlJmRo2w?si=GhxUJ1z6uqtfZw2q",
      },
      {
        id:175,
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
        id:176,
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
        id:177,
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
        id:178,
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
        id:180,
        pic:"/img/javaimg.jpeg",
        subtitle:"java",
        price:"499",
        titele:"Java Programming for Beginners | Full Course in Hindi",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Java',
        subcategory:"Top 10",
        expanded:false,
        link:"https://www.youtube.com/embed/yRpLlJmRo2w?si=K5xMv2HvGuJ4S6it",
      },
      {
        id:181,
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
        id:182,
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
        id:183,
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
        id:184,
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
    //                   const flatIDs = Amountdata?.keyid?.flat() || [];
    //  const isValue = flatIDs.includes(item.id);
                        // setbuttonhide(false)
                     
                     
                         Dispatch(YouTubeVideo(item))
                         navigate("/Watch") 
                       
                     } 
                     };
            
            
            
                      const Buycardprice=(item)=>{
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
               
             
               const [Printcards, setPrintcards]=useState(fourCards);
                 
               const toggleReadMore=(id)=>{
                const updatedata = Printcards.map((carddata) =>
                    carddata.id === id ? { ...carddata, expanded: !carddata.expanded } : carddata
                  );
                  setPrintcards(updatedata)
               
              }
          
                
                         
                
          const [selectedSubcategory, setSelectedSubcategory] = useState("");
                
            const [filteredCards, setFilteredCards] = useState(fourCards);
                     
                                  
                                         // Watch for search term
                                         useEffect(() => {
                                           const result = searchTerm.trim()
                                             ? filteredCards.filter(card =>
                                                 card.subtitle?.toLowerCase().includes(searchTerm.toLowerCase())
                                               )
                                             : filteredCards;
                                         
                                           setPrintcards(result);
                                         }, [searchTerm]);
                                     
    


  return (
   <>
   
     
   {rightpop && <Model data={alertMessage} />}
   
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
     <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
       <div className=" rounded" style={{ width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer" }}>
         <img
           src={item.pic}
           style={{ height: "150px", objectFit: "cover", borderRadius: "5px" }}
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
                           onClick={() => toggleReadMore(item.id)}
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
                         className="btn btn-outline-danger btn-sm m-2"
                         type="button"
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         onClick={() => Openmodel(item)}
                       >
                         Watch
                       </button>
                      
                    {localemail &&   <button className="btn btn-outline-info btn-sm m-2 " onClick={() => Viewcard(item)}> View</button>}
                
                      </div>
                      <div>
               
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
         
      
           

           <div className="row" style={{margin:"50px 0px"}}>
                        <h3  style={{fontFamily:"Algerian"}}>Free Videos</h3>
                       {Printcards.map((item) => {
                         const flatIDs = Amountdata?.keyid?.flat() || [];
                         const isButton = flatIDs.includes(item.id);
                         //  {console.log("filtercards.subtitile",item.subtitle)}
     
                         return (
                           <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
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
                           onClick={() => toggleReadMore(item.id)}
                         >
                           {item.expanded ? "Read less" : "Read more"}
                         </span>
                       </p>
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
                         className="btn btn-outline-danger btn-sm m-2"
                         type="button"
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         onClick={() => Openmodel(item)}
                       >
                         Watch
                       </button>
                      
                   {localemail &&    <button className="btn btn-outline-info btn-sm m-2 " onClick={() => Viewcard(item)}> View</button>}
                
                      </div>
                      <div>
                
                                 </div>
                               </div>
                             </div>
                           </div>
                         );
                       })}
                     </div>
           
     
     
           
     
                     </>
                     )}
        </div>
   </>
  )
}

export default Freedemo