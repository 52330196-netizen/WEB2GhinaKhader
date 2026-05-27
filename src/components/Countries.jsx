import turkey from '../assets/images/turkeycountries.jpg';
import france from '../assets/images/francecountries.jpg';
import japan from '../assets/images/japancountries.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';

function Countries() {
  const countries = [
    {
      id: 1,
      name: 'Turkey',
      description: 'Rich history and vibrant culture where East meets West',
      cities: ['Istanbul', 'Cappadocia', 'Antalya'],
      image: turkey,
    },
    {
      id: 2,
      name: 'France',
      description: 'City of lights, art, and romance in the heart of Europe',
      cities: ['Paris', 'Lyon', 'Provence'],
      image: france,
    },
    {
      id: 3,
      name: 'Japan',
      description: 'Ancient traditions blend seamlessly with modern innovation',
      cities: ['Tokyo', 'Kyoto', 'Osaka'],
      image: japan,
    }
  ];

  return (
    <div className="countries-container">
      <h1>Select a Country to Explore</h1>
      <p className="section-description">Choose a destination and start your journey of discovery</p>
      
      <div className="countries-grid">
        {countries.map(country => (
          <div key={country.id} className="country-card">
            <img src={country.image} alt={country.name} />
            <div className="card-content">
              <h3>{country.name}</h3>
              <p>{country.description}</p>
              <div className="attractions-list">
                <h4>Top Cities:</h4>
                <ul>
                  {country.cities.map((city, index) => (
                    <li key={index}>{city}</li>
                  ))}
                </ul>
              </div>
              <Link to="/cities" className="card-link">Explore {country.name} →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;