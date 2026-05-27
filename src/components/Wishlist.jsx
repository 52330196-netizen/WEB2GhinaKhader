import React from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div className="wishlist-container">
      <h1>My Wishlist ❤️</h1>
      
      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty</p>
          <Link to="/attractions" className="continue-shopping">
            Continue Exploring Attractions
          </Link>
        </div>
      ) : (
        <div className="wishlist-content">
          <div className="wishlist-info">
            <p>You have <strong>{wishlist.length}</strong> items in your wishlist</p>
          </div>
          
          <div className="wishlist-grid">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-card">
                <img src={item.image} alt={item.name} />
                <div className="wishlist-card-content">
                  <h3>{item.name}</h3>
                  <p><strong>Location:</strong> {item.location}</p>
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Rating:</strong> ⭐ {item.rating}/5</p>
                  {item.price && <p><strong>Price:</strong> {item.price === 0 ? 'Free' : `$${item.price}`}</p>}
                  
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;