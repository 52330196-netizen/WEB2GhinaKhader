import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Countries from './components/Countries';
import Cities from './components/Cities';
import Attractions from './components/Attractions';
import About from './components/About';
import Contact from './components/Contact';
import Wishlist from './components/Wishlist';
import './App.css';

function App() {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (attraction) => {
    if (!wishlist.find(item => item.id === attraction.id)) {
      setWishlist([...wishlist, attraction]);
    }
  };

  const removeFromWishlist = (attractionId) => {
    setWishlist(wishlist.filter(item => item.id !== attractionId));
  };

  return (
    <Router>
      <Header wishlistCount={wishlist.length} />
      <Routes>
        <Route path="/" element={<Home addToWishlist={addToWishlist} />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/attractions" element={<Attractions addToWishlist={addToWishlist} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;