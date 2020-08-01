import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';


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
    <Route component={HatsPage} path='/hats' />
    </Switch>
    
    </div>
  );
}

export default App;
