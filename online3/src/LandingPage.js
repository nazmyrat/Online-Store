// src/pages/LandingPage.js
import React from 'react';
import { Button } from 'rsuite';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="store-container">
    <h1>Welcome to the Store</h1>
    <p>Find exclusive products with special discounts.</p>
    <Link to="/catalog">
      <Button appearance="primary">Go to Catalog</Button>
    </Link>
  </div>
);

export default LandingPage;
