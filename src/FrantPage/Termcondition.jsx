
import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

const TermsAndConditions = () => {
  
  const accountnavigate=useNavigate()

  return (
    <>
   <div>
        <button  className='btn '   onClick={()=>accountnavigate(-1)}  style={{fontSize:"30px", fontWeight:"bold",outline:"none", border:"none"}}><HiArrowLongLeft /></button>
   </div>
    <div style={styles.container}>
         
      <h1 style={styles.heading}>Terms & Conditions</h1>
      <p style={styles.updated}>Last updated: April 29, 2025</p>

      <section style={styles.section}>
        <h2 style={styles.subheading}>1. Acceptance of Terms</h2>
        <p style={styles.text}>
          By accessing and using HotStream, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use the service.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>2. Changes to Terms</h2>
        <p style={styles.text}>
          We reserve the right to update or modify these Terms at any time without prior notice. It is your responsibility to review these Terms periodically.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>3. User Accounts</h2>
        <p style={styles.text}>
          You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>4. Content Ownership</h2>
        <p style={styles.text}>
          All content provided on this platform, including videos, text, graphics, and logos, are the property of HotStream or its content creators and protected by copyright laws.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>5. Subscription & Payments</h2>
        <p style={styles.text}>
          Some content may require payment. By subscribing, you agree to the pricing, billing, and cancellation terms provided at checkout.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>6. Termination</h2>
        <p style={styles.text}>
          We reserve the right to terminate your access to the platform at our sole discretion, without notice, if we believe you have violated these Terms.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>7. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions about these Terms, please contact us at <strong>support@hotstream.com</strong>.
        </p>
      </section>
    </div>
     </>
  );
};

const styles = {
  container: {
    maxWidth: "70%",
    margin: " 0px 15%",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
    backgroundColor: "#f9fafb",
    borderRadius: "10px",
  
  },
  heading: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#1f2937",
  },
  updated: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "25px",
  },
  subheading: {
    fontSize: "20px",
    color: "#1e40af",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#374151",
    lineHeight: "1.6",
  },
};

export default TermsAndConditions;
