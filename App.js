// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/catalog" component={CatalogPage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </Router>
);

export default App;
