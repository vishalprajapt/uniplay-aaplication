
import React from "react";
import  './Policy.css'
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {

  const navigate=useNavigate();

  return (
    <>
      <div>
          <button  className='btn '   onClick={()=>navigate(-1)}  style={{fontSize:"30px", fontWeight:"bold",outline:"none", border:"none"}}><HiArrowLongLeft /></button>
      </div>
    <div className="policy-container">
      <h1 className="policy-heading">Privacy Policy</h1>
      <p className="policy-updated">Last updated: April 29, 2025</p>

      <section className="policy-section">
        <h2 className="policy-subheading">1. Introduction</h2>
        <p className="policy-text">
          At HotStream, we value your privacy. This policy explains how we collect, use, and protect your personal information.
          At HotStream, we value your privacy. This policy explains how we collect, use, and protect your personal information.
          At HotStream, we value your privacy. This policy explains how we collect, use, and protect your personal information.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">2. Information We Collect</h2>
        <p className="policy-text">
          We may collect information such as your name, email, IP address, payment details, and your usage activity on our platform.
          We may collect information such as your name, email, IP address, payment details, and your usage activity on our platform.
          We may collect information such as your name, email, IP address, payment details, and your usage activity on our platform.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">3. How We Use Information</h2>
        <p className="policy-text">
          We use your data to improve your experience, personalize content, process payments, and for customer support.
         We use your data to improve your experience, personalize content, process payments, and for customer support.
         We use your data to improve your experience, personalize content, process payments, and for customer support.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">4. Sharing Your Data</h2>
        <p className="policy-text">
          We do not sell your data. We may share it with trusted third parties for payment processing, analytics, or legal obligations.
          We do not sell your data. We may share it with trusted third parties for payment processing, analytics, or legal obligations.

        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">5. Cookies & Tracking</h2>
        <p className="policy-text">
          We use cookies to understand how you use our platform and to improve your experience.
          We use cookies to understand how you use our platform and to improve your experience.
          We use cookies to understand how you use our platform and to improve your experience.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">6. Data Security</h2>
        <p className="policy-text">
          We implement strict security measures to protect your data from unauthorized access or disclosure.
          We implement strict security measures to protect your data from unauthorized access or disclosure.
          We implement strict security measures to protect your data from unauthorized access or disclosure.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">7. Your Rights</h2>
        <p className="policy-text">
          You have the right to access, update, or delete your personal information by contacting us.
          You have the right to access, update, or delete your personal information by contacting us.
          You have the right to access, update, or delete your personal information by contacting us.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subheading">8. Contact Us</h2>
        <p className="policy-text">
          For any privacy-related concerns, please email us at <strong>privacy@hotstream.com</strong>.
        </p>
      </section>
    </div>
        </>
  );
};

export default PrivacyPolicy;
