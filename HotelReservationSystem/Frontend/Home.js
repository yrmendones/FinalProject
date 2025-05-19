import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Hotel</h1>
      <p>Find the perfect room for your stay.</p>
      <Link to="/search" className="btn btn-primary">Search Rooms</Link>
    </div>
  );
}

export default Home;