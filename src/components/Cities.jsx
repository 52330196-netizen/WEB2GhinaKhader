import istanbul from '../assets/images/istanbulcity.jpg';
import cappadocia from '../assets/images/cappadociacity.jpg';
import paris from '../assets/images/pariscity.jpg';
import tokyo from '../assets/images/tokyocity.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cities.css';

function Cities() {
  const cities = [
    {
      id: 1,
      name: 'Istanbul, Turkey',
      region: 'Marmara Region',
      population: '15+ million',
      bestTime: 'April-May, September-October',
      description: 'Gateway between Europe and Asia with stunning architecture',
      image: istanbul,
    },
    {
      id: 2,
      name: 'Cappadocia, Turkey',
      region: 'Central Anatolia',
      famous: 'Hot air balloons, fairy chimneys',
      bestTime: 'March-November',
      description: 'Unique rock formations and magical experiences',
      image: cappadocia,
    },
    {
      id: 3,
      name: 'Paris, France',
      region: 'Île-de-France',
      population: '2+ million',
      bestTime: 'April-May, September-October',
      description: 'The city of lights, art, culture, and romance',
      image: paris,
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      region: 'Kanto',
      population: '37+ million',
      bestTime: 'April-May, October-November',
      description: 'Modern metropolis with ancient traditions',
      image: tokyo,
    }
  ];

  return (
    <div className="cities-container">
      <h1>Explore All Cities</h1>
      <p className="section-description">Discover amazing cities from around the world</p>
      
      <div className="cities-grid">
        {cities.map(city => (
          <div key={city.id} className="city-card">
            <img src={city.image} alt={city.name} />
            <div className="card-content">
              <h3>{city.name}</h3>
              {city.region && <p><strong>Region:</strong> {city.region}</p>}
              {city.population && <p><strong>Population:</strong> {city.population}</p>}
              {city.famous && <p><strong>Famous For:</strong> {city.famous}</p>}
              <p><strong>Best Time:</strong> {city.bestTime}</p>
              <p>{city.description}</p>
              <Link to="/attractions" className="card-link">View Attractions →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;