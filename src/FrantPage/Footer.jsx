import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
      <div style={styles.column}>
      <img style={{width:'100%', maxWidth:"120px",height:"70px",marginBottom:"10px",marginTop:"0px",paddingTop:"0px"}} src='/img/uniplay6.png' alt='...' />
          <p style={{fontSize:"15px",color:"white",marginLeft:"15px"}}>Email:<br/> support@uniplay.com</p>
          <p  style={{fontSize:"15px",color:"white",marginLeft:"15px"}}>Phone:<br/>  +91 12345 67890</p>

        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Company</h4>
          <ul style={{listStyle:"none", margin:"0px", padding:"0px"}}>
            <li  >
              <Link to="/about" style={{textDecoration:"none",fontSize:"15px",color:"white"}}>About Us</Link>
            </li>
            <li >
               <Link to="/faq" style={{textDecoration:"none",fontSize:"15px",color:"white"}}>FAQ's</Link>
            </li>
          </ul>
        
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Products</h4>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li><Link to={"study-page"} style={{textDecoration:"none",fontSize:"15px",color:"white",}}>Study</Link></li>
            <li><Link to={"news-page"} style={{textDecoration:"none",fontSize:"15px",color:"white",}}>News</Link></li>
            <li><Link to={"sports"} style={{textDecoration:"none",fontSize:"15px",color:"white"}}>Sports</Link></li>
            <li><Link to={"music"} style={{textDecoration:"none",fontSize:"15px",color:"white"}}>Music</Link></li>
            <li><Link to={"games"} style={{textDecoration:"none",fontSize:"15px",color:"white"}}>Games</Link></li>
            <li><Link to={"entertainment"}  style={{textDecoration:"none",fontSize:"15px",color:"white"}}>Entertainment</Link></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Help & Support</h4>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li><Link to={"/contact"} style={{textDecoration:"none", fontSize:"15px",color:"white"}}>Contact Us</Link></li>
            <li><Link to={"/termcondition"} style={{textDecoration:"none", fontSize:"15px",color:"white"}}>Terms & Condition</Link></li>
            <li><Link to={"/policy"} style={{textDecoration:"none", fontSize:"15px",color:"white"}}>Policy</Link></li>
          </ul>
         
        
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.bottomText}>© {new Date().getFullYear()} HotStream. All rights reserved.</p>
        <p>Devloped by Vishal Prajapati</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#3492a0', // dark gray-blue
    color: '#F9FAFB', // light text
    padding: '20px 0px',
    fontFamily: 'sans-serif',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    paddingLeft:"10px",
    flex: '1',
    minWidth: '200px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#FACC15', // yellow
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#E5E7EB', // soft gray
    listStyle:"none"
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#E5E7EB',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  bottom: {
    borderTop: '1px solid #374151',
    marginTop: '30px',
    paddingTop: '15px',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: '13px',
    color: 'white',
  },
};

// Add hover styles globally via a <style> tag
const hoverStyles = `
  .footer-link:hover {
    color: #FACC15 !important;
  }
`;
document.head.insertAdjacentHTML("beforeend", `<style>${hoverStyles}</style>`);

export default Footer;
