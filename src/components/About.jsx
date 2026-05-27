import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Travel Destinations</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Travel Destinations is dedicated to making travel planning simple, fun, and accessible for everyone. We believe that every destination has a unique story to tell, and we're here to help you discover them. Our goal is to inspire wanderlust and make the world feel smaller and more connected.</p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <p>Travel Destinations is built by travel enthusiasts for travel enthusiasts. We provide accurate, up-to-date information about thousands of attractions worldwide. Our platform brings together organized information about countries, cities, and attractions in a way that makes planning your next adventure easy and enjoyable. Whether you're a seasoned traveler or planning your first trip abroad, our website helps you discover hidden gems, understand cultural highlights, and create unforgettable memories.</p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>We are a team of passionate travelers and developers committed to making travel planning easier. Our combined experience spans over 50 countries and hundreds of attractions. We personally visit and verify the information we share to ensure accuracy and relevance.</p>
        </div>
      </div>
    </div>
  );
}

export default About;