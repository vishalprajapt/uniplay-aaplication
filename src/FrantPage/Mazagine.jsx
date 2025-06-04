import React,{useState, useCallback, useEffect} from 'react';
import { animated, useSprings } from '@react-spring/web';
import './Magazine.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Viewcarddata } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import Serachbar from './Serachbar';
import { FaSearch } from "react-icons/fa";


   
function Mazagine() { 
  const magazinebook = [ 
    {
      id: 201,
      titele: 'Watch Time India - One Year Subscription (4 Print Issues) Magazines  (English)',
      pic: '/img/magazine1.webp',
      price: 299,
      status:"online",
      pdfdata:"/img/pdf1.pdf",
      category:"Watch Time India"

    },
    {
      id: 202,
      titele: 'Livingetc - One Year Subscription (12 Print Issues) Magazines  (English)',
      pic: '/img/magazine2.webp',
      price: 349,
      status:"offline",
      category:"Livingetc",
      
    },
    
    {
      id: 203,
      titele: 'Drishti IAS Tarkash Annual Current Affairs English 2025 Released February 2025 Magazines  (English)',
      pic: '/img/magazine3.webp',
      price: 199,
      status:"online",
      category:"Drishti IAS Tarkash",
      pdfdata:"/img/pdf1.pdf"
    },
    {
      id: 204,
      titele: 'Spring Board Academy RAS Foundation history of rajasthan Magazines  (english)',
      pic: '/img/magazine6.webp',
      price: 259,
      status:"online",
       category:"Academy RAS ",
       pdfdata:'/img/rajasthanpdf.pdf'
    },
    {
      id: 205,
      titele: 'Vision IAS ETHICS Printed Class Notes | with 125 Case Studies | Set of 4 Books Magazines  (English)',
      pic: '/img/magazine7.webp',
      price: 399,
      status:"Offline",
      category:"Vision IAS ETHICS "
    },
    {
      id: 206,
      titele: 'Drishti IAS Rajasthan Current Affairs Today Hindi March 2025 Magazines  (Hindi)',
      pic: '/img/magazine8.webp',
      price: 179,
      status:"offline",
      category:"Drishti IAS Rajasthan "

    },
    {
      id: 207,
      titele: 'Civil Services Chronicle English magazine April 2025 - Prelims 2025 History Art Magazines  (English)',
      pic: '/img/magazine9.webp',
      price: 249,
      status:"online",
      category:"Civil Services",
      pdfdata:"/img/pdf3.pdf"
    },
    {
      id: 208,
      titele: 'Down to Earth Hindi Magazine, August 2024 Edition - Prakash Ki Chot Magazines  (Hindi)',
      pic: '/img/magazine10.webp',
      price: 219,
      status:"offline",
       category:"Earth Magazine"

    },
    {
      id: 209,
      titele: 'Vigyan Pragati magazine May 2025 Magazines  (Hindi)',
      pic: '/img/magazine11.webp',
      price: 149,
      status:"online",
        category:"Vigyan Pragati magazine",
        pdfdata:"/img/pdfCopy.pdf"
    },
    {
      id: 210,
      titele: 'Mind Map Merathan Rajasthan Ramban Sampuran Rajasthan Gk Written By Madan Sir Magazines  (hindi)',
      pic: '/img/magazine12.webp',
      price: 229,
      status:"offline",
       category:"Merathan Rajasthan"
    },
    {
      id: 211,
      titele: 'Rajasthan Jila Darshan, Utakarsh By Narendra Chaudhary Utkarsh Magazines  (Hindi)',
      pic: '/img/magazine4.webp',
      price: 199,
      status:"online",
        category:"Rajasthan Jila Darshan",
        pdfdata:"/img/pdfCopy.pdf"
    },
    {
      id: 212,
      titele: 'Spring Board Academy RAS Foundation history of rajasthan Magazines  (english)',
      pic: '/img/magazine5.webp',
      price: 259,
      status:"offline",
       category:"RAS Foundation"
    }
  ];

     const navigate=useNavigate()
     const Dispatch=useDispatch()
     const locationpath=useLocation()
     const [searchTerm, setSearchTerm] = useState("");
     const [filtercards , setFilteredCards]=useState(magazinebook)
     const [searchbar, setsearchbar] = useState(false);


     console.log(locationpath.pathname)

  const [springs, api] = useSprings(filtercards.length, index => ({
    transform: 'scale(1) translateY(0px)',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
    config: { tension: 300, friction: 20 }
  }));

  const handleMouseEnter = (index) => {
    api.start(i => i === index ? {
      transform: 'scale(1.05) translateY(-8px)',
      boxShadow: '0px 10px 20px rgba(13, 13, 13, 0.16)'
    } : {});
  };

  const handleMouseLeave = (index) => {
    api.start(i => i === index ? {
      transform: 'scale(1) translateY(0px)',
      boxShadow: '0px 5px 10px rgba(14, 13, 13, 0.1)'
    } : {});
  };

  const Mazagineitem=(item)=>{
     localStorage.setItem("pathname", locationpath.pathname)
     Dispatch(Viewcarddata(item))
    navigate("/magazine-data")
  }


  //  function debounce(func, delay){
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args);
  //     }, delay);
  //   };
  // }
 // Debounced effect    
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (!searchTerm.trim()) {
        setFilteredCards(magazinebook);
      } else {
        const filtered = magazinebook.filter((item) =>
          item.titele.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCards(filtered);
      }
    }, 500); 

    return () => clearTimeout(debounceTimer); 
  }, [searchTerm, magazinebook]);

    const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // debouncedSearch(value); // ✅ only pass the string
  };
 

  return (
    <div className='container ' style={{padding:"50px 0px"}}>


     <div
    style={{ display: "flex", justifyContent: "end", marginBottom: "30px",  alignItems: "center", gap: "10px", }}
     
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
                           onChange={handleChange}
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

                   
        {searchTerm && filtercards.length === 0 && (
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

  <div className="row">
      {springs.map((springStyle, index) => {
        const item = filtercards[index];
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}   onClick={()=>Mazagineitem(item)}>
            <animated.div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="rounded"
              style={{
                ...springStyle,
                padding: '10px 5px 5px 30px',
                background: '#fff',
                width: '100%',
                height: '360px',
                cursor: 'pointer',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                borderRadius: '10px',
             
              }}
            >
              <div >
                <img
                  src={item.pic}
                  alt={item.titele}
                  style={{
                    width: '200px',
                    height: '220px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    backgroundColor: '#f5f5f5',
                    padding: '5px',
                  }}
                />
              </div>
              <div className="card-body" style={{ padding: '10px' }}>
                <p style={{ fontSize: '13px', marginBottom: '6px' }} className='namedata'>
                  {item.titele.slice(0,60)+"..."}
                </p>
                <span>
                  <b style={{ marginRight: '10px' }}>{`₹${item.price}`}</b>
                  <del>{`₹${item.price + 100}`}</del>
                </span>
              </div>
            </animated.div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Mazagine;
