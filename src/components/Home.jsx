import hagia from '../assets/images/hagiaindex.jpg';
import eiffel from '../assets/images/effelindex.jpg';
import balloon from '../assets/images/ballonindex.jpg';
import senso from '../assets/images/sensoindex.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ addToWishlist }) {
  const featuredAttractions = [
    {
      id: 1,
      name: 'Hagia Sophia',
      location: 'Istanbul, Turkey',
      image: hagia,
      rating: 4.8,
      category: 'Historical'
    },
    {
      id: 2,
      name: 'Eiffel Tower',
      location: 'Paris, France',
      image: eiffel,
      rating: 4.7,
      category: 'Historical'
    },
    {
      id: 3,
      name: 'Hot Air Balloon Ride',
      location: 'Cappadocia, Turkey',
      image: balloon,
      rating: 4.9,
      category: 'Adventure'
    },
    {
      id: 4,
      name: 'Senso-ji Temple',
      location: 'Tokyo, Japan',
      image: senso,
      rating: 4.6,
      category: 'Historical'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Travel Destination</h1>
          <p>Explore cities, attractions, and create your perfect travel itinerary</p>
          <Link to="/attractions" className="cta-button">Start Exploring</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Explore countries</h3>
            <p>Browse destinations Worldwide and discover new places</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏙️</div>
            <h3>Discover Cities</h3>
            <p>Find the best cities in each country to visit</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Visit Attractions</h3>
            <p>Learn about must-see places and exciting activities</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Save Favorites</h3>
            <p>Keep track of places you want to visit</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Plan Itineraries</h3>
            <p>Get suggestions for 1, 3, and 5-day trips</p>
          </div>
        </div>
      </section>

      <section className="featured-attractions">
        <h2>Featured Attractions</h2>
        <div className="featured-grid">
          {featuredAttractions.map(attraction => (
            <div key={attraction.id} className="featured-card">
              <img src={attraction.image} alt={attraction.name} />
              <h3>{attraction.name}</h3>
              <p><strong>Location:</strong> {attraction.location}</p>
              <p><strong>Category:</strong> {attraction.category}</p>
              <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐ {attraction.rating}/5</p>
              <button 
                className="wishlist-btn"
                onClick={() => addToWishlist(attraction)}
              >
                ❤️ Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;