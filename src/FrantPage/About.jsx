import React from 'react';
import './About.css'; // For optional styling

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are passionate about delivering high-quality content
          and services to our users. Our mission is to make learning and access to resources
          easier and more effective for everyone.
        </p>

        <h3>Our Mission</h3>
        <p>
          To provide value through innovation, creativity, and dedication. We aim to
          make technology simple and useful for everyday life.
        </p>

        <h3>Our Vision</h3>
        <p>
          Empower individuals with digital tools, knowledge, and services that help them grow
          personally and professionally.
        </p>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="About Us"
        />
      </div>
    </div>
  );
}

export default About;
