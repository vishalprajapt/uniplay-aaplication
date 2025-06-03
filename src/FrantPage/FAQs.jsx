
import React,{useState} from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { animated, useSpring } from '@react-spring/web';

function FAQs() {
  

    const faqs = [
  {
    question: "What is UniPlay?",
    answer: "UniPlay is an online video learning platform where you can watch educational videos categorized under various topics like Free Videos, Study, and Current Affairs.",
  },
  {
    question: " Is UniPlay completely free?",
    answer: "Some videos on UniPlay are completely free, while others require you to purchase them. You can explore all content after logging in.",
  },
    {
    question: "  How can I purchase a video?",
    answer: "Click the Buy button on any paid video. You’ll need to fill in your address, and then complete the payment using online gateways like Razorpay or Cashfree."
  },
  {
    question: " Is UniPlay completely free?",
    answer: "Some videos on UniPlay are completely free, while others require you to purchase them. You can explore all content after logging in.",
  },
  {
    question: " Once I purchase a video, can I access it anytime",
    answer: "Yes, once purchased, the video will remain accessible in your account. You can watch it anytime from your dashboard.",
  },
  {
    question: " What are Free Videos?",
    answer: "Free Videos are videos that can be accessed without any payment. You just need to log in to your account to watch them.",
  },
  {
    question: " Can I get a refund if I buy a video by mistake",
    answer: "Currently, refunds are not available. Please read the video description carefully before making a purchase.",
  },
]

    const [openIndex, setOpenIndex] = useState(null);

   const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
   <>
   <div style={{display:"flex",  flexDirection: "row", gap:"30px",marginBottom:"20px",background:"rgba(182, 240, 237, 0.31)"}}>
    <div style={{padding:"50px 100px", flex:"1"}}>
        <h2 style={{color:"rgb(32, 177, 170)"}}>FAQ's</h2>
        <p style={{fontSize:"13px",marginTop:"20px"}}>Have questions? Here you’ll find the answers most valued by our partners, along with access to step-by-step instructions & support.</p>
    </div>
    <div style={{padding:"50px",flex:"1"}}  className="d-none d-md-block">
        <img src="/img/faqImage2.svg" alt="" style={{filter: "opacity(0.8) contrast(60%)",height:"230px",marginLeft:"30px"}} />
    </div>
   </div>
   <div className="max-w-2xl " style={{margin:"0px 20%",width:"60%"}}>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{color:"rgb(32, 177, 170)"}}>Frequently Asked Questions</h2>
      <div className="space-y-4" >
        {faqs.map((faq, index) =>{
          const isOpen = openIndex === index;
           const animationStyles = useSpring({
            from: { height: 0, opacity: 0 },
            to: {
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            },
            config: { tension: 250, friction: 30 },
          });
       return (     
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-3 cursor-pointer bg-white shadow"
            onClick={() => toggleFAQ(index)}
           style={{marginBottom:"20px", }}
          >
           <div style={{display:'flex', justifyContent:"space-between"}}>
            <div>
             <h4 className="text-lg font-medium flex justify-between items-center" style={{fontSize:"15px"}}>
              {faq.question}
            </h4>
           </div>

           <div>
             <span style={{cursor:"pointer", fontSize:"15px",marginRight:"10px"}}   >{openIndex === index ?   <RiSubtractFill />: <IoMdAdd />}</span>
           </div>
           </div>
           <animated.div style={{ overflow: "hidden",...animationStyles }}>
             {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
           </animated.div>
          </div>
        )
})}
      </div>
    </div>
   
   
   </>
  )
}

export default FAQs