import hagia from '../assets/images/hagiaattractions.jpg';
import eiffel from '../assets/images/eiffelattractions.jpg';
import topkapi from '../assets/images/topkapiattractions.jpg';
import ballon from '../assets/images/ballonattractions.jpg';
import griffith from '../assets/images/griffithattractions.jpg';
import plitvice from '../assets/images/plitviceattractions.jpg';
import konyalty from '../assets/images/konyaltyattractions.jpg';
import malibue from '../assets/images/malibueattractions.jpg';
import barcelona from '../assets/images/barcelonaattractions.jpg';
import bazar from '../assets/images/bazarattractions.jpg';
import React, { useState } from 'react';
import './Attractions.css';

function Attractions({ addToWishlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const attractions = [
    {
      id: 1,
      name: 'Hagia Sophia',
      location: 'Istanbul, Turkey',
      category: 'Historical',
      rating: 4.8,
      price: 15,
      image: hagia,
    },
    {
      id: 2,
      name: 'Eiffel Tower',
      location: 'Paris, France',
      category: 'Historical',
      rating: 4.7,
      price: 35,
      image: eiffel,
    },
    {
      id: 3,
      name: 'Topkapi Palace',
      location: 'Istanbul, Turkey',
      category: 'Historical',
      rating: 4.6,
      price: 20,
      image: topkapi,
    },
    {
      id: 4,
      name: 'Hot Air Balloon',
      location: 'Cappadocia, Turkey',
      category: 'Adventure',
      rating: 4.9,
      price: 150,
      image: ballon,
    },
    {
      id: 5,
      name: 'Griffith Observatory',
      location: 'Los Angeles, USA',
      category: 'Nature',
      rating: 4.6,
      price: 0,
      image: griffith,
    },
    {
      id: 6,
      name: 'Plitvice Lakes',
      location: 'Croatia',
      category: 'Nature',
      rating: 4.8,
      price: 0,
      image: plitvice,
    },
    {
      id: 7,
      name: 'Konyaalti Beach',
      location: 'Antalya, Turkey',
      category: 'Beach',
      rating: 4.5,
      price: 0,
      image: konyalty,
    },
    {
      id: 8,
      name: 'Malibu Beach',
      location: 'Los Angeles, USA',
      category: 'Beach',
      rating: 4.6,
      price: 0,
      image: malibue,
    },
    {
      id: 9,
      name: 'Barcelona Beaches',
      location: 'Barcelona, Spain',
      category: 'Beach',
      rating: 4.5,
      price: 0,
      image: barcelona,
    },
    {
      id: 10,
      name: 'Grand Bazaar',
      location: 'Istanbul, Turkey',
      category: 'Shopping',
      rating: 4.5,
      price: 0,
      image: bazar,
    }
  ];

  const categories = ['All', ...new Set(attractions.map(a => a.category))];

  let filtered = attractions.filter(attraction => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           attraction.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || attraction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="attractions-container">
      <h1>Explore World Attractions</h1>
      <p className="section-description">Discover the most amazing attractions from our catalog</p>

      <div className="filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search attractions or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Sort by Rating</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </div>

      <div className="results-info">
        <p>Showing {filtered.length} attractions</p>
      </div>

      <div className="attractions-grid">
        {filtered.map(attraction => (
          <div key={attraction.id} className="attraction-card">
            <img src={attraction.image} alt={attraction.name} />
            <div className="card-content">
              <h3>{attraction.name}</h3>
              <p><strong>Location:</strong> {attraction.location}</p>
              <p><strong>Category:</strong> {attraction.category}</p>
              <p><strong>Rating:</strong> ⭐ {attraction.rating}/5</p>
              <p><strong>Price:</strong> {attraction.price === 0 ? 'Free' : `$${attraction.price}`}</p>
              <button 
                className="card-link"
                onClick={() => addToWishlist(attraction)}
              >
                ❤️ Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attractions;