import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/countries">Browse Countries</a></li>
            <li><a href="/cities">Browse Cities</a></li>
            <li><a href="/attractions">Browse Attractions</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📧 Email: info@traveldestination.com</p>
          <p>📱 Phone: +961 79 377 072</p>
          <p>📍 Address: Tripoly, Lebanon</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook: Travil_Destination</p>
          <p>Instagram: Travil_Destination</p>
          <p>Twitter: Travil_Destination</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Travel Destinations. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;