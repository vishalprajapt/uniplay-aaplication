
import React, {useState,useEffect,useRef,lazy,Suspense} from 'react'
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
        id:25,
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
        id:26,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        subtitle:"study",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"img/studyvideo.mp4",
      },
      {
        id:27,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:28,
        pic:"/img/studyimg.jpeg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'Study',
        subcategory:"math",
        
        link:"https://www.youtube.com/embed/P_BROaRvWZ8?si=giVsrtbLHOsAO2yR",
      },
      {
        id:29,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        expanded:false,
        category: 'News',
        subcategory:"aajtak",
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:30,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"ABPnews",
        expanded:false,
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
  
      },
      {
        id:31,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"Bharat24",
        expanded:false,
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:32,
        pic:"/img/newsimg.webp",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'News',
        subcategory:"DDNews",
        expanded:false,
        link:"https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",
      },
      {
        id:33,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"football",
        expanded:false,
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:34,
        pic:"/img/sportsimg.jpg",
        titele:"YouTube",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Sports',
        subcategory:"match",
        expanded:false,
        link:"https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
      },
      {
        id:35,
        pic:"/img/databse.jpeg",
        subtitle:"database",
        price:"299",
        titele:"Database Basics for Students | Learn DBMS from Scratch",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Database ',
        subcategory:"Top 10",
        expanded:false,
        link:"https://www.youtube.com/embed/X7v0O8yiUuY?si=zQ-GGAt87bpdq5-f",
      },
      {
        id:36,
        pic:"/img/digital.jpeg",
        subtitle:"digitalmarket",
        price:"499",
        titele:"Database Basics for Students | Learn DBMS from Scratch",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Digital  Market',
        subcategory:"Top 10",
        expanded:false,
        link:"https://www.youtube.com/embed/3XD1oMKg-N0?si=F2gPi3vdADBH1CSB",
      },
      {
        id:37,
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
        id:38,
        pic:"/img/mern.jpeg",
        price:"399",
        subtitle:"mern",
        titele:"MERN Stack Explained | Learn Full Stack Development Step by Step",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Mern',
        subcategory:"Top 10",
        expanded:false,
        link:"https://www.youtube.com/embed/YZUYaIBHbO8?si=MRUpLirEEA-irv4N",
      },
      {
        id:39,
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
        id:40,
        pic:"/img/mis.jpeg",
        subtitle:"MIS",
        price:"499",
        titele:"MIS for Beginners | Full Course in Hindi",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'MIS',
        subcategory:"Top 10",
        expanded:false,
        link:"https://www.youtube.com/embed/wz0F_3CJLOo?si=ahuYtSb9l25tOs5a",
      },
      {
        id:41,
        pic:"/img/nodeimg.png",
        subtitle:"Node js",
        price:"599",
        titele:"Node Stack Explained | Learn Full Stack Development Step by Step",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Node js',
        subcategory:"Top 10",
        expanded:false,
        link:"https://www.youtube.com/embed/ohIAiuHMKMI?si=TgPVP62_q7ZUfC_F",
      },
      {
        id:42,
        pic:"/img/php.jpeg",
        subtitle:"PHP",
        price:"399",
        titele:"PHP Stack Explained | Learn Full Stack Development Step by Step",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Php',
        subcategory:"Top 10",
        expanded:false,
        link:"https://www.youtube.com/embed/D4DXbRsQAOA?si=Kj4q7kN8y-W5vseI",
      },
      {
        id:43,
        pic:"/img/pyhtonimg.jpeg",
        subtitle:"Python",
        price:"299",
        titele:"Phython Stack Explained | Learn Full Stack Development Step by Step",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Python',
        expanded:false,
        subcategory:"Programming Languange",
        link:"https://www.youtube.com/embed/t2_Q2BRzeEE?si=-rSLqIxW5ljGgl0q",
      },
      {
        id:44,
        pic:"/img/sql.jpeg",
        subtitle:"SQL",
        price:"499",
        titele:"SQL  Explained | Learn  Step by Step",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'SQL',
        subcategory:"Programming Languange",
        expanded:false,
        link:"https://www.youtube.com/embed/UOJZTqA5Loc?si=lY47vz-5DQAipYIl",
      },
      {
        id:45,
        pic:"/img/php.jpeg",
        subtitle:"PHP",
        price:"699",
        titele:"Mastering AI Programming: Best Languages and Techniques for AI Development",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'PHP',
        expanded:false,
        subcategory:"Programming Languange",
        link:"https://www.youtube.com/embed/D4DXbRsQAOA?si=Kj4q7kN8y-W5vseI",
      },
      {
        id:46,
        pic:"/img/java4img.jpeg",
        titele:"Mastering AI Programming: Best Languages and Techniques for AI Development",
        subtitle:"Java",
        price:"199",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'Java',
        expanded:false,
        subcategory:"Programming Languange",
        link:"https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
      },
      {
        id:47,
        pic:"/img/best1.jpeg",
        titele:"Best Programming Languages for Artificial Intelligence (AI)",
        subtitle:"Digital  AI",
        price:"299",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'AI Programming',
        subcategory:"Best Courses",
        expanded:false,
        link:"https://www.youtube.com/embed/iyb38dzetRk?si=37n6M2gSWgR28kjz",
      },
      {
        id:48,
        pic:"/img/best2.jpeg",
        subtitle:"Digital  AI",
        price:"599",
        titele:"Best Programming Languages for Artificial Intelligence (AI)",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'AI Programming',
        subcategory:"Best Courses",
        expanded:false,
        link:"https://www.youtube.com/embed/UNAu-gNSqsM?si=PVvR2BQK_-UbQfU2",
      },
      {
        id:49,
        pic:"/img/best3.jpeg",
        titele:"Best Programming Languages for Artificial Intelligence (AI)",
        subtitle:"Digital  AI",
        price:"499",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'AI Programming',
        subcategory:"Best Courses",
        expanded:false,
        link:"https://www.youtube.com/embed/UNAu-gNSqsM?si=PVvR2BQK_-UbQfU2",
      },
      {
        id:50,
        pic:"/img/best4.jpeg",
        titele:"Best Programming Languages for Artificial Intelligence (AI)",
        subtitle:"Digital  AI",
        price:"599",
        text: "This is a full text of the card. It contains more details and expands when you click Read more.",
        category: 'AI Programming',
        subcategory:"Best Courses",
        expanded:false,
        link:"https://www.youtube.com/embed/iyb38dzetRk?si=37n6M2gSWgR28kjz",
      },
  
    ])

    const musubcategoryarry= [
      ...new Set(cards.slice(10, 26).map((item) => item.subcategory))
    ]
    //console.log("musubcategoryarry",musubcategoryarry);
    
     const locationdata=useLocation();
     const [showLogin, setShowLogin] = useState(false);
     const [loginmodelfrom, setloginmodelfrom]=useState(true)
     const Amountdata=useSelector(state=>state.MUL.buycart)
     const [rightpop, setrightpop]=useState(false);
     const [alertMessage, setAlertMessage]=useState("");
     const [isHovered, setIsHovered] = useState(false);
     const [activeIndex, setActiveIndex] = useState(0);
       const [searchbar, setsearchbar] = useState(false);
       const [searchTerm, setSearchTerm] = useState("");
       
    
   console.log("Amountdata",Amountdata);
   
    




   const localemail=localStorage.getItem("email")


     const Openmodel = (item) => {
    if(!localemail){
        setShowLogin(true); 
    }
     if (localemail) {
       //const isValue=Amountdata?.keyid?.includes(item.id)
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

     const righthanlepop=()=>{
      setrightpop(true)
     }





 const Buycardprice=(item)=>{
  if(!localemail){
       setShowLogin(true); 
          }
    if(localemail){
      Dispatch(BuycardVideos(item))
    navigate("/Buypage")
    localStorage.setItem("pathname",locationdata.pathname)
    }else{
      setShowLogin(true)
    }
   }


    const Viewcard=(item)=>{
      localStorage.setItem("pathname",locationdata.pathname) 
         Dispatch(Viewcarddata(item))
         navigate('/ViewData-page')
   
      }

      
        const handleAddcartdata = (item) => {
          setrightpop(true)
          setAlertMessage("Added Item successfully")
          setLoadingId(item.id)
          Dispatch(Addtocartdata(item))
          setTimeout(() => setLoadingId(null), 1000);
        }

      
        
   useEffect(() => {
         if (rightpop) {
           const timer = setTimeout(() => {
             setrightpop(false);
           }, 1000);
       
           return () => clearTimeout(timer); // cleanup on unmount or before next set
         }
       }, [rightpop]);


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
          
      
//       console.log("Item ID:", item.id, typeof item.id);
// console.log("Flattened IDs:", flatIDs);
      
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
      // const updatedata = Printcards.map((carddata) =>
      //     carddata.id === id ? { ...carddata, expanded: !carddata?.expanded } : carddata
      //   );
      //   setPrintcards(updatedata)
     
  
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


  <div className='container' style={{marginTop:"150px"}}>
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
           <span style={{ color:"black", cursor: "pointer",fontWeight:"bold" }} onClick={() => toggleReadMore(item)}>
             {item.expanded ? "Read less" : "Read more"}
           </span>
         </p>
         <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
       </div>
       <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "10px", }} >
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
               <button className="btn btn-info btn-sm m-1"
               style={{ background:"#0a8d94", color:"white" , }}
               onClick={() => handleAddcartdata(item)}>
                 <span style={{ fontSize: "12px" }}> Add To Cart</span>
               </button>
             ) : (
               <span>
                 <button className="btn btn-secondary btn-sm m-1">
                   {loadingId === item.id ? <div><span className="loader"></span></div> : <span  style={{ fontSize: "12px" }}>Added item</span>}
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

            console.log("Redux IDs:", isButton);
console.log("Item ID:", item.id);
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
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0px ", margin:"0px" }} >
                <div
                  style={{
                    display: "flex",
                 
                    gap: "5px",
                    padding: "2px",
                  }}
                >
                  <button
                    className="btn  btn-outline-danger btn-sm m-1"
                   
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => Openmodel(item)}
                  >
                    Watch
                  </button>
                  {!isButton ? (
                 <button className="btn btn-outline-success btn-sm m-1 "
 
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
                   <button className="btn btn-secondary btn-sm m-1"
                 
                   >
                     {loadingId === item.id ? <div><span className="loader"></span></div> : <span  style={{ fontSize: "10px" }}>Added item</span>}
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



 
      
{(selectedSubcategory === "Programming Languange" || selectedSubcategory === "all" || selectedSubcategory === "") && (
      <div className="row" style={{margin:"50px 0px"}}>
                   <h3  style={{fontFamily:"Algerian"}}>Programming Languange</h3>
                  {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Programming Languange").map((item) => {
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
                            <p className="card-text" style={{ fontSize: "14px",padding:"0px",margin:"5px 0px" }}>
                             <span style={{color:"rgb(79, 78, 78)"}}> {item.expanded ? item.text : item.text ? item.text.substring(0, 52) + "... " : ""}</span>
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
                                <button className="btn btn-outline-info btn-sm  m-1" onClick={() => Viewcard(item)}> View</button>
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


      
{(selectedSubcategory === "Best Courses" || selectedSubcategory === "all" || selectedSubcategory === "") && (
      <div className="row" style={{margin:"50px 0px"}}>
                   <h3  style={{fontFamily:"Algerian"}}>Best Courses</h3>
                  {Printcards.filter((cardsdata)=>cardsdata.subcategory?.trim()==="Best Courses").map((item) => {
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
                        
                          <div className="card-body" style={{ padding: "5px" }}>
                            <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                            <p className="card-text" style={{ fontSize: "14px",padding:"0px",margin:"5px 0px" }}>
                            <span   style={{color:"rgb(79, 78, 78)"}}>  {item.expanded ? item.text : item.text ? item.text.substring(0, 52) + "... " : ""}</span>
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