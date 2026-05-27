import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ wishlistCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">✈️ Travel Destination</Link>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/countries">Countries</Link></li>
            <li><Link to="/cities">Cities</Link></li>
            <li><Link to="/attractions">Attractions</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/wishlist" className="wishlist-link">❤️ Wishlist ({wishlistCount})</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;