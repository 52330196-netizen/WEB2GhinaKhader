import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/countries">Browse Countries</Link></li>
            <li><Link to="/cities">Browse Cities</Link></li>
            <li><Link to="/attractions">Browse Attractions</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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