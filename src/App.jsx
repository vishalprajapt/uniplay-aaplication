import React,{lazy, Suspense, useEffect, useState} from 'react'
//const Home =lazy(()=>import("./FrantPage/Home"))

const Home = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import('./FrantPage/Home')), 1500); // 1.5 second delay
  })
);

//import Home from './FrantPage/Home'
import Header from './FrantPage/Header'
import { BrowserRouter,Routes,Route ,Navigate,useLocation} from 'react-router-dom'
import Loginform from "./FrantPage/Loginform"
import Signupform from "./FrantPage/Signupform"
import UserAccount from './FrantPage/UserAccount'

// const Watch=lazy(()=>import("./Watch"))
import Watch from './Watch'
import { useSelector } from 'react-redux'
import Buy from './FrantPage/Buy';
import Viewditail from './FrantPage/Viewditail'
import Contact from './FrantPage/Contact';
import About from './FrantPage/About'
import Study from './FrantPage/Study'
import Navbar from './FrantPage/Navbar'
import News from './FrantPage/News'
import Sports from './FrantPage/Sports'
import Music from './FrantPage/Music'
import Games from './FrantPage/Games'
import Entertainment from './FrantPage/Entertainment'
import Service from './FrantPage/Service'
import Footer from './FrantPage/Footer';
import './App.css';
import Addcart from './FrantPage/Addcart'
import { ToastContainer } from 'react-toastify';
import Scroll from './FrantPage/Scroll';
import Termscondition from './FrantPage/Termcondition'
import Policy from './FrantPage/Policy';
import Freedemo from './FrantPage/Freedemo';
import Homeloder from './FrantPage/Homeloder';
import Logo from './FrantPage/Logo';
// import FallingDivs from './FrantPage/Div';
// import ModalExample from './FrantPage/modeldemo';
import FAQs from './FrantPage/FAQs';
import Mazagine from './FrantPage/Mazagine';
import Magazinedata from './FrantPage/Magazinedata';
import Buymagazine from './FrantPage/Buymagazine';
import Watchdatapdf from './FrantPage/Watchdatapdf';
import Myorder from './FrantPage/Myorder';
import Myvideo from './FrantPage/Myvideo';




function App(){
  
    const Videodata=useSelector(state=>state.VideoValue.YouTubedata)
  const Localemaildata=localStorage.getItem("email")
  const location = useLocation(); 
  console.log("Localemaildata",Localemaildata);
  


  const Private=({children, redirectTo})=>{

    if(!localStorage.getItem("email")  || Videodata===null){
      return <Navigate to={redirectTo}/>
    }
    else{
      return children
    }
  }

   const validPaths = [
  '/', '/Header', '/Loginform', '/Signupform', '/UserAccount', '/Watch', '/Buypage',
  '/ViewData-page', '/study-page', '/news-page', '/sports', '/music', '/games',
  '/entertainment', '/service', '/Addcart', '/termcondition', '/policy', '/contact',
  '/about', '/Free-demo','/faq','/magazine','/magazine-data',"buymagazine","/my-order"
];
  const is404 = validPaths.includes(location.pathname);

 const [showlogo, setshowlogo]=useState(true)

  const isAuthPage = location.pathname === '/Loginform' || location.pathname === '/Signupform' || location.pathname==="/Watch" || location.pathname==="/UserAccount";

  useEffect(()=>{
    setTimeout(() => {
      setshowlogo(false)
    }, 4000);
  })
  return (
    <>
<Scroll />
   {!Localemaildata &&  showlogo ? <Logo/>:
 
  <>
   <div style={{
  minHeight: '77vh',
  background: isAuthPage ? 'white' : 'rgba(245, 245, 245, 0.5)',
  
}}>
  


  {is404 &&  <Header/>}
    {  is404 && location.pathname !== '/Watch' && location.pathname !== '/Buypage' && location.pathname !== '/Loginform'&& location.pathname !== '/Signupform' 
    && location.pathname !== '/contact'
    && location.pathname !== '/about'
    && location.pathname !== '/service'
    && location.pathname !== '/UserAccount'
      && location.pathname !== '/ViewData-page'
       && location.pathname !== '/Addcart'
         && location.pathname !== '/termcondition'
              && location.pathname !== '/policy'
               && location.pathname !== '/faq'
                && location.pathname !== '/magazine-data'
                 && location.pathname !== '/my-order'
                  && location.pathname !== '/'
    && <Navbar />}
   
    <Routes>
      <Route path='/' element={<Suspense fallback={<Homeloder/>}>
        <Home />
      </Suspense>} />
      <Route path='/Header' element={<Header/>}/>
      <Route path='/Loginform' element={<div style={{marginTop:"75px"}}><Loginform/></div>}/>
      <Route path='/Signupform' element={<div style={{marginTop:"70px"}} ><Signupform/></div>}/>
      <Route path='/UserAccount' element={<div style={{marginTop:"70px"}}><UserAccount/></div>}/>
      <Route path='/Watch' element={<Private redirectTo="/"><Suspense fallback={<Homeloder/>}>
        <Watch/>
        </Suspense></Private>}/>
      <Route path='/Buypage' element={<div style={{marginTop:"65px"}}><Buy/></div>}/>
      <Route path='/ViewData-page'  element={<div style={{marginTop:"75px"}}><Viewditail/></div>}/>
      <Route path='/study-page' element={<Study/>}/>
      <Route path='/news-page' element={<div style={{marginTop:"140px"}} ><News/></div>}/>
      <Route path='/sports' element={<div style={{marginTop:"140px"}} ><Sports/></div>}/>
      <Route path='/music' element={<div style={{marginTop:"140px"}} ><Music  /></div>} />
      <Route path='/games' element={<div style={{marginTop:"140px"}} ><Games /></div>} />
      <Route path='/entertainment' element={<div style={{marginTop:"140px"}} ><Entertainment /></div>} />
      <Route path="/service" element={<Service/>}/>
      <Route path='/Addcart' element={<div style={{marginTop:"60px"}}><Addcart/></div>}/>

     <Route path='/termcondition' element={<div style={{marginTop:"75px"}}><Termscondition/></div>}/>
      <Route path='/policy' element={<div style={{marginTop:"75px"}}><Policy/></div>}/>
      <Route path='/contact' element={<div style={{marginTop:"70px"}}><Contact/></div>}/>
      <Route path='/about' element={<div style={{marginTop:"65px"}}><About/></div>}/>
      <Route path='/Free-demo' element={<div style={{marginTop:"150px"}}><Freedemo/></div>}/>
      <Route path='/faq' element={<div style={{marginTop:"80px"}}><FAQs/></div>}/>
      <Route path='/magazine' element={<div style={{marginTop:"150px"}}><Mazagine/></div>}/>
      <Route path='/magazine-data' element={<div style={{marginTop:"80px"}}><Magazinedata/></div>}/>
      <Route  path='/buymagazine' element={<Buymagazine/>}/>
      <Route path='/watch-datapdf' element={<Watchdatapdf/>}/>
      <Route  path='/my-order' element={<div style={{marginTop:"80px"}}><Myorder/></div>}/>
      <Route path='/upload' element={<Myvideo/>}/>

  
      <Route path='*' element={<h2>404 Found page</h2>}/>
    </Routes>
    </div>
  <div>  

     {/* <ModalExample/> */}
  { is404   && location.pathname !== '/Buypage' && location.pathname !== '/Loginform'&& location.pathname !== '/Signupform' 
  
    && <Footer />}
  </div>

</>
  }
      
  <ToastContainer /> 
  

    </>
  )
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}