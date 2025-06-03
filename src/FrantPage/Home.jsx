import React, { useEffect, useState, useRef, useCallback,lazy,Suspense } from 'react'
import './Home.css'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Model from './Model'
import { useDispatch } from 'react-redux'
import { WatchView, YouTubeVideo, BuycardVideos, Addtocartdata } from '../Redux/Action'
import Signupmodel from './Signupmodel';
import Navbar from './Navbar';
import { Viewcarddata } from '../Redux/Action';
  //const Homeloder= lazy(()=>import("./Homeloder"))
  import Homeloder from './Homeloder'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaSearch } from "react-icons/fa";
import Serachbar from './Serachbar';
import { FaArrowUp } from 'react-icons/fa';

const LoginModal=lazy(()=>import("./Loginmodel"))
import { useSprings, animated } from '@react-spring/web'
import Logo from './Logo'





function Home(props) {
   const [showLogin, setShowLogin] = useState(false);
  const swiperRefdata = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const watchvalue = useSelector(state => state.Add.user)
  const AddSlector = useSelector(state => state.Addreducer.cartarray)
  const locationdata = useLocation();
  // const Seclectdata=useSelector(state=>state.MUL.buycart)

  //  console.log("AddSlector",AddSlector);

  const navigate = useNavigate();

  const [cards, setcards] = useState([
    {
      id: 1,
      pic: "/img/studyimg.jpeg",
      subtitle: "study",
      titele: "Bca  - Computer network(code-101)",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      expanded: false,
      category: 'Study',
      subcategory: "math",
      price:"199",
      link: "https://www.youtube.com/embed/Hizdc4XVJ1E?si=XoS1GPWQZbemv_lp",
    },
     {
        id:2,
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
        id:3,
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
      id: 4,
      pic: "/img/java4img.jpeg",
      subtitle: "java",
      titele: "Java for Beginners | Build Your First Dynamic Website",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      expanded: false,
      category: 'Study',
      subcategory: "math",
      price:"499",
      link: "https://www.youtube.com/embed/yRpLlJmRo2w?si=GhxUJ1z6uqtfZw2q",
    },
      {
        id:5,
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
      id: 6,
      pic: "/img/news1.jpeg",
      subtitle: "Breaking News",
      titele: "Breaking News: [Topic] Shocks the World! | Latest Update",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'News',
      subcategory: "ABPnews",
      price:"299",
      link: "https://www.youtube.com/embed/S7gH-cLs4Pw?si=_RUr9KylEzATcJ12",

    },
    {
        id:7,
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
        id:8,
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
      id: 9,
      pic: "/img/sportsimg.jpg",
      subtitle: "Match",
      titele: "The Best Player Moments of [Sport] | [Player] Shows Why They're the Best!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'Sports',
      subcategory: "football",
      price:"399",
      link: "https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
    },
    {
      id: 10,
      pic: "/img/sports1.jpeg",
      subtitle: "Hockey",
      titele: "The Best Player Moments of [Sport] | [Player] Shows Why They're the Best!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'Sports',
      subcategory: "match",
      price:"299",
      link: "https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
    },
    {
      id: 11,
      pic: "/img/sports3.jpeg",
      subtitle: "Football",
      titele: "The Best Player Moments of [Sport] | [Player] Shows Why They're the Best!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'Sports',
      subcategory: "boxing",
      price:"399",
      link: "https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
    },
    {
      id: 12,
      pic: "/img/sports6.jpeg",
      subtitle: "Football ",
      titele: "The Best Player Moments of [Sport] | [Player] Shows Why They're the Best!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'Sports',
      subcategory: "Hockey",
      price:"499",
      link: "https://www.youtube.com/embed/s0sfPOr6bhk?si=ZuceeYFK_LIMohT7",
    },
    {
      id: 13,
      pic: "/img/musicimg.jpg",
      subtitle: "Pop music",
      titele: "New Music Release: [Song Name] by [Artist] | Official Video!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'music',
      subcategory: "music",
      price:"599",
      link: "www.youtube.com/embed/fwxripI3OOk?si=LkNhOhXCVeH0zxxI",
    },
    {
      id: 14,
      pic: "/img/music2.jpeg",
      subtitle: "Rock music",
      titele: "New Music Release: [Song Name] by [Artist] | Official Video!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'music',
      subcategory: "music",
      price:"99",
      link: "www.youtube.com/embed/fwxripI3OOk?si=LkNhOhXCVeH0zxxI",
    },
    {
      id: 15,
      pic: "/img/music5.jpeg",
      subtitle: "Soul music",
      titele: "New Music Release: [Song Name] by [Artist] | Official Video!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'music',
      subcategory: "music",
      price:"199",
      link: "https://www.youtube.com/embed/MprUsRt2uMU?si=0DruHJ5A2I-so1i2",
    },
    {
      id: 16,
      pic: "/img/music8.webp",
      subtitle: "Blues music",
      titele: "New Music Release: [Song Name] by [Artist] | Official Video!",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'music',
      subcategory: "music",
      price:"299",
      link: "https://www.youtube.com/embed/MprUsRt2uMU?si=0DruHJ5A2I-so1i2",
    },
    {
      id: 17,
      pic: "/img/Entertainmentimg.jpeg",
      titele: "YouTube",
      subtitle: "Theater",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'entertainment',
      subcategory: "funny",
      price:"399",
      link: "https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
    },
    {
      id: 18,
      pic: "/img/enter1.jpeg",
      subtitle: "Televison shows",
      titele: "Top 10 Celebrities You Didn’t Know Were [Surprising Fact]",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'entertainment',
      subcategory: "Pogo",
      price:"499",
      link: "https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
    },
    {
      id: 19,
      pic: "/img/enter5.jpeg",
      subtitle: "Movies",
      titele: "Top 10 Celebrities You Didn’t Know Were [Surprising Fact]",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'entertainment',
      subcategory: "nike",
      price:"599",
      link: "https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
    },
    {
      id: 20,
      pic: "/img/enter3.jpeg",
      subtitle: "Circus",
      titele: "Top 10 Celebrities You Didn’t Know Were [Surprising Fact]",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'entertainment',
      subcategory: "nike",
      price:"99",
      link: "https://www.youtube.com/embed/OeRxa3-ByaA?si=831oSl8Fh8Ffg0Gy",
    },
    {
      id: 21,
      pic: "/img/games2.jpeg",
      subtitle: "Lodu",
      titele: "Epic Gameplay: [Game Name] | Full Walkthrough [Level/Chapter]",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'games',
      subcategory: "train",
      price:"199",
      link: "https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
    },
    {
      id: 22,
      pic: "/img/Pubgimg.jpeg",
      subtitle: "Pubg",
      titele: "Epic Gameplay: [Game Name] | Full Walkthrough [Level/Chapter]",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'games',
      subcategory: "pubg",
      price:"299",
      link: "https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
    },
    {
      id: 23,
      pic: "/img/games2.jpeg",
      subtitle: "Lodu",
      titele: "Epic Gameplay: [Game Name] | Full Walkthrough [Level/Chapter]",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'games',
      subcategory: "cars",
      price:"399",
      link: "https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
    },
    {
      id: 24,
      pic: "/img/games4.jpeg",
      subtitle: "Free fire",
      titele: "Epic Gameplay: [Game Name] | Full Walkthrough [Level/Chapter]",
      text: "This is a full text of the card. It contains more details and expands when you click Read more.",
      category: 'games',
      subcategory: "Bike",
      price:"499",
      link: "https://www.youtube.com/embed/74iNqJ7B0mo?si=D327gwK8esXk4Q1W",
    },

  ])


  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("");
  const [rightpop, setrightpop] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showpassword, setshowpassword] = useState(false)
  const Dispatch = useDispatch();
  const [signupmodel, setsignupmodel] = useState(false);
  //const [readmore, setreadmore]=useState(false);
  const Amountdata = useSelector(state => state.MUL.buycart)
  const [filtercard, setfiltercards] = useState([]);
  //const [buttonhide, setbuttonhide]=useState(true)
  const PriceSelecter = useSelector(state => state.CardPrice.Pricecards)
  const [homeloding, sethomeloding] = useState(true);
  // const scrollRef=useRef(null);
  const [cardsToShow, setCardsToShow] = useState(8);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const [loadingbutton, setloadingbutton] = useState(false);
  const [buttonloder, setbuttonloder] = useState(true)
  const [loadingId, setLoadingId] = useState(null);
  const [searchbar, setsearchbar] = useState(false)
    const [alertType, setAlertType] = useState("");

   




  useEffect(() => {
    setTimeout(() => {
      setloadingbutton(false)
    }, 500);
  }, [loadingbutton])


  useEffect(() => {
    setEmail(""),
      setpassword("")
  }, [localStorage.getItem("email")])






  //  console.log("Amountdata",Amountdata);

  //  console.log("PriceSelecterdata",PriceSelecter.id);

  const Localemailvalue = localStorage.getItem("email")

  setTimeout(() => {
    sethomeloding(false)

  }, 1200);



  //   {val?<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">


  const Openmodel = (item) => {
     

      if(!Localemailvalue){
        setShowLogin(true); 
      }
    if (Localemailvalue) {
      const flatIDs = Amountdata?.keyid?.flat() || [];
      const isValue = flatIDs.includes(item.id);

      if (!isValue) {
        setAlertMessage("Please, Purchase Video")
        righthanlepop();
        setAlertType("error")

      } else {
        Dispatch(YouTubeVideo(item))
        navigate("/Watch")
      }
    }
  };







  const Homedata = { email: "admin@gmail.com", password: "12345678", phone: 7505200576, Name: "Vishal" }

  const Sumbitdata = (e) => {
    e.preventDefault();


    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (Email.length === 0) {
      setAlertMessage("Enter your Email")
      righthanlepop();
       setAlertType("error")
    }
    else if (!emailPattern.test(Email)) {
      setAlertMessage("Invalid Email ");
      righthanlepop();
       setAlertType("error")
    }
    else if (Password.length === 0) {
      setAlertMessage("Enter your password")
      righthanlepop();
       setAlertType("error")
    } else if (Email !== Homedata.email) {
      setAlertMessage("Email not  match")
      righthanlepop();
       setAlertType("error")
    }
    else if (Password !== Homedata.password) {
      setAlertMessage("Password not  match")
      righthanlepop();
       setAlertType("error")
    }
    else {
      if (watchvalue === null) {
        //Dispatch(WatchView({email: Homedata.email, password: Homedata.password, phone:Homedata.phone, Name:Homedata.Name}))
        setAlertMessage("Successfull login")
        righthanlepop();
         setAlertType("success")

        localStorage.setItem("email", Homedata.email)
        localStorage.setItem("password", Homedata.password)
        localStorage.setItem("phone", Homedata.phone,)
        localStorage.setItem("Name", Homedata.Name)
        // document.querySelector(".btn-close")?.click(); // Close modal using close button
        // document.body.classList.remove("modal-open");  // Remove scroll lock
        // const backdrop = document.querySelector(".modal-backdrop");
        // if (backdrop) backdrop.remove();
        // navigate("/")

      }
    }
  }

  // const Viewvideo=()=>{

  //   Dispatch(WatchView({email: Homedata.email, password: Homedata.password, phone:Homedata.phone, Name:Homedata.Name}))

  //   navigate("/watch")


  // }


  useEffect(() => {
    if (rightpop) {
      const timer = setTimeout(() => {
        setrightpop(false);
      }, 1000);

      return () => clearTimeout(timer); // cleanup on unmount or before next set
    }
  }, [rightpop]);

  //  console.log("alertMessage",alertMessage);


  const righthanlepop = () => {
    setrightpop(true)
  }


  const Removesignupmodel = () => {
    setsignupmodel(false)
  }



  const handleSignupClick = () => {
    setsignupmodel(true);
  };



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
           setAlertType("error")
          setAlertMessage("Please, Purchase Video")
          righthanlepop();
         }

     }
  const forucards = cards.slice(0, 4).map((item) => item)

  const Buycardprice = (item) => {
    if(!Localemailvalue){
        setShowLogin(true); 
      }
    if (Localemailvalue) {
      Dispatch(BuycardVideos(item))
      navigate("/Buypage")
      localStorage.setItem("pathname",locationdata.pathname)
    }
  }

  const Viewcard = (item) => {
    localStorage.setItem("pathname",locationdata.pathname)
    Dispatch(Viewcarddata(item))
    navigate('/ViewData-page')

  }

  useEffect(() => {
    if (props.category) {
      const filtercategory = cards.filter((data) => data.category === props.category);
      setfiltercards(filtercategory);
    } else {
      setfiltercards(cards);
    }
  }, [props.category, cards]);


  const loadMoreCards = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      setCardsToShow((prev) => prev + 8);
      setLoading(false);
    }, 1000);
  };



  // console.log("window.innerHeight",window.innerHeight)
  // console.log("window.scrollY",window.scrollY);
  // console.log("totalheight",document.documentElement.scrollHeight - 1);


  useEffect(() => {
    const handleScroll = () =>{
      const scrollBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight-50;

      if (scrollBottom) {
        loadMoreCards();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, homeloding]);

  const getRepeatedCards = () => {
    const fourCards = cards.slice(0, 8);

    if (fourCards.length < 8) return [];

    const repeatedCards = [];

    while (repeatedCards.length < cardsToShow) {
      repeatedCards.push(...fourCards);
    }

    return repeatedCards.slice(0, cardsToShow);
  };

  useEffect(() => {
    const updatedCards = getRepeatedCards();
    setFinalcards(updatedCards);
    setallcards(updatedCards); // 🛠 keep allcards updated
  }, [cards, cardsToShow]);
  

  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  const [finalcards, setFinalcards] = useState(getRepeatedCards());
  const [searchTerm, setSearchTerm] = useState("");
  
  const [allcards, setallcards] = useState(getRepeatedCards());

  // console.log('finalcards', finalcards)

  const Searchdata = (e) => {
    const searchValue = e.target.value;

  if (!searchValue.trim()){
      setFinalcards(allcards);
    } else {
      const filtered = getRepeatedCards().filter((item) =>
        item.subtitle && item.subtitle.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("Filtered Cards: ", filtered);
      setFinalcards(filtered);
    }
  };

  const debouncedSearch = debounce(Searchdata, 1000);







  const handleAddcartdata = (item) => {
     
    setrightpop(true)
     setAlertType("success")
    setAlertMessage("Added Item successfully")
    setLoadingId(item.id)
    Dispatch(Addtocartdata(item))
    setTimeout(() => setLoadingId(null), 1000);

  }

  const [isVisible, setIsVisible] = useState(false);

  // Scroll detect karne ke liye
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  console.log(window.pageYOffset ,"window.pageYOffset ")


  console.log(window.pageYOffset)
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


const [loginmodelfrom, setloginmodelfrom]=useState(true)  
 

//  const datamodelfalse=()=>{
//   setShowLogin(false)
//  }
 //  const [isHoveredcard, setHoveredcard] = useState(null);


     const [springs, api] = useSprings(finalcards.length, index => ({
  transform: 'scale(1) translateY(0px)',
  boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
  config: { tension: 300, friction: 20 }
}));

const handleMouseEnter = (index) => {
  api.start(i => i === index ? {
    transform: 'scale(1.16) translateY(-8px)',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
  } : {});
};

const handleMouseLeave = (index) => {
  api.start(i => i === index ? {
    transform: 'scale(1) translateY(0px)',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.1)'
  } : {});
};
    

 

  return (

    <>
     {/* <Logo/> */}
      {showLogin &&
  <Suspense>
      <LoginModal  datafalse={() => setShowLogin(false)}/>
  </Suspense>
   }

      {rightpop && <Model data={alertMessage} type={alertType} />}
      <Navbar/>

      {/* <Suspense fallback={<Homeloder />}>

      </Suspense> */}
{/* 
      {homeloding ? (<Homeloder />) :
        ( */}
          <>

          {
            isVisible && (
              <button
                onClick={scrollToTop}

                className='btn '
                style={{
                  position: 'fixed',
                  bottom: '30px',
                  right: '20px',
                  background:"rgba(0, 255, 255, 0.881)",
                  borderRadius: '50%',
                  padding: '10px',
                  fontSize: '15px',
                  cursor: 'pointer',
                  zIndex: 1000,
                  
                }}
                title="Go to top"
              >
                <FaArrowUp />
              </button>
            )
          }


            <div className='container'style={{ marginTop: "140px", background: "rgba(245, 245, 245, 0.5)" }}>

              <div
                style={{ display: "flex", justifyContent: "end", marginTop: "30px", alignItems: "center", gap: "10px", }}

              >
        
                <span
                  onMouseEnter={() => setsearchbar(true)}
                  onMouseLeave={() => {
                    if (!searchTerm) setsearchbar(false); // agar input khaali hai to hi hataye
                  }}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
             
                 
                >
                  <div style={{ fontSize: "25px", cursor: "pointer" }}>
                    <FaSearch style={{color:"#0a8d94"}} />
                  </div>

                <div
                 style={{
                  overflow: "hidden",
                  transition: "width 1s ease",
                  width: searchbar || searchTerm ? "160px" : "0px",
                }}
                >
                <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value); 
                        debouncedSearch(e);            
                      }}
                      style={{
                        padding: "5px",
                        border:"1px solid #0a8d94",
                        borderRadius:"5px",
                        outline: "1px solid #0a8d94",
                        
                        width: "150px",
                        transition: "opacity 1s ease",
                        opacity: searchbar || searchTerm ? 1 : 0,
                      }}
                    />
                </div>
                </span>
              </div>

              {searchTerm && finalcards.length === 0 && (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    color: "#888",
    fontSize: "18px",
    marginTop:"70px"
  }}>
   
    <p style={{ marginTop: "40px" ,fontSize:"30px"}}>No results found</p>
  </div>
)}

              <div style={{ margin: "10px 0px 0px 10px" }}>

              { finalcards.length>=1 && finalcards  && (
                <h3 style={{ fontFamily: "Algerian" }}>Best our Videos</h3>
              )}
                <div className="row">

                {springs.map((springStyle, index) => {
                   const item = finalcards[index]; 
                    const flatIDs = Amountdata?.keyid?.flat() || [];
                    const isButton = flatIDs.includes(item.id);
                    //  {console.log("filtercards.subtitile",item.subtitle)}

          

                    return (
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                      
                     

                      >
                        <animated.div

                          onMouseEnter={() => handleMouseEnter(index)}
                         onMouseLeave={() => handleMouseLeave(index)}
                         
 
                          className=" rounded" style={{
                            ...springStyle,
                            width: "95%", height: "auto", paddingBottom: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", cursor: "pointer",marginBottom:"20px" }}>
                          <img
                            src={item.pic}
                            style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body" style={{ padding: "5px" }}>
                            <p style={{padding:"0px",margin:"0px"}} ><b>{item.subtitle}</b></p>
                            <p className="card-text" style={{ fontSize: "14px",padding:"0px",margin:"0px" }}>
                             <span style={{color:"rgb(79, 78, 78)"}}> {item.expanded ? item.text : item.text ? item.text.substring(0, 52) + "... " : ""}</span>
                              <span style={{ color: "black", cursor: "pointer",fontWeight:"bold" }} onClick={() => toggleReadMore(item)}>
                                {item.expanded ? "Read less" : "Read more"}
                              </span>
                            </p>
                            <span><b style={{marginRight:"10px"}}>{`₹${item.price}`}</b>  <del>{`₹${Number(item.price)+100}`}</del></span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", padding: "0px", }} >
                            <div>
                              <button id="openLoginModalBtn" className="btn btn-outline-danger btn-sm m-1" type="button"   onClick={() => Openmodel(item)}>Watch</button>
                              {!isButton ? (
                                <button className="btn btn-outline-success btn-sm m-1"  onClick={() => Buycardprice(item)} > Buy</button>
                              ) : (
                                <button className="btn btn-outline-info btn-sm m-1" onClick={() => Viewcard(item)}> View</button>
                              )}
                            </div>
                            <div>
                              {Localemailvalue && (
                                 !isButton &&(
                                !AddSlector.some(cartItem => cartItem.id === item.id) ? (
                                  <button className="btn  btn-sm m-1"
                                  style={{ background:"#0a8d94", color:"white" }}
                                  onClick={() => handleAddcartdata(item)}>
                                    <span style={{ fontSize: "10px" }}> Add To Cart</span>
                                  </button>
                                ) : (
                                  <span>
                                    <button className="btn btn-secondary btn-sm m-2">
                                      {loadingId === item.id ? <div><span className="loader"></span></div> : <span  style={{ fontSize: "10px" }}>Added item</span>}
                                    </button>
                                  </span>
                                ))
                              )}
                            </div>
                          </div>
                        </animated.div>
                      </div>
                    );
                  })}
                </div>
                {loading && (
                  <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", padding: "20px" }}>
                    <div className="spinner"></div>
                    <p>loading...</p>
                  </div>
                )}

              </div>







      {/* login model */}

              {/* {!signupmodel && !Localemailvalue &&

                <div className="modal fade   "

                  style={{

                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.6)",
                    zIndex: "1040"


                  }}

                  id="staticBackdrop" data-bs-backdrop="false" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog  customodel" >
                    <div className="modal-content" style={{ width: "90%", maxWidth: "25rem", height: "auto" }}>
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Login Form </h1>
                        <button type="button" className="btn-close no-outline" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div>
                          <form action="" autoComplete='off' onSubmit={Sumbitdata}>
                            <div style={{ margin: "10px 20px" }}>
                              <label htmlFor=""><b>Email</b></label><br />
                              <input type="text" placeholder='Enter Email' style={{ width: "100%", height: "35px", paddingLeft: "10px" }} name="" id="" autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div style={{ margin: "10px 20px" }}>
                              <label htmlFor="" ><b>Password</b></label><br />
                              <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid", borderRadius: "2px" }} className='myinputclass'>
                                <input type={showpassword ? "text" : "password"} placeholder='Enter Password' style={{ width: "100%", height: "30px", paddingLeft: "10px" }} autoComplete='new-password' onChange={(e) => { setpassword(e.target.value) }} />
                                <button type='button' onClick={() => setshowpassword(!showpassword)} id='mybtn' className='btn specialbutton'>
                                  {showpassword ?
                                    <i className="fa-solid fa-eye-slash"></i>
                                    :
                                    <i className="fa-solid fa-eye"></i>
                                  }</button>
                              </div>


                            </div>
                            <div className="modal-footer">
                              <button className="btn btn-primary" style={{ fontSize: "10px" }} >Login</button>
                            </div>
                          </form>

                          <div style={{ display: "flex", marginLeft: "15px" }}>
                            <div>
                              <p style={{ fontSize: "13px" }}>Don't have an account?</p>
                            </div>
                            <div>
                              <button type='button' style={{ color: "blue", padding: "0px", margin: "0px", outline: "none", border: "none" }} className='btn ' onClick={handleSignupClick}><p style={{ fontSize: "13px" }}>Sign up</p></button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              } */}


              {signupmodel && <Signupmodel removepop={Removesignupmodel} />}

            </div>

          </>

        {/* )} */}

    </>
  )
}

export default Home