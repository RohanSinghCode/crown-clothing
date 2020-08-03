import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
    <Route component={HomePage} path='/' exact />
    <Route component={ShopPage} path='/shop' />
    </Switch>
    
    </div>
  );
}

export default App;
